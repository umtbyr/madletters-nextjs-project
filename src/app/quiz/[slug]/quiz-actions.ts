"use server";

import { NewQuizInput } from "@/app/models/quiz";
import { prisma } from "@/lib/prisma";

export async function createQuiz(quizData: NewQuizInput) {
  try {
    const quiz = await prisma.quiz.create({
      data: {
        date: new Date(),
        title: quizData.title,
        questions: {
          create: [...quizData.questions],
        },
      },
    });
  } catch (error) {
    //will be handled
    console.log(error);
  }
}
