import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { data } from '../../../../data/questions';
import { QuizQuestionsPayload } from '@/app/models/quiz';

export async function GET(request: NextRequest) {
  const quizQuestions = [] as QuizQuestionsPayload[];

  Object.entries(data).forEach(([key, value]) => {
    const randomIndex = Math.floor(Math.random() * value.length);
    const selectedQuestion = value[randomIndex];
    const quizQuestionItem: QuizQuestionsPayload = {
      question: selectedQuestion.question,
      answer: selectedQuestion.answer,
      questionKey: key,
    };
    quizQuestions.push(quizQuestionItem);
  });

  await prisma.quiz.create({
    data: {
      title: 'Günün Tıp Soruları - ' + new Date().toLocaleDateString('tr-TR'),
      date: new Date(),
      questions: {
        create: quizQuestions,
      },
    },
  });

  return NextResponse.json(request);
}
