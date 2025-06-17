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
    <main className="flex flex-col px-6 py-4 w-full max-w-full items-center  ">
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
            MadLetters
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-3xl px-2 m-2 text-amber-500 text-center">
          Learning medicine can be fun
        </h3>
        <h3 className="font-bold text-lg px-2 m-1 text-slate-800/40 text-center">
          Madletters is a fast-paced medical quiz game where you guess clinical
          answers starting with each letter of the alphabet — play solo or
          challenge your friends!
        </h3>
        <p className="text-sm font-medium text-slate-600 text-center mt-6 max-w-md pb-1">
          This project is built with 💛 by an indie developer in Turkey. If you
          {"'"}re enjoying it, consider{" "}
          <a
            href="https://coff.ee/umutbayar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 underline"
          >
            supporting it here
          </a>{" "}
          ☕
        </p>
        <div className="flex flex-col gap-4 justify-center py-2">
          <Link
            href={`/quiz/${todaysQuiz?.id}`}
            className="bg-amber-400 rounded-4xl py-6 px-4 text-center  text-slate-800"
          >
            <p className="text-xl font-extrabold">Play Solo!</p>
          </Link>
          <Link
            href={`/play-online`}
            className="bg-amber-400 rounded-4xl py-6 px-4 text-center  text-slate-800"
          >
            <p className="text-xl font-extrabold">Play With Friends!</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
