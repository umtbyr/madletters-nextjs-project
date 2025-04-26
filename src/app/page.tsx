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
    <main className="flex flex-col p-6 w-full max-w-full items-center">
      <div className=" flex items-center justify-center text-center">
        <Image
          className="align-middle"
          src={"/logo3.svg"}
          alt="logo"
          width={96}
          height={56}
        />
        <h1 className="w-full font-bold text-7xl my-4 mx-2 break-words">
          TıpTıp{"'"}
          <span className="font-bold text-6xl">a</span>
        </h1>
      </div>
      <h1 className="font-bold text-6xl break-words">Hoşgeldin!</h1>
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
    </main>
  );
}
