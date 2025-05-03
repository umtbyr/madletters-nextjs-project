import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { RoomContainer } from "./RoomContainer";
import {
  Participant,
  QuestionStatus,
  Quiz,
  RoomInfoDBResponse,
} from "@/app/models/quiz";
import { cookies } from "next/headers";
type RoomPageProps = {
  params: Promise<{ roomCode: string }>;
  searchParams: Promise<{ quizId: string }>;
};

export default async function Page({ params, searchParams }: RoomPageProps) {
  const roomCode = (await params).roomCode;
  const quizId = (await searchParams).quizId;
  const userId = (await cookies()).get("userId")?.value;

  const roomInfo: RoomInfoDBResponse =
    await prisma.groupChallengeRoom.findUnique({
      where: {
        roomCode: roomCode,
      },
      include: {
        participants: true,
      },
    });
  if (!roomInfo?.roomCode) {
    return notFound();
  }
  const quiz = await prisma.quiz.findUnique({
    where: {
      id: quizId,
    },
    include: {
      questions: true,
    },
  });

  const roomQuiz: Quiz = {
    title: quiz?.title ?? "",
    id: quizId,
    questions:
      quiz?.questions.map((q) => ({
        id: q.id,
        quizId: q.quizId,
        question: q.question,
        answer: q.answer,
        questionKey: q.questionKey,
        questionState: q.questionState as QuestionStatus,
      })) ?? [],
  };

  const roomParticipantsStatus: Participant[] = roomInfo?.participants.map(
    (participant) => ({
      id: participant.id,
      userId: participant.userId,
      userName: participant.userName ?? "",
      ready: participant.ready,
      finished: participant.finished,
    })
  );

  return (
    <main className="flex flex-col w-full max-w-full md:max-w-6xl items-center mx-auto p-4">
      <RoomContainer
        quiz={roomQuiz}
        roomCode={roomInfo.roomCode}
        roomId={roomInfo.id ?? ""}
        userId={userId ?? ""}
        hostUserId={roomInfo.hostUserId}
        participantsStatus={roomParticipantsStatus}
      />
    </main>
  );
}
