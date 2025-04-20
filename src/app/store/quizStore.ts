import { create } from "zustand";
import { Question } from "../models/quiz";
import { QuestionStatus } from "../models/quiz";
export type QuizStore = {
  currentQuestionIndex: number;
  currentQuestion: Question;
  setCurrentQuestion: (question: Question) => void;
  questions: Question[];
  setCurrentQuestionIndex: (index: number) => void;
  setQuestions: (questions: Question[]) => void;
  setQuestionStatus: (questionId: string, status: QuestionStatus) => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  currentQuestionIndex: 0,
  currentQuestion: {} as Question,
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
        question.question_id === questionId ? { ...question, status } : question
      ),
    })),
}));
