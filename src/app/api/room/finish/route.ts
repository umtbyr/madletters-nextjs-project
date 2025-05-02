import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { participant_id, score } = await request.json();
  console.log(
    "✅ API HIT: /api/room/finish",
    "participant_id :",
    participant_id
  );

  if (!participant_id) {
    return NextResponse.json(
      { message: "Kullanıcı bulunamadı." },
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

    return NextResponse.json({ message: "user is fisihed" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete participant" },
      { status: 500 }
    );
  }
}
