import { Participant, RoomStatus } from "@/app/models/quiz";

export const joinHandler = async ({
  userId,
  roomId,
  userName,
}: {
  userId: string;
  roomId: string | undefined;
  userName: string | null;
}) => {
  const response = await fetch("/api/room/join", {
    method: "POST",
    body: JSON.stringify({ userId: userId, roomId, userName }),
  });

  if (!response.ok) {
    throw new Error("Failed to join the room");
  }
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
