import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { isFinished, participant_id, roomId, score } = await request.json();

  if (!participant_id || !roomId) {
    return NextResponse.json({ message: "Oda bulunamadı." }, { status: 400 });
  }

  //answers can be addeed will check later
  await prisma.groupParticipant.update({
    where: {
      id: participant_id,
    },
    data: {
      finished: isFinished,
      score: score,
    },
  });

  return NextResponse.json({ message: "user is fisihed" });
}
