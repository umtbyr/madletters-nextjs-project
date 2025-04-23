//İncelenecek...

export const QuestionStatus = {
  CORRECT: "correct",
  INCORRECT: "incorrect",
  UNANSWERED: "unanswered",
  SKIPPED: "skipped",
} as const;

export type QuestionStatus =
  (typeof QuestionStatus)[keyof typeof QuestionStatus];

type Question = {
  id: number;
  quizId: string;
  question: string;
  answer: string;
  questionKey: string;
  user_answer?: string | null;
  status?: QuestionStatus;
};

type Quiz = {
  title: string;
  id: string;
  questions: Question[];
};

type QuizListItem = Omit<Quiz, "questions">;

type NewQuestionInput = Omit<Question, "id" | "quizId">;

type NewQuizInput = {
  title: string;
  id: number;
  questions: NewQuestionInput[];
};

export type { Question, Quiz, NewQuizInput, QuizListItem };
