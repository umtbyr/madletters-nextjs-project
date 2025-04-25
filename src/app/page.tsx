import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Quiz } from "./models/quiz";
import Image from "next/image";
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
      <div className="mt-2 mb-14">
        <div className="flex w-full max-w-full items-center">
          <Image
            className="align-middle"
            src={"/logo3.svg"}
            alt="logo"
            width={96}
            height={56}
          />
          <h1 className="font-bold text-7xl my-4">
            TıpTıp{"'"}
            <p className="font-bold text-6xl inline">a</p>
          </h1>
        </div>
        <h1 className="font-bold text-6xl pl-14 break-words">Hoşgeldin!</h1>
        <div className="flex flex-col items-center gap-10">
          <h3 className="font-bold text-4xl px-2 py-4 m-2 text-amber-500 text-center">
            Her gün yepyeni quizlerle bilgilerini pekiştir.
          </h3>
          <div className="flex justify-center">
            <Link
              href={`/quiz/${todaysQuiz?.id}`}
              className="bg-amber-400 rounded-4xl py-6 px-4 text-center animate-bounce "
            >
              <p className="text-2xl font-extrabold">Günün Quizine Başla</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
