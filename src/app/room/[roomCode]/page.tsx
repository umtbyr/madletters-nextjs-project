import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { RoomContainer } from "./RoomContainer";
import { Participant, RoomInfoDBResponse } from "@/app/models/quiz";
import { cookies } from "next/headers";

type RoomPageProps = {
  params: Promise<{ roomCode: string }>;
};

export default async function Page({ params }: RoomPageProps) {
  const roomCode = (await params).roomCode;
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
  const roomParticipantsStatus: Participant[] = roomInfo?.participants.map(
    (participant) => ({
      id: participant.id,
      userId: participant.userId,
      userName: participant.userName ?? "",
      ready: participant.ready,
      finished: participant.finished,
    })
  );

  console.log(userId);

  return (
    <main className="flex flex-col w-full max-w-full md:max-w-6xl items-center mx-auto p-4">
      <RoomContainer
        roomCode={roomInfo.roomCode}
        roomId={roomInfo.id ?? ""}
        userId={userId ?? ""}
        participantsStatus={roomParticipantsStatus}
      />
    </main>
  );
}
