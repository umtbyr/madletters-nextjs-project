import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { participant_id, isHost, roomCode } = await request.json();

    if (!participant_id) {
      return NextResponse.json(
        { error: "participant not found" },
        { status: 400 }
      );
    }

    if (isHost) {
      await prisma.groupParticipant.deleteMany({
        where: {
          groupChallengeId: roomCode,
        },
      });
      await prisma.groupChallengeRoom.delete({
        where: {
          roomCode: roomCode,
        },
      });

      return NextResponse.json({ message: "Room and participants deleted." });
    }

    const participant = await prisma.groupParticipant.delete({
      where: {
        id: participant_id,
      },
    });

    return NextResponse.json({ participant });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete participant" },
      { status: 500 }
    );
  }
}
