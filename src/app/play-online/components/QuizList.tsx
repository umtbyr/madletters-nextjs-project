"use client";

import { QuizListItem } from "@/app/models/quiz";
import { ListContainer } from "@/components/components/ListContainer";

type QuizListProps = {
  quizes: QuizListItem[];
  handleSetQuiz: (quizId: string) => void;
  selectedQuiz: string | null;
};

export function QuizList({
  quizes,
  handleSetQuiz,
  selectedQuiz,
}: QuizListProps) {
  return (
    <ListContainer
      data={quizes}
      renderItem={(quiz) => {
        const isSelected = selectedQuiz === quiz.id;
        const className = isSelected ? "bg-amber-400" : "";
        return (
          <div
            className={`${className} cursor-pointer p-2 rounded-2xl text-center`}
            onClick={() => handleSetQuiz(quiz.id)}
          >
            <p className="text-md font-bold">{quiz.title}</p>
          </div>
        );
      }}
    />
  );
}
