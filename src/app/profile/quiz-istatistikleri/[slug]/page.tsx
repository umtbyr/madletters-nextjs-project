import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { CircleCheckIcon, CircleXIcon } from "lucide-react";
import { QuestionStatus, UserAnswer } from "@/app/models/quiz";
type StatisticsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page(props: StatisticsPageProps) {
  const quizId = (await props.params).slug;

  const userId = (await cookies()).get("userId")?.value;

  if (!userId) {
    throw Error("userId Bulunamadı.");
  }
  //db call with both get user's quiz statistics

  const quizStatistics = await prisma.userQuizStatistics.findUnique({
    where: {
      userId_quizId: {
        userId: userId,
        quizId: quizId,
      },
    },
  });
  const typedAnswers = quizStatistics?.answers as UserAnswer[] | undefined;

  return (
    <main className="flex flex-col w-full max-w-full p-2 items-center">
      <h1 className="text-2xl mt-6 font-extrabold ">QUiZ SONUÇLARI</h1>
      <h2 className="text-xl font-black">
        {quizStatistics?.score}/{quizStatistics?.total}
      </h2>
      <ul className=" w-full max-w-full p-4 mt-4 gap-2 ">
        <div className="flex justify-between font-extrabold">
          <li className="w-full max-w-full px-2 border-b-4 py-1 shadow-2xl">
            <h1>DOĞRU CEVAPLAR</h1>
          </li>
          <li className="w-full max-w-full px-2 border-b-4 py-1 shadow-2xl text-end">
            <h1>SENİN CEVAPLARIN</h1>
          </li>
        </div>
        {typedAnswers?.map((answer) => (
          <li
            key={answer.answer}
            className="w-full max-w-full px-4 border-b-4 border-amber-500 py-1 mb-8 shadow-2xl"
          >
            <div className="flex justify-between w-full max-w-full">
              <div className="flex gap-2 items-center">
                {answer.status === QuestionStatus.CORRECT ? (
                  <CircleCheckIcon className="w-6 h-6 text-green-500" />
                ) : (
                  <CircleXIcon className="w-6 h-6 text-red-600" />
                )}

                <p className="font-medium text-lg">{answer.answer}</p>
              </div>
              {answer.status === QuestionStatus.CORRECT ? (
                <CircleCheckIcon className="w-6 h-6 text-green-500" />
              ) : (
                <div className="flex gap-2 items-center">
                  <p className="font-medium text-lg">{answer.userAnswer}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
