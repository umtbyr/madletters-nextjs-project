"use client";
import { Question, QuestionStatus } from "@/app/models/quiz";
import { useQuizStore } from "@/app/store/quizStore";
import { useMemo, useRef } from "react";
export function QuestionKeyBox(props: { question: Question }) {
  const { quesiton_key, question_index, question_id } = props.question;

  const questions = useQuizStore((state) => state.questions);

  const currentQuestion = useQuizStore((state) => state.currentQuestion);

  const isCurrent = currentQuestion?.question_id === question_id;

  const keyBoxStatus = useMemo(() => {
    return questions.find((item) => item.question_id === question_id)?.status;
  }, [question_id, questions]);

  const keyBoxClass = useRef("white");

  switch (keyBoxStatus) {
    case QuestionStatus.CORRECT:
      keyBoxClass.current = "bg-green-500";
      break;
    case QuestionStatus.INCORRECT:
      keyBoxClass.current = "bg-red-500";
      break;
    case QuestionStatus.SKIPPED:
      keyBoxClass.current = "bg-blue-500";
      break;
    case QuestionStatus.UNANSWERED:
    default:
      keyBoxClass.current = "bg-white";
      break;
  }

  return (
    <li
      className={`border-2 p-3 text-2xl rounded-2xl text-center font-bold ${
        isCurrent
          ? "border-black text-white bg-amber-500"
          : `border-amber-400 text-amber-400 ${keyBoxClass.current}`
      }`}
    >
      {quesiton_key}
    </li>
  );
}
