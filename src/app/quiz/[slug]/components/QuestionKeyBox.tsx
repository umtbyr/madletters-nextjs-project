"use client";
import { Question, QuestionStatus } from "@/app/models/quiz";
import { useQuizStore } from "@/app/store/quizStore";
import { useMemo, useRef } from "react";
export function QuestionKeyBox(props: { question: Question }) {
  const { questionKey, id } = props.question;

  const questions = useQuizStore((state) => state.questions);

  const currentQuestion = useQuizStore((state) => state.currentQuestion);

  const isCurrent = currentQuestion?.id === id;

  const keyBoxStatus = useMemo(() => {
    return questions.find((item) => item.id === id)?.questionState;
  }, [id, questions]);

  const keyBoxClass = useRef("white");

  switch (keyBoxStatus) {
    case QuestionStatus.CORRECT:
      keyBoxClass.current = "bg-green-500";
      break;
    case QuestionStatus.INCORRECT:
      keyBoxClass.current = "bg-red-600";
      break;
    case QuestionStatus.SKIPPED:
      keyBoxClass.current = "bg-blue-500";
      break;
    case QuestionStatus.UNANSWERED:
    default:
      keyBoxClass.current = "bg-gray-600";
      break;
  }

  return (
    <li
      className={`border-3 border-black text-white text-2xl shadow-2xl rounded-2xl flex justify-center items-center font-extrabold w-[3rem] h-[3rem]  ${
        isCurrent
          ? "border-amber-white bg-amber-400 animate-bounce "
          : `custom-animate ${keyBoxClass.current}`
      }`}
    >
      <p>{questionKey}</p>
    </li>
  );
}
