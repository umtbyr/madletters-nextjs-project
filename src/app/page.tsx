import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Quiz } from "./models/quiz";
export const dynamic = "force-dynamic";
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
    <main className="flex flex-col p-4">
      <div className="mt-2 mb-16">
        <h1 className="font-bold text-6xl px-2 py-4 m-4">
          Tıp Tıp{"'"}a Hoşgeldin!
        </h1>
        <h3 className="font-bold text-4xl px-2 py-4 m-4 text-amber-500">
          Her gün yepyeni quizlerle bilgilerini pekiştir.
        </h3>
      </div>
      <div className="flex justify-center">
        <Link
          href={`/quiz/${todaysQuiz?.id}`}
          className="bg-amber-400 rounded-4xl py-8 px-6 text-center animate-bounce "
        >
          <p className="text-3xl font-extrabold">Günün Quizine Başla</p>
        </Link>
      </div>
    </main>
  );
}
