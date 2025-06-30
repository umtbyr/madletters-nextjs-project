import { prisma } from "@/lib/prisma";
import { ratelimit } from "@/lib/ratelimiter";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "anonymous";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before creating another room." },
      { status: 429 }
    );
  }
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
