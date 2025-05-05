import { Quiz } from "@/app/models/quiz";
import { prisma } from "@/lib/prisma";
import { Timer } from "./components/Timer";
import { saveQuizResults } from "./actions";
import { cookies } from "next/headers";
import { QuestionContainer } from "./QuestionContainer";
import { QuestionKeyContainer } from "./QuestionKeysContainer";
import { FinishQuizButton } from "./components";
type QuestionPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page(props: QuestionPageProps) {
  const { slug } = await props.params;
  const userId = (await cookies()).get("userId")?.value;
  const quiz = (await prisma.quiz.findUnique({
    where: {
      id: slug,
    },
    include: {
      questions: true,
    },
  })) as Quiz;

  if (!quiz) {
    throw new Error("Quiz not found");
  }

  return (
    <main className="flex flex-col px-2 py-4 items-center w-full max-w-full md:max-w-5xl mx-auto ">
      <div className="flex w-full px-2 items-center">
        <div className="w-1/3"></div>
        <div className=" flex w-1/3 justify-center mt-2 ">
          <Timer duration={60 * 12} />
        </div>
        <div className="w-1/3 flex justify-end">
          <FinishQuizButton />
        </div>
      </div>
      <div className=" mx-2 my-8">
        <QuestionKeyContainer />
      </div>
      <QuestionContainer
        quizName={quiz.title}
        userId={userId ?? ""}
        saveResults={saveQuizResults}
        questions={quiz?.questions ?? []}
        quizId={slug}
      />
    </main>
  );
}
