import { Quiz } from "@/app/models/quiz";
import { QuestionContainer, QuestionKeyContainer } from "./components";
import { prisma } from "@/lib/prisma";
import { Timer } from "./components/Timer";
import { saveQuizResults } from "./actions";
import { cookies } from "next/headers";
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
    <main className="flex flex-col px-2 py-4 items-center w-full">
      <section>
        <header>
          <div className="flex items-center px-4 py-2 mb-4 ">
            <h2 className="font-semibold text-lg"></h2>
            <Timer duration={60} />
          </div>
        </header>
      </section>
      <section>
        <div>
          <QuestionKeyContainer />
        </div>
      </section>
      <section className="w-full max-w-full px-4">
        <QuestionContainer
          userId={userId ?? ""}
          saveResults={saveQuizResults}
          questions={quiz?.questions ?? []}
          quizId={slug}
        />
      </section>
      <section></section>
    </main>
  );
}
