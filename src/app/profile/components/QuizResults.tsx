import { QuestionStatus, UserAnswer } from "@/app/models/quiz";
import { CircleCheckIcon, CircleXIcon, CircleMinusIcon } from "lucide-react";

type QuizResultsProps = {
  answers: UserAnswer[];
};

export function QuizResults({ answers }: QuizResultsProps) {
  const correctAnswers = answers.filter(
    (answer) => answer.status === QuestionStatus.CORRECT
  ).length;

  const skippedAnswers = answers.filter(
    (answer) => answer.status === QuestionStatus.SKIPPED
  ).length;
  const wrongAnswers = answers.filter(
    (answer) => answer.status === QuestionStatus.INCORRECT
  ).length;
  return (
    <div className="flex flex-col gap-4 text-xl font-bold">
      <div className="flex gap-2 justify-between items-center">
        <p>{correctAnswers}</p>
        <CircleCheckIcon className="w-6 h-6 text-green-500" />
      </div>
      <div className="flex gap-2 justify-between items-center">
        <p>{wrongAnswers}</p>
        <CircleXIcon className="w-6 h-6 text-red-600" />
      </div>
      <div className="flex gap-2 justify-between items-center">
        <p>{skippedAnswers}</p>
        <CircleMinusIcon className="w-6 h-6 text-blue-500" />
      </div>
    </div>
  );
}
