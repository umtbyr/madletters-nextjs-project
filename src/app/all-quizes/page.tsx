import { prisma } from "@/lib/prisma";
import { QuizListItem } from "../models/quiz";
import { ListItem } from "@/components/components/ListItem";
import { ListContainer } from "@/components/components/ListContainer";
export const dynamic = "force-dynamic";
export default async function Page() {
  const quizes = (await prisma.quiz.findMany({
    orderBy: {
      date: "desc",
    },
    take: 30,
  })) as QuizListItem[];

  return (
    <main className="flex flex-col w-full max-w-full p-2 items-center ">
      <ListContainer
        data={quizes}
        renderItem={(quiz) => (
          <ListItem href={`/quiz/${quiz.id}`} label={quiz.title} />
        )}
      />
    </main>
  );
}
