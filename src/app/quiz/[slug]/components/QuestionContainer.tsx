"use client";

import { Question } from "@/app/models/quiz";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { useQuizStore } from "@/app/store/quizStore";
import { useShallow } from "zustand/shallow"; // ✅ this is Zustand's selector comparator
import { QuestionStatus } from "@/app/models/quiz";
import { QuestionCard } from "./QuestionCard";
import { UserInput } from "./UserInput";
type QuestionCardProps = {
  questions: Question[];
};

export function QuestionContainer(props: QuestionCardProps) {
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    questions,
    setCurrentQuestion,
    setQuestions,
    setQuestionStatus,
  } = useQuizStore(
    useShallow((state) => ({
      setCurrentQuestionIndex: state.setCurrentQuestionIndex,
      questions: state.questions,
      setQuestions: state.setQuestions,
      currentQuestionIndex: state.currentQuestionIndex,
      setCurrentQuestion: state.setCurrentQuestion,
      setQuestionStatus: state.setQuestionStatus,
    }))
  );

  const router = useRouter();
  const pathname = usePathname();

  useLayoutEffect(() => {
    setQuestions(props.questions);
  }, []);

  const [tempQuestions, setTempQuestions] = useState<Question[]>([]);
  const [isRounding, setIsRounding] = useState(false);
  const currentQuestion =
    tempQuestions.length > 0
      ? tempQuestions[currentQuestionIndex]
      : questions[currentQuestionIndex];

  const handleAnswerQuestion = (answer: string) => {
    if (answer === "" || answer === null) {
      setQuestionStatus(currentQuestion.id, QuestionStatus.SKIPPED);
    } else if (
      currentQuestion?.answer.toLocaleLowerCase().trim() ===
      answer.toLocaleLowerCase().trim()
    ) {
      setQuestionStatus(currentQuestion.id, QuestionStatus.CORRECT);
    } else {
      setQuestionStatus(currentQuestion.id, QuestionStatus.INCORRECT);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    if (isRounding && currentQuestionIndex === tempQuestions.length) {
      const newFilteredQuestions = questions.filter((item) => {
        return item.status === QuestionStatus.SKIPPED;
      });

      setCurrentQuestionIndex(0);
      setTempQuestions(newFilteredQuestions);
      return;
    }
  }, [questions]);

  useEffect(() => {
    setCurrentQuestion(currentQuestion);
  }, [currentQuestion]);

  useEffect(() => {
    if (!isRounding && currentQuestionIndex === props.questions.length) {
      const newFilteredQuestions = questions.filter(
        (item) => item.status === QuestionStatus.SKIPPED
      );

      setIsRounding(true);
      setTempQuestions(newFilteredQuestions);
      setCurrentQuestionIndex(0);
    }

    const newParams = new URLSearchParams(window.location.search);
    newParams.set("currentQuestion", String(currentQuestionIndex));
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  }, [currentQuestionIndex]);

  return (
    <>
      <QuestionCard question={currentQuestion} />
      <div
        className="flex justify-between items-startw-full max-w-full px-4
       h-[40vh] py-8 mx-auto rounded-2xl mt-8"
      >
        <UserInput answerHandler={handleAnswerQuestion} />
      </div>
      <div></div>
    </>
  );
}
