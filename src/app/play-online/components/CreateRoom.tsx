"use client";

import { QuizListItem } from "@/app/models/quiz";
import { Button } from "@/components/components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { QuizList } from "./QuizList";
import { createRoom } from "../services";

type CreateRoomProps = {
  userId: string;
  quizes: QuizListItem[];
};

export function CreateRoom({ userId, quizes }: CreateRoomProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [quizId, setQuizId] = useState<string | null>(null);

  const handleCreateRoom = async () => {
    const userName = localStorage.getItem("userName") ?? "";
    try {
      const roomInfo = await createRoom({ userId, userName, quizId });
      const params = new URLSearchParams(searchParams.toString());
      params.set("quizId", quizId ?? "");
      router.push(`/room/${roomInfo.roomCode}?${params.toString()}`);
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
    setIsLoading(false);
  };

  const handleSetQuiz = (quizId: string) => {
    setQuizId(quizId);
  };

  return (
    <>
      <div className="w-full">
        <div className="max-h-72 overflow-y-auto w-full max-w-full ">
          <QuizList
            selectedQuiz={quizId}
            handleSetQuiz={handleSetQuiz}
            quizes={quizes}
          />
        </div>
      </div>
      <div className="my-6">
        <Button
          onClick={() => {
            setIsLoading(true);
            handleCreateRoom();
          }}
        >
          {isLoading ? "Oda oluşturuluyor..." : "Oda Oluştur"}
        </Button>
      </div>
    </>
  );
}
