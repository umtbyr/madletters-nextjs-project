import { NextRequest, NextResponse } from "next/server";
import { generateRoomCode } from "./utils";
import { prisma } from "@/lib/prisma";
import { ratelimit } from "@/lib/ratelimiter";
export async function POST(request: NextRequest) {
  const {
    hostUserId,
    quizId,
    userName,
  }: { hostUserId: string; quizId: string; userName: string } =
    await request.json();

  const ip = request.headers.get("x-forwarded-for") || "anonymous";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before creating another room." },
      { status: 429 }
    );
  }
  if (!hostUserId || !quizId) {
    return NextResponse.json({
      status: 400,
      error: "Kullanıcı veya quiz bulunamadı.",
    });
  }
  const roomCode = generateRoomCode();

  const newRroom = await prisma.groupChallengeRoom.create({
    data: {
      hostUserId,
      quizId,
      roomCode: roomCode,
      participants: {
        create: {
          userName,
          finished: false,
          ready: false,
          userId: hostUserId,
        },
      },
    },
    include: {
      participants: true,
    },
  });
  console.log("newRroom", newRroom);

  return NextResponse.json({
    roomCode,
    quizId,
    roomId: newRroom.id,
    participants: newRroom.participants.map((participant) => ({
      participantId: participant.id,
      userName: participant.userName,
      ready: participant.ready,
      finished: participant.finished,
    })),
  });
}
