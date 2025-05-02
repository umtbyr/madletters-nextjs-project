"use client";

import { Participant } from "@/app/models/quiz";
import { Button } from "@/components/components/Button";
import { useState } from "react";
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
  let className = isReady ? "bg-blue-500/50" : "";

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
