"use client";
import { Question, QuizResultPayload } from "@/app/models/quiz";
import { useEffect, useLayoutEffect, useState } from "react";
import { useQuizStore } from "@/app/store/quizStore";
import { useShallow } from "zustand/shallow";
import { QuestionStatus } from "@/app/models/quiz";
import { QuestionCard } from "./components/QuestionCard";
import { UserInput } from "./components/UserInput";
import { UserAnswer } from "@/app/models/quiz";
import Link from "next/link";
import { finishQuiz } from "@/app/room/[roomCode]/services";

type QuestionCardProps = {
  participant_id?: string;
  isOnline?: boolean;
  questions: Question[];
  quizId: string;
  quizName: string;
  userId: string;
  saveResults: (data: QuizResultPayload) => Promise<void>;
};

export function QuestionContainer({
  questions: intialQuestions,
  quizId,
  quizName,
  participant_id,
  isOnline,
  userId,
  saveResults,
}: QuestionCardProps) {
  const {
    isTimerExpired,
    setIsRounding: setIsRoundingStore,
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
      setIsRounding: state.setIsRounding,
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

  //sonra tekrar bakılabilir
  const handleAnswerQuestion = (answer: string) => {
    currentQuestion.userAnswer = answer;
    setQuestion(currentQuestion);
    const userAnswer = answer.toLocaleLowerCase().trim();
    const systemAnswer = currentQuestion?.answer.toLocaleLowerCase().trim();
    if (answer === "" || answer === null) {
      setQuestionStatus(currentQuestion.id, QuestionStatus.SKIPPED);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      return;
    } else {
      const userSubAnswers = userAnswer.split(" ");
      const systemSubAnswers = systemAnswer.split(" ");

      const lastSubAnswer = systemSubAnswers[systemSubAnswers.length - 1];

      if (
        (systemSubAnswers.length > 1 && lastSubAnswer.includes("(")) ||
        lastSubAnswer.includes(")")
      ) {
        const indexOfDeleteRemain = systemSubAnswers.findIndex((item) =>
          item.includes("(")
        );
        const popTimes = systemSubAnswers.length - indexOfDeleteRemain + 1;

        for (let index = 0; index < popTimes; index++) {
          systemSubAnswers.pop();
        }
      }
      if (systemSubAnswers.length === 1) {
        if (userSubAnswers[0] === systemSubAnswers[0]) {
          setQuestionStatus(currentQuestion.id, QuestionStatus.CORRECT);
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          return;
        }
      } else if (systemSubAnswers.length === 2) {
        if (userSubAnswers[0] === systemSubAnswers[0]) {
          if (userSubAnswers[1]) {
            const isFirstTreeMatched =
              userSubAnswers[1].slice(0, 3) === systemSubAnswers[1].slice(0, 3);
            if (isFirstTreeMatched) {
              setQuestionStatus(currentQuestion.id, QuestionStatus.CORRECT);
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              return;
            }
          } else {
            setQuestionStatus(currentQuestion.id, QuestionStatus.CORRECT);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            return;
          }
        }
      } else if (systemSubAnswers.length === 3) {
        if (
          userSubAnswers[0] === systemSubAnswers[0] &&
          userSubAnswers[1] === systemSubAnswers[1]
        ) {
          //karar veremedim
          const isFirstTreeMatched = true;
          //userSubanswer[userSubanswer.length - 1].slice(0, 3) ===
          //systemSubAnswers[systemSubAnswers.length - 1].slice(0, 3);
          if (isFirstTreeMatched) {
            setQuestionStatus(currentQuestion.id, QuestionStatus.CORRECT);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            return;
          }
        }
      }
      setQuestionStatus(currentQuestion.id, QuestionStatus.INCORRECT);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
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
      setIsRoundingStore(true);
      setTempQuestions(newFilteredQuestions);
      setCurrentQuestionIndex(0);
    }
  }, [currentQuestionIndex]);

  const onLineFinishQuizHandler = async ({
    score,
    participant_id,
  }: {
    score: number;
    participant_id: string;
  }) => {
    console.log(participant_id, "worked");

    try {
      await finishQuiz({ score, participant_id });
    } catch (error) {
      console.log(error);
    }
  };

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
        quizName,
        quizStatistics: userAnswers,
        userId,
        quizId,
        score,
        total,
      });
      if (isOnline)
        onLineFinishQuizHandler({
          score,
          participant_id: participant_id ?? "",
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
        <div className="flex justify-center items-center">
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
            className="flex justify-between items-start w-full max-w-full px-4
       h-[40vh] py-8 mx-auto rounded-2xl mt-8"
          >
            <UserInput answerHandler={handleAnswerQuestion} />
          </div>
        </>
      )}
    </div>
  );
}
