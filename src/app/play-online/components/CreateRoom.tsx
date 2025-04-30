"use client";

import { RoomInfoDBResponse } from "@/app/models/quiz";
import { Button } from "@/components/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

type CreateRoomProps = {
  userId: string;
  quizId: string;
};

export function CreateRoom({ userId, quizId }: CreateRoomProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const userName = localStorage.getItem("userName");

  const handleCreateRoom = async () => {
    try {
      const roomInfoResponse = await fetch("/api/room/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hostUserId: userId, quizId, userName }),
      });

      if (!roomInfoResponse.ok) {
        throw new Error("Oda kurulamadı.");
        return;
      }

      const roomInfo = await roomInfoResponse.json();
      console.log(roomInfo);
      router.push(`/room/${roomInfo.roomCode}`);
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          setIsLoading(true);
          handleCreateRoom();
        }}
      >
        {isLoading ? "Oda oluşturuluyor..." : "Oda Oluştur"}
      </Button>
    </div>
  );
}
