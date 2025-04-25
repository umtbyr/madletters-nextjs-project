"use client";
import { Question, QuizResultPayload } from "@/app/models/quiz";
import { useEffect, useLayoutEffect, useState } from "react";
import { useQuizStore } from "@/app/store/quizStore";
import { useShallow } from "zustand/shallow";
import { QuestionStatus } from "@/app/models/quiz";
import { QuestionCard } from "./QuestionCard";
import { UserInput } from "./UserInput";
import { UserAnswer } from "@/app/models/quiz";
import Link from "next/link";

type QuestionCardProps = {
  questions: Question[];
  quizId: string;
  userId: string;
  saveResults: (data: QuizResultPayload) => Promise<void>;
};

export function QuestionContainer({
  questions: intialQuestions,
  quizId,
  userId,
  saveResults,
}: QuestionCardProps) {
  const {
    isTimerExpired,
    setQuestion,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    questions,
    setQuizId,
    setCurrentQuestion,
    setQuestions,
    setQuestionStatus,
    resetQuiz,
    setIsQuizFinished,
  } = useQuizStore(
    useShallow((state) => ({
      setCurrentQuestionIndex: state.setCurrentQuestionIndex,
      questions: state.questions,
      setUserAnsers: state.setUserAnsers,
      setQuestions: state.setQuestions,
      currentQuestionIndex: state.currentQuestionIndex,
      setCurrentQuestion: state.setCurrentQuestion,
      setQuestionStatus: state.setQuestionStatus,
      resetQuiz: state.resetQuiz,
      setQuizId: state.setQuizId,
      setQuestion: state.setQuestion,
      isTimerExpired: state.isTimerExpired,
      setIsQuizFinished: state.setIsQuizFinished,
    }))
  );

  useLayoutEffect(() => {
    setQuestions(intialQuestions);
    setQuizId(quizId);
  }, []);
  const isQuizFinishedByUser =
    questions.length > 0 &&
    questions?.every(
      (question) =>
        question.questionState !== QuestionStatus.SKIPPED &&
        question.questionState !== null
    );
  const [tempQuestions, setTempQuestions] = useState<Question[]>([]);
  const [isRounding, setIsRounding] = useState(false);
  const currentQuestion =
    tempQuestions.length > 0
      ? tempQuestions[currentQuestionIndex]
      : questions[currentQuestionIndex];

  const handleAnswerQuestion = (answer: string) => {
    currentQuestion.userAnswer = answer;
    setQuestion(currentQuestion);
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
        return item.questionState === QuestionStatus.SKIPPED;
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
    if (!isRounding && currentQuestionIndex === intialQuestions.length) {
      const newFilteredQuestions = questions.filter(
        (item) => item.questionState === QuestionStatus.SKIPPED
      );
      setIsRounding(true);
      setTempQuestions(newFilteredQuestions);
      setCurrentQuestionIndex(0);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (isQuizFinishedByUser || isTimerExpired) {
      setIsQuizFinished(true);
      const userAnswers = questions.map(
        (question) =>
          ({
            answer: question.answer,
            status: question.questionState,
            userAnswer: question.userAnswer,
          } as UserAnswer)
      );
      let score = 0;
      questions.forEach((question) => {
        if (question.questionState === QuestionStatus.CORRECT) {
          score++;
        }
      });

      const total = questions.length;
      saveResults({
        quizStatistics: userAnswers,
        userId,
        quizId,
        score,
        total,
      });
      /*    router.replace(`/profile/quiz-istatistikleri/${quizId}`); */
    }
  }, [isQuizFinishedByUser, isTimerExpired]);

  //runs user leaves page.
  useEffect(() => {
    return () => {
      console.log("Leaving quiz → reset");
      resetQuiz();
    };
  }, []);

  return (
    <div>
      {isQuizFinishedByUser || isTimerExpired ? (
        <div className="flex justify-center">
          <Link
            href={`/profile/quiz-istatistikleri/${quizId}`}
            className="bg-amber-400 rounded-4xl py-6 px-4 text-center animate-bounce "
          >
            <p className="text-2xl font-extrabold">Quiz Sonuçları</p>
          </Link>
        </div>
      ) : (
        <>
          <QuestionCard question={currentQuestion} />
          <div
            className="flex justify-between items-startw-full max-w-full px-4
       h-[40vh] py-8 mx-auto rounded-2xl mt-8"
          >
            <UserInput answerHandler={handleAnswerQuestion} />
          </div>
        </>
      )}
    </div>
  );
}
