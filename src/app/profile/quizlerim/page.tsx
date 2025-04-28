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

  return (
    <main className="flex flex-col w-full max-w-full p-2 items-center">
      <ListContainer
        disablePadding
        data={myQuizes}
        renderItem={(quiz) => {
          const dateOfQuiz = quiz.quizName.split("-")[1];
          console.log(dateOfQuiz);

          return (
            <div className="flex flex-col justify-between items-center gap-2">
              <div className="flex justify-between gap-2 w-full bg-amber-400/80 px-4 py-2">
                <p className="text-xl font-extrabold">{dateOfQuiz}</p>
                <p className="text-xl font-extrabold">{`${quiz.score}/${quiz.total}`}</p>
              </div>
              <div className="flex gap-5 items-center justify-between w-full p-4">
                <Link href={`/profile/quiz-istatistikleri/${quiz.quizId}`}>
                  <div className="bg-amber-400 p-4 rounded-2xl cursor-pointer">
                    <p className="text-sm font-bold text-center">
                      İSTATİSTİKLER
                    </p>
                  </div>
                </Link>
                <Link href={`/quiz/${quiz.quizId}`}>
                  <div className="bg-amber-400 p-4 rounded-2xl cursor-pointer ">
                    <p className="text-sm font-bold  text-center">
                      TEKRAR DENE
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        }}
      ></ListContainer>
    </main>
  );
}
