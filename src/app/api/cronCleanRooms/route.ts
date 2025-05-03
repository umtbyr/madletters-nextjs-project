import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    await prisma.groupChallengeRoom.deleteMany({
      where: {
        OR: [
          {
            status: "waiting",
            updatedAt: {
              lt: new Date(Date.now() - 1000 * 60 * 60),
            },
          },
          {
            status: "finished",
            updatedAt: {
              lt: new Date(Date.now() - 1000 * 60 * 60 * 2),
            },
          },
        ],
      },
    });
    return NextResponse.json({
      message: "Cleanup successful",
    });
  } catch (error) {
    console.error("Cleanup failed:", error);
    return NextResponse.json({ error: "Cleanup failed" }, { status: 500 });
  }
}
