import Link from "next/link";
import { prisma } from "@/lib/prisma";
export default async function Page() {
  //database call to get the latest quiz-id...

  const todaysQuiz = await prisma.quiz.findFirst({
    orderBy: {
      date: "desc",
    },
  });

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
