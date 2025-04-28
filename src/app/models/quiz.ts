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
  userAnswer?: string | null;
  questionKey: string;
  questionState?: QuestionStatus;
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

type UserAnswer = {
  userAnswer: string | null;
  status: QuestionStatus;
  answer: string;
};

type QuizResultPayload = {
  quizStatistics: UserAnswer[];
  userId: string;
  quizName: string;
  quizId: string;
  score: number;
  total: number;
};

type QuizQuestionsPayload = {
  question: string;
  answer: string;
  questionKey: string;
};

type QuizStatisticsRespone = {
  id: string;
  quizId: string;
  userId: string;
  isSolved: boolean;
  score: number;
  total: number;
  answers: UserAnswer[];
  createdAt: Date;
  updatedAt: Date;
} | null;

export type {
  QuizStatisticsRespone,
  QuizQuestionsPayload,
  Question,
  Quiz,
  NewQuizInput,
  QuizListItem,
  UserAnswer,
  QuizResultPayload,
};
