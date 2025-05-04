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
    <main className="flex flex-col p-6 w-full max-w-full items-center md:justify-center md:h-screen  ">
      <div className=" flex flex-col items-center justify-center text-center ">
        <h1 className="font-bold text-5xl break-words">Welcome to</h1>
        <div className="flex">
          <Image
            className="align-middle"
            src={"/logo.svg"}
            alt="logo"
            width={72}
            height={72}
          />
          <h1 className="w-full font-bold text-5xl my-4 mx-2 break-words">
            MedLetter
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-3xl px-2 pt-4 m-2 text-amber-500 text-center">
          Master medicine, one letter at a time
        </h3>
        <h3 className="font-bold text-lg px-2 py-4 m-2 text-slate-600/40 text-center">
          MedLetter is a fast-paced medical quiz game where you guess clinical
          answers starting with each letter of the alphabet — play solo or
          challenge your friends!
        </h3>
        <div className="flex flex-col gap-4 justify-center py-2">
          <Link
            href={`/quiz/${todaysQuiz?.id}`}
            className="bg-amber-400 rounded-4xl py-6 px-4 text-center md:mb-72 text-slate-800"
          >
            <p className="text-xl font-extrabold">Start Today's quiz!</p>
          </Link>
          <Link
            href={`/play-online`}
            className="bg-amber-400 rounded-4xl py-6 px-4 text-center md:mb-72 text-slate-800"
          >
            <p className="text-xl font-extrabold">Play With Friends!</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
