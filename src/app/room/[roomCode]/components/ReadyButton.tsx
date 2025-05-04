"use client";

import { Participant } from "@/app/models/quiz";
import { Button } from "@/components/components/Button";
import { changeStateToReady } from "../services";
import toast from "react-hot-toast";

type ReadyButtonProps = {
  isReady: boolean;
  userId: string;
  participant_id: string;
  participantUserId: string;
  roomId: string;
  setParticipantsStats: React.Dispatch<React.SetStateAction<Participant[]>>;
};

export function ReadyButton({
  isReady,
  setParticipantsStats,
  participantUserId,
  userId,
  participant_id,
  roomId,
}: ReadyButtonProps) {
  const className = isReady ? "bg-blue-500/80 text-white" : "";

  const onClickHandler = async () => {
    setParticipantsStats((prev) =>
      prev.map((p) => (p.id === participant_id ? { ...p, ready: true } : p))
    );
    try {
      await changeStateToReady({ isReady: true, participant_id, roomId });
    } catch (error) {
      setParticipantsStats((prev) =>
        prev.map((p) => (p.id === participant_id ? { ...p, ready: false } : p))
      );
      console.log(error);

      toast.error("Hazır olunamadı tekrar deneyiniz.");
    }
  };

  return (
    <Button
      disabled={userId !== participantUserId || isReady}
      className={className}
      onClick={() => {
        onClickHandler();
      }}
    >
      Ready!
    </Button>
  );
}
