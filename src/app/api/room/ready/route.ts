import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { isReady, participant_id, roomId } = await request.json();

  if (!participant_id || !roomId) {
    return NextResponse.json({ message: "Oda bulunamadı." }, { status: 400 });
  }

  await prisma.groupParticipant.update({
    where: {
      id: participant_id,
    },
    data: {
      ready: isReady,
    },
  });

  return NextResponse.json({ message: "user is ready" });
}
