import { checkGeneratedQuizAndSave } from "@/app/services/generate-quiz";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const result = await checkGeneratedQuizAndSave();
    return NextResponse.json({
      status: "Quiz generated and saved",
      ...result,
    });
  } catch (error) {
    console.error("Error during quiz generation", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
