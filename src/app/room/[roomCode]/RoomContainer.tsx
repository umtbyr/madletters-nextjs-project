"use client";

import { Participant, RoomInfoDBResponse, RoomStatus } from "@/app/models/quiz";
import { useEffect } from "react";
import { changeStateToReady, joinHandler } from "./services";
import { ListContainer } from "@/components/components/ListContainer";
import { Button } from "@/components/components/Button";
import { useGetParticipantsStats } from "./hooks/useGetParticipantsStats";
import { ReadyButton } from "./components";
import toast from "react-hot-toast";

type RoomContainerProps = {
  participantsStatus: Participant[];
  userId: string;
  roomId: string;
  roomCode: string;
};

export function RoomContainer({
  participantsStatus,
  userId,
  roomId,
  roomCode,
}: RoomContainerProps) {
  const { participantsStats, setParticipantsStats } = useGetParticipantsStats({
    initialParticipants: participantsStatus,
    roomCode,
  });

  console.log(participantsStats);

  useEffect(() => {
    const userName = localStorage.getItem("userName") ?? "";
    const isAlreadyInRoom = participantsStats?.find(
      (item) => item.userId === userId
    );

    if (!isAlreadyInRoom) {
      setParticipantsStats((prev) => [
        ...prev,
        { finished: false, ready: false, userId, userName: userName },
      ]);
      try {
        joinHandler({
          userId: userId,
          roomId: roomId,
          userName: userName,
        });
      } catch (error) {
        setParticipantsStats((prev) => prev.filter((p) => p.userId === userId));
        toast.error("Giriş yapılamadı lütfen sayfayı yenileyiniz.");
      }
    }
  }, []);

  return (
    <div className="w-full max-w-full md:max-w-5xl flex-col items-center">
      <h1 className="text-2xl text-amber-500 text-center">Oda {roomCode}</h1>
      <div>
        <ListContainer
          data={participantsStats ?? []}
          renderItem={(participant) => (
            <div className="flex items-center gap-4 w-full justify-between">
              <p className="text-xl font-bold">{participant.userName}</p>
              <div>
                <ReadyButton
                  setParticipantsStats={setParticipantsStats}
                  userId={userId}
                  isReady={participant.ready}
                  participant_id={participant.id ?? ""}
                  participantUserId={participant.userId}
                  roomId={roomId}
                />
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
