import { ListItem } from "@/components/components/ListItem";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export default async function Page() {
  const userId = (await cookies()).get("userId")?.value;

  if (!userId) {
    throw new Error("userId bulunamadı");
  }
  const myQuizes = await prisma.userQuizStatistics.findMany({
    where: {
      userId: userId,
    },
  });

  console.log(myQuizes);

  return (
    <main className="flex flex-col w-full max-w-full p-2 items-center">
      <h1 className="text-2xl mt-6 font-extrabold ">GEÇMİŞ QUİZLER</h1>
      <ul className=" w-full max-w-full p-4 mt-4 gap-2 ">
        {myQuizes.map((quiz) => (
          <li
            key={quiz.id}
            className="w-full max-w-full px-4 border-b-4 border-amber-500 py-1 mb-8 shadow-2xl"
          >
            <ListItem
              href={`/quiz/${quiz.quizId}`}
              label={`${quiz.score}/${quiz.total}`}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
