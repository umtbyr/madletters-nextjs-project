import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import {
  QuestionStatus,
  QuizStatisticsRespone,
  UserAnswer,
} from "@/app/models/quiz";
import {
  QuizStatisticsProgressCirlce,
  QuizResults,
  QuestionCard,
} from "../../components";
import Link from "next/link";
type StatisticsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page(props: StatisticsPageProps) {
  const quizId = (await props.params).slug;

  const userId = (await cookies()).get("userId")?.value;

  if (!userId) {
    throw Error("userId Bulunamadı.");
  }

  const [quizStatistics, quiz] = await Promise.all([
    prisma.userQuizStatistics.findUnique({
      where: {
        userId_quizId: {
          userId: userId,
          quizId: quizId,
        },
      },
    }),
    prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        questions: true,
      },
    }),
  ]);

  const questions = quiz?.questions ?? [];

  const quizData: QuizStatisticsRespone = quizStatistics
    ? {
        ...quizStatistics,
        answers: (quizStatistics.answers ?? []) as UserAnswer[],
      }
    : null;

  const typedAnswers = quizStatistics?.answers as UserAnswer[] | undefined;

  const answersWithQuestions = typedAnswers?.map((answer, index) => ({
    ...answer,
    question: questions[index].question,
  }));

  console.log(answersWithQuestions?.map((item) => item.status));
  return (
    <main className="flex flex-col  w-full max-w-full p-4 items-center  md:max-w-5xl mx-auto">
      <Link
        className="bg-amber-400 p-4 rounded-2xl cursor-pointer flex my-2 shadow-xl "
        href={`/quiz/${quizStatistics?.quizId}`}
      >
        <p className="text-xl font-extrabold  ">TEKRAR DENE!</p>
      </Link>

      <div className="bg-white w-full max-w-full shadow-xl p-2 rounded-2xl mt-4 mb-2 flex items-center justify-center md:max-w-5xl">
        <div className="flex p-8 w-full max-w-4xl gap-8 items-center justify-between ">
          <div className="w-3/4 justify-center flex">
            <QuizStatisticsProgressCirlce quizData={quizData} />
          </div>
          <QuizResults answers={quizData?.answers ?? []} />
        </div>
      </div>
      <ul className=" w-full max-w-full py-4 mt-4 gap-2 md:max-w-5xl">
        {answersWithQuestions?.map((answer) => {
          let bgColor = "";
          switch (answer.status) {
            case QuestionStatus.CORRECT:
              bgColor = "bg-green-500/20";
              break;
            case QuestionStatus.INCORRECT:
              bgColor = "bg-red-600/20";
              break;
            default:
              bgColor = "bg-blue-500/20";
              break;
          }

          return (
            <li
              key={answer.answer}
              className={` mb-8 shadow-xl rounded-2xl ${bgColor}`}
            >
              <QuestionCard answer={answer} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
