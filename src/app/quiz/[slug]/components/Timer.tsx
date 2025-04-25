"use client";

import { useQuizStore } from "@/app/store/quizStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Timer({ duration = 10 }: { duration?: number }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const isQuizFinished = useQuizStore((state) => state.isQuizFinished);
  const setTimerExpired = useQuizStore((state) => state.setIsTimerExpired);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    if (isQuizFinished) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isQuizFinished]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimerExpired(true);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className=" text-2xl font-bold px-4 py-2 rounded-md">
      ⏱️ {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}
