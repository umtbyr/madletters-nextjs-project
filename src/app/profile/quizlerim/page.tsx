import { ListContainer } from "@/components/components/ListContainer";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
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
      <ListContainer
        data={myQuizes}
        renderItem={(quiz) => (
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-extrabold">{`${quiz.score}/${quiz.total}`}</p>
            </div>
            <div className="flex gap-10">
              <Link href={`/profile/quiz-istatistikleri/${quiz.quizId}`}>
                <div className="bg-amber-400 p-4 rounded-2xl cursor-pointer">
                  <p className="text-sm font-bold ">İSTATİSTİKLER</p>
                </div>
              </Link>
              <Link href={`/quiz/${quiz.quizId}`}>
                <div className="bg-amber-400 p-4 rounded-2xl cursor-pointer ">
                  <p className="text-sm font-bold  ">TEKRAR ÇÖZ</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      ></ListContainer>
    </main>
  );
}
{
  /* <ListItem
  href={`/profile/quiz-istatistikleri/${quiz.quizId}`}
  label={`${quiz.score}/${quiz.total}`}
/> */
}
