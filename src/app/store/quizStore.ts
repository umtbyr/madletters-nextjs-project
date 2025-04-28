import { create } from "zustand";
import { Question, UserAnswer } from "../models/quiz";
import { QuestionStatus } from "../models/quiz";
export type QuizStore = {
  isRounding: boolean;
  isQuizFinished: boolean;
  isTimerExpired: boolean;
  userAnswers: UserAnswer[];
  setUserAnsers: (userAnswers: UserAnswer[]) => void;
  currentQuestionIndex: number;
  quizId: string | null;
  currentQuestion: Question;
  setCurrentQuestion: (question: Question) => void;
  questions: Question[];
  setCurrentQuestionIndex: (index: number) => void;
  setIsRounding: (isRounding: boolean) => void;
  setQuestions: (questions: Question[]) => void;
  setQuestionStatus: (questionId: number, status: QuestionStatus) => void;
  resetQuiz: () => void;
  setQuizId: (id: string) => void;
  setQuestion: (question: Question) => void;
  setIsTimerExpired: (isExpired: boolean) => void;
  setIsQuizFinished: (isQuizFinished: boolean) => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  isRounding: false,
  isQuizFinished: false,
  isTimerExpired: false,
  userAnswers: [],
  quizId: null,
  currentQuestionIndex: 0,
  currentQuestion: {} as Question,
  setUserAnsers: (userAnswers) =>
    set(() => ({
      userAnswers: userAnswers,
    })),
  setQuestion: (question) =>
    set((state) => {
      const questionIndex = state.questions.findIndex(
        (questionItem) => questionItem.id === question.id
      );
      const newQuestions = [...state.questions];
      newQuestions[questionIndex] = question;

      return {
        questions: newQuestions,
        currentQuestion: question,
      };
    }),
  setIsRounding: (isRounding) =>
    set(() => ({
      isRounding: isRounding,
    })),
  setIsTimerExpired: (isExpired) =>
    set(() => ({
      isTimerExpired: isExpired,
    })),
  setIsQuizFinished: (isQuizFinished) =>
    set(() => ({ isQuizFinished: isQuizFinished })),
  setQuizId: (id) =>
    set(() => ({
      quizId: id,
    })),
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
  questions: [],
  tempQuestions: [],
  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
  setQuestions: (questions) =>
    set((state) => ({
      ...state,
      questions,
      currentQuestion: questions[state.currentQuestionIndex],
    })),
  setQuestionStatus: (questionId, status) =>
    set((state) => ({
      questions: state.questions.map((question) =>
        question.id === questionId
          ? { ...question, questionState: status }
          : question
      ),
    })),
  resetQuiz: () =>
    set(() => ({
      isRounding: false,
      isQuizFinished: false,
      isTimerExpired: false,
      userAnswers: [],
      quizId: null,
      questions: [],
      currentQuestionIndex: 0,
      currentQuestion: {} as Question,
    })),
}));
