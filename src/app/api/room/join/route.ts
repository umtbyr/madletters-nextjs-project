import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { userId, roomId, userName } = await request.json();

  if (!userId || !roomId) {
    return NextResponse.json({ error: "Oda bulunamadı" }, { status: 400 });
  }

  const roomParticipant = await prisma.groupParticipant.create({
    data: {
      userName,
      finished: false,
      ready: false,
      userId,
      groupChallengeId: roomId,
    },
  });

  return NextResponse.json({
    userName: roomParticipant.userName,
    participant_id: roomParticipant.id,
    ready: roomParticipant.ready,
    finished: roomParticipant.finished,
  });
}
