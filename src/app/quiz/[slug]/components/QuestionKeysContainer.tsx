"use client";

import { useQuizStore } from "@/app/store/quizStore";
import { QuestionKeyBox } from "./QuestionKeyBox";
/* type QuestionKeyContainerProps = {
  children?: React.ReactNode;
};
 */
export function QuestionKeyContainer() {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestion = useQuizStore((state) => state.currentQuestion);

  const filteredQuestions = questions.filter((question) => {
    if (
      (question?.id >= currentQuestion?.id &&
        question?.id <= currentQuestion?.id + 2) ||
      (question?.id <= currentQuestion?.id &&
        question?.id >= currentQuestion?.id - 2)
    ) {
      return true;
    }
    return false;
  });
  console.log(filteredQuestions.map((item) => item.questionKey));

  return (
    <ul className="flex justify-center gap-4 mx-2">
      {filteredQuestions.map((item) => (
        <QuestionKeyBox key={item.id} question={item} />
      ))}
    </ul>
  );
}
