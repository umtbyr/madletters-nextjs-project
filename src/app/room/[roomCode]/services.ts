import { Participant, RoomStatus } from "@/app/models/quiz";

export const joinHandler = async ({
  userId,
  roomCode,
  userName,
}: {
  userId: string;
  roomCode: string | undefined;
  userName: string | null;
}) => {
  const response = await fetch("/api/room/join", {
    method: "POST",
    body: JSON.stringify({ userId: userId, roomCode, userName }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to delete participant.");
  }

  return response.json();
};

export const getRoomStatus = async (roomCode: string) => {
  const response = await fetch(`/api/room/status?roomCode=${roomCode}`, {
    method: "GET",
    cache: "no-store",
  });

  const roomStatus: RoomStatus = await response.json();

  return roomStatus;
};

export const changeStateToReady = async ({
  participant_id,
  roomId,
  isReady,
}: {
  participant_id: string;
  roomId: string | undefined;
  isReady: boolean;
}) => {
  const response = await fetch(`/api/room/ready`, {
    method: "POST",
    body: JSON.stringify({ participant_id, roomId, isReady }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update readiness`);
  }
};

export async function deleteParticipant(
  participant_id: string,
  isHost = false,
  roomCode: string
) {
  const respnose = await fetch("/api/room/exit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ participant_id, isHost, roomCode }),
  });

  if (!respnose.ok) {
    const errorData = await respnose.json();
    throw new Error(errorData.error || "Failed to delete participant.");
  }
}

export async function finishQuiz({
  participant_id,
  score,
}: {
  participant_id: string;
  score: number;
}) {
  const respnose = await fetch("/api/room/finish", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ participant_id, score }),
  });

  if (!respnose.ok) {
    const errorData = await respnose.json();
    throw new Error(errorData.error || "Failed to finish quiz!");
  }
}
