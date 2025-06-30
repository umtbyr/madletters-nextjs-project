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
