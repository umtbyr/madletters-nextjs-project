import { Participant } from "@/app/models/quiz";
import { useEffect, useState } from "react";
import { getRoomStatus } from "../services";

export const useGetParticipantsStats = ({
  initialParticipants,
  roomCode,

  isFinished,
}: {
  initialParticipants: Participant[];
  roomCode: string;

  isFinished: boolean;
}) => {
  const [participantsStats, setParticipantsStats] =
    useState(initialParticipants);
  const [isAllReady, setIsAllReady] = useState(false);
  const poolingHandler = async () => {
    if (document.visibilityState === "visible" && (!isAllReady || isFinished)) {
      const roomStatus = await getRoomStatus(roomCode ?? "");
      if (roomStatus?.participants) {
        setParticipantsStats(roomStatus?.participants);
        setIsAllReady(
          roomStatus.participants
            .filter((p) => p.finished !== true)
            .every((p) => p.ready === true)
        );
      }
    }
  };
  useEffect(() => {
    const poolingInterval = setInterval(poolingHandler, 3000);

    return () => clearInterval(poolingInterval);
  }, [poolingHandler]);

  return { participantsStats, setParticipantsStats, isAllReady };
};
