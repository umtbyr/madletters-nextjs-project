import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const roomCode = searchParams.get("roomCode");

  if (!roomCode) {
    return NextResponse.json(
      { message: "RoomCode not found!" },
      { status: 400 }
    );
  }

  const roomStatus = await prisma.groupChallengeRoom.findUnique({
    where: {
      roomCode: roomCode,
    },
    include: {
      participants: true,
    },
  });

  return NextResponse.json({
    roomStatus: roomStatus?.status,
    participants: roomStatus?.participants,
  });
}
