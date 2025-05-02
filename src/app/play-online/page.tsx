import { cookies } from "next/headers";
import { CreateRoom } from "./components";
import { QuizListItem } from "../models/quiz";
export const dynamic = "force-dynamic";
export default async function Page() {
  const userId = (await cookies()).get("userId")?.value;
  const quizes = (await prisma.quiz.findMany({
    orderBy: {
      date: "desc",
    },
    take: 30,
  })) as QuizListItem[];
  return (
    <main className="flex flex-col items-center w-full max-w-5xl p-4 mx-auto gap-2">
      <CreateRoom quizes={quizes} userId={userId ?? ""} />
    </main>
  );
}
