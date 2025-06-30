import { prisma } from "@/lib/prisma";
import { ratelimit } from "@/lib/ratelimiter";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "anonymous";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before creating another room." },
      { status: 429 }
    );
  }
  const { userId, roomCode, userName } = await request.json();

  if (!userId || !roomCode) {
    return NextResponse.json({ error: "Oda bulunamadı" }, { status: 400 });
  }

  const roomParticipant = await prisma.groupParticipant.create({
    data: {
      userName,
      finished: false,
      ready: false,
      userId,
      groupChallengeId: roomCode,
    },
  });

  return NextResponse.json({
    userName: roomParticipant.userName,
    participant_id: roomParticipant.id,
    ready: roomParticipant.ready,
    finished: roomParticipant.finished,
  });
}
