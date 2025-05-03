import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const staleRooms = await prisma.groupChallengeRoom.findMany({
      where: {
        OR: [
          {
            status: "waiting",
            updatedAt: {
              lt: new Date(Date.now() - 1000 * 60 * 60), // older than 1 hour
            },
          },
          {
            status: "finished",
            updatedAt: {
              lt: new Date(Date.now() - 1000 * 60 * 60 * 2), // older than 2 hours
            },
          },
        ],
      },
      select: { id: true, roomCode: true },
    });

    const roomIds = staleRooms.map((room) => room.id);
    const roomCodes = staleRooms.map((room) => room.roomCode);

    if (roomIds.length === 0) {
      return NextResponse.json({ message: "No rooms to clean up." });
    }

    // Step 2: Delete participants
    await prisma.groupParticipant.deleteMany({
      where: {
        groupChallengeId: {
          in: roomCodes,
        },
      },
    });

    // Step 3: Delete rooms
    await prisma.groupChallengeRoom.deleteMany({
      where: {
        id: {
          in: roomIds,
        },
      },
    });

    return NextResponse.json({
      message: `Cleanup successful: deleted ${roomIds.length} rooms.`,
    });
  } catch (error) {
    console.error("Cleanup failed:", error);
    return NextResponse.json({ error: "Cleanup failed" }, { status: 500 });
  }
}
