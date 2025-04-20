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
  question: string;
  answer: string;
  question_id: string;
  question_index: number;
  quesiton_key: string;
  user_answer?: string | null;
  status?: QuestionStatus;
};

type Quiz = {
  id: number;
  questions: Question[];
};

export type { Question, Quiz };
