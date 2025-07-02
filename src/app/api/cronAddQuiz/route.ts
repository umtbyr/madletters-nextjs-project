import { QuizQuestionsPayload } from "@/app/models/quiz";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { data } from "../../../../data/questions";
import { ratelimit } from "@/lib/ratelimiter";
export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "anonymous";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before creating another room." },
      { status: 429 }
    );
  }
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const quizQuestions = [] as QuizQuestionsPayload[];

    Object.entries(data).forEach(([key, value]) => {
      const randomIndex = Math.floor(Math.random() * value.length);
      const selectedQuestion = value[randomIndex];
      const quizQuestionItem: QuizQuestionsPayload = {
        question: selectedQuestion.question,
        answer: selectedQuestion.answer,
        questionKey: key,
      };
      quizQuestions.push(quizQuestionItem);
    });

    await prisma.quiz.create({
      data: {
        title: "Quiz of the Day - " + new Date().toLocaleDateString("en-US"),
        date: new Date(),
        questions: {
          create: quizQuestions,
        },
      },
    });
    return new NextResponse("Internal Server Error", { status: 200 });
  } catch (error) {
    console.error("Error during quiz generation", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
