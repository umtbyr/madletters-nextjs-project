"use client";

import { Question } from "@/app/models/quiz";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { useQuizStore } from "@/app/store/quizStore";
import { useShallow } from "zustand/shallow"; // ✅ this is Zustand's selector comparator
import { QuestionStatus } from "@/app/models/quiz";
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

  const [userAnswer, setUserAnswer] = useState("");
  const [tempQuestions, setTempQuestions] = useState<Question[]>([]);
  const [isRounding, setIsRounding] = useState(false);
  const currentQuestion =
    tempQuestions.length > 0
      ? tempQuestions[currentQuestionIndex]
      : questions[currentQuestionIndex];

  const handleAnswerQuestion = (answer: string) => {
    setUserAnswer("");
    if (answer === "" || answer === null) {
      setQuestionStatus(currentQuestion.id, QuestionStatus.SKIPPED);
    } else if (
      currentQuestion?.answer.toLocaleLowerCase().trim() ===
      userAnswer.toLocaleLowerCase().trim()
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

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

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
      <div className="w-full max-w-5xl min-w-[320px] h-[40vh] p-8 bg-amber-400 mx-auto rounded-2xl">
        <p className="text-3xl mb-4 font-medium break-words">
          {currentQuestion?.question}
        </p>
      </div>
      <div className="flex justify-between items-start w-full max-w-5xl min-w-[320px] h-[40vh] py-8 mx-auto rounded-2xl mt-8">
        <div>
          <input
            value={userAnswer}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAnswerQuestion(userAnswer);
              }
            }}
            onChange={(event) => handleUserInput(event)}
            className="text-2xl border-4 rounded-2xl p-4 bg-white border-amber-400 font-bold"
            type="text"
            id="user-input"
          />
        </div>
        <button
          className="min-w-[156px] text-2xl border-2 rounded-2xl p-4 bg-amber-400 font-bold "
          onClick={() => handleAnswerQuestion(userAnswer)}
        >
          {userAnswer !== "" ? "Anser it!" : "Skip!"}
        </button>
      </div>
      <div></div>
    </>
  );
}
