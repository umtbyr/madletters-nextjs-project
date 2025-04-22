import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Quiz } from "./models/quiz";
export default async function Page() {
  const dbTodaysQuiz = await prisma.quiz.findFirst({
    orderBy: {
      date: "desc",
    },
  });

  if (!dbTodaysQuiz) {
    throw new Error("Quiz not found");
  }

  const todaysQuiz: Quiz = {
    id: dbTodaysQuiz.id,
    title: dbTodaysQuiz.title,
    questions: [],
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1>Welcome to Quiz App</h1>
      <Link
        href={`/quiz/${todaysQuiz?.id}`}
        className="bg-amber-400 rounded-4xl p-4 text-2xl"
      >
        <p>Start today{"'"}s quiz!</p>
      </Link>
    </main>
  );
}
