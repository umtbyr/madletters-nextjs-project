import { NextRequest, NextResponse } from "next/server";
import { generateRoomCode } from "./utils";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const {
    hostUserId,
    quizId,
    userName,
  }: { hostUserId: string; quizId: string; userName: string } =
    await request.json();
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
