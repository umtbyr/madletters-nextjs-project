import { Quiz } from "@/app/models/quiz";
import {
  QuestionKeyBox,
  QuestionContainer,
  QuestionKeyContainer,
} from "./components";
import { prisma } from "@/lib/prisma";
type QuestionPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page(props: QuestionPageProps) {
  const { slug } = await props.params;
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
    <main className="flex flex-col px-2 py-4 items-center">
      <section>
        <header>
          <h1 className="text-center mb-6 font-bold text-4xl">Timer</h1>
        </header>
      </section>
      <section>
        <div>
          <QuestionKeyContainer />
        </div>
      </section>
      <section className="m-4 flex flex-col px-4">
        <QuestionContainer questions={quiz?.questions ?? []} />
      </section>
      <section></section>
    </main>
  );
}
