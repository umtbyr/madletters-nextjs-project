"use client";

import { useQuizStore } from "@/app/store/quizStore";
import { QuestionKeyBox } from "./QuestionKeyBox";

export function QuestionKeyContainer() {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const isQuizFinished = useQuizStore((state) => state.isQuizFinished);
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

  return (
    <ul className="flex justify-center gap-4 mx-2 mb-6">
      {!isQuizFinished &&
        filteredQuestions.map((item) => (
          <QuestionKeyBox key={item.id} question={item} />
        ))}
    </ul>
  );
}
