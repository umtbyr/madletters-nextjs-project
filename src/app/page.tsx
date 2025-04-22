import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Quiz } from "./models/quiz";
export default async function Page() {
  const todaysQuiz = (await prisma.quiz.findFirst({
    orderBy: {
      date: "desc",
    },
  })) as Quiz;

  if (!todaysQuiz) {
    throw new Error("Quiz not found");
  }

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
