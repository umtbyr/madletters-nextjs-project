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
  const { participant_id, score, roomCode } = await request.json();

  console.log(
    "✅ API HIT: /api/room/finish",
    "participant_id :",
    participant_id
  );

  if (!participant_id || !roomCode) {
    return NextResponse.json(
      { message: "Kullanıcı veya Oda bulunamadı." },
      { status: 400 }
    );
  }

  //answers can be addeed will check later

  try {
    await prisma.groupParticipant.update({
      where: {
        id: participant_id,
      },
      data: {
        finished: true,
        score: score,
      },
    });

    const unfinishedCount = await prisma.groupParticipant.count({
      where: {
        groupChallengeId: roomCode,
        finished: false,
      },
    });

    if (unfinishedCount === 0) {
      await prisma.groupChallengeRoom.update({
        where: {
          roomCode: roomCode,
        },
        data: {
          status: "finished",
        },
      });
      console.log("ROOM MARKED AS FINISHED ");
    }

    return NextResponse.json({ message: "user is fisihed" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to finish" }, { status: 500 });
  }
}
