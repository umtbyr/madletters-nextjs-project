import { Participant } from "@/app/models/quiz";
import { useEffect, useState } from "react";
import { getRoomStatus } from "../services";

export const useGetParticipantsStats = ({
  initialParticipants,
  roomCode,
}: {
  initialParticipants: Participant[];
  roomCode: string;
}) => {
  const [participantsStats, setParticipantsStats] =
    useState(initialParticipants);
  const poolingHandler = async () => {
    if (document.visibilityState === "visible") {
      const roomStatus = await getRoomStatus(roomCode ?? "");
      if (roomStatus?.participants) {
        setParticipantsStats(roomStatus?.participants);
      }
    }
  };
  useEffect(() => {
    const poolingInterval = setInterval(poolingHandler, 5000);

    return () => clearInterval(poolingInterval);
  }, []);

  return { participantsStats, setParticipantsStats };
};
