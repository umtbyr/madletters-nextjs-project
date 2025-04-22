import { Quiz } from "@/app/models/quiz";
import { QuestionKeyBox, QuestionContainer } from "./components";
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
    <main className="flex flex-col items-center h-screen gap-4 my-12">
      <section>
        <header>
          <h1 className="text-center mb-6 font-bold text-4xl">Quesitons</h1>
        </header>
      </section>
      <section>
        <div>
          <ul className="grid grid-cols-6 gap-8 mx-4">
            {quiz?.questions.map((item) => (
              <QuestionKeyBox key={item.id} question={item} />
            ))}
          </ul>
        </div>
      </section>
      <section className="m-8 px-4 sm:px-6 md:px-8 w-full ">
        <QuestionContainer questions={quiz?.questions ?? []} />
      </section>
      <section></section>
    </main>
  );
}
