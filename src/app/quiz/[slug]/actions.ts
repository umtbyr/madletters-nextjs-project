"use server";

import { QuizResultPayload } from "@/app/models/quiz";
import { prisma } from "@/lib/prisma";

const saveQuizResults = async (data: QuizResultPayload) => {
  const { userId, quizId, quizStatistics, score, total } = data;
  const res = await prisma.userQuizStatistics.upsert({
    where: {
      userId_quizId: {
        quizId: quizId,
        userId: userId,
      },
    },
    create: {
      score,
      total,
      answers: quizStatistics,
      isSolved: true,
      quizId: quizId,
      userId: userId,
    },
    update: {
      score,
      answers: quizStatistics,
      isSolved: true,
      quizId: quizId,
      userId: userId,
    },
  });
};

export { saveQuizResults };
