import { prisma } from "@/lib/prisma";
import { ratelimit } from "@/lib/ratelimiter";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { participant_id, isHost, roomCode } = await request.json();

    const ip = request.headers.get("x-forwarded-for") || "anonymous";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          error: "Too many requests. Please wait before creating another room.",
        },
        { status: 429 }
      );
    }

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
      console.log("Room and participants deleted.");

      return NextResponse.json({ message: "Room and participants deleted." });
    }

    const participant = await prisma.groupParticipant.delete({
      where: {
        id: participant_id,
      },
    });

    return NextResponse.json({ participant });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to delete participant" },
      { status: 500 }
    );
  }
}
