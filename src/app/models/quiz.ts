//İncelenecek...

import { Prisma } from "@prisma/client";

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

type ParticipantDB = {
  id: string;
  userId: string;
  groupChallengeId: string;
  userName: string | null;
  ready: boolean;
  finished: boolean;
  score: number;
  answers?: Prisma.JsonValue | null;
  startTime: Date | null;
  endTime: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

type RoomInfoDBResponse = {
  id: string;
  quizId: string;
  createdAt: Date;
  updatedAt: Date;
  roomCode: string;
  hostUserId: string;
  status: string;
  participants: ParticipantDB[];
} | null;

type Participant = {
  userId: string;
  userName: string;
  id?: string;
  ready: boolean;
  finished: boolean;
  score?: number;
};

type RoomStatus = {
  roomStatus: string;
  participants: Participant[];
} | null;

type CreateRoomResponse = {
  roomCode: string;
  quizId: string;
  roomId: string;
  participant: Participant[];
} | null;

export type {
  RoomStatus,
  Participant,
  CreateRoomResponse,
  RoomInfoDBResponse,
  QuizStatisticsRespone,
  QuizQuestionsPayload,
  Question,
  Quiz,
  NewQuizInput,
  QuizListItem,
  UserAnswer,
  QuizResultPayload,
};
