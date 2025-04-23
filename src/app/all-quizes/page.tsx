import { prisma } from "@/lib/prisma";
import { QuizListItem } from "../models/quiz";
import { Card } from "@/components/components";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default async function Page() {
  const quizes = (await prisma.quiz.findMany({
    orderBy: {
      date: "desc",
    },
    take: 30,
  })) as QuizListItem[];

  console.log(quizes);

  return (
    <main className="grid grid-cols-1 gap-4 px-2 py-4 w-full">
      {quizes.map((quiz) => (
        <Card key={quiz.id}>
          <Link href={`/quiz/${quiz.id}`}>
            <div className="flex gap-4 items-center font-medium">
              <h1 className="text-lg">{quiz.title}</h1>
              <SquareArrowOutUpRight className="w-6 h-6" />
            </div>
          </Link>
        </Card>
      ))}
    </main>
  );
}
