import { prisma } from "@/lib/prisma";
import { QuizListItem } from "../models/quiz";
import { ListItem } from "@/components/components/ListItem";
export const dynamic = "force-dynamic";
export default async function Page() {
  const quizes = (await prisma.quiz.findMany({
    orderBy: {
      date: "desc",
    },
    take: 30,
  })) as QuizListItem[];

  console.log(quizes);

  return (
    <main className="flex flex-col w-full max-w-full p-2 items-center">
      <h1 className="text-2xl mt-6 font-extrabold ">GEÇMİŞ QUİZLER</h1>
      <ul className=" w-full max-w-full p-4 mt-4 gap-2 ">
        {quizes.map((quiz) => (
          <li
            key={quiz.id}
            className="w-full max-w-full px-4 border-b-4 border-amber-500 py-1 mb-8 shadow-2xl"
          >
            <ListItem href={`/quiz/${quiz.id}`} label={quiz.title} />
          </li>
        ))}
      </ul>
    </main>
  );
}
