import { Participant } from "@/app/models/quiz";
import { Ref, useEffect, useRef, useState } from "react";
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
  const [isAllReady, setIsAllReady] = useState(false);

  const poolingHandler = async () => {
    if (document.visibilityState === "visible" && !isAllReady) {
      const roomStatus = await getRoomStatus(roomCode ?? "");
      if (roomStatus?.participants) {
        setParticipantsStats(roomStatus?.participants);
        setIsAllReady(roomStatus.participants.every((p) => p.ready === true));
      }
    }
  };
  useEffect(() => {
    const poolingInterval = setInterval(poolingHandler, 5000);

    return () => clearInterval(poolingInterval);
  }, []);

  return { participantsStats, setParticipantsStats, isAllReady };
};
