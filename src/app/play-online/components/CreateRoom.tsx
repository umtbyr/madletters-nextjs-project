"use client";

import { QuizListItem } from "@/app/models/quiz";
import { Button } from "@/components/components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { QuizList } from "./QuizList";
import { createRoom } from "../services";
import toast from "react-hot-toast";

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
      if (!quizId) {
        toast.error("Please select a quiz.");
        return;
      }
      setIsLoading(true);
      const roomInfo = await createRoom({ userId, userName, quizId });
      const params = new URLSearchParams(searchParams.toString());
      params.set("quizId", quizId ?? "");
      router.push(`/room/${roomInfo.roomCode}?${params.toString()}`);
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  const handleSetQuiz = (quizId: string) => {
    setQuizId(quizId);
  };

  return (
    <>
      <div className="w-full mt-12 mb-12">
        <div className="max-h-72 overflow-y-auto w-full max-w-full ">
          <QuizList
            selectedQuiz={quizId}
            handleSetQuiz={handleSetQuiz}
            quizes={quizes}
          />
        </div>
      </div>
      <div className="mt-10">
        <Button
          className="text-slate-800"
          onClick={() => {
            handleCreateRoom();
          }}
        >
          {isLoading ? "Creating Room..." : "Create Room"}
        </Button>
      </div>
    </>
  );
}
