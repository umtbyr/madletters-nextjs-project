"use server";

import { QuizResultPayload } from "@/app/models/quiz";
import { prisma } from "@/lib/prisma";

const saveQuizResults = async (data: QuizResultPayload) => {
  const { userId, quizId, quizStatistics, score, total, quizName } = data;

  await prisma.$transaction(async (tx) => {
    await tx.userQuizStatistics.upsert({
      where: {
        userId_quizId: {
          quizId: quizId,
          userId: userId,
        },
      },
      create: {
        quizName,
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

    tx.user.update({
      where: { id: userId },
      data: {
        userPoint: {
          increment: score,
        },
      },
    });
  });
};

export { saveQuizResults };
