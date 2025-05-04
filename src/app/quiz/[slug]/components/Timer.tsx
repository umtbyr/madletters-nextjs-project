"use client";

import { useQuizStore } from "@/app/store/quizStore";
import { useEffect, useState } from "react";
import { TimerIcon } from "lucide-react";
export function Timer({ duration = 10 }: { duration?: number }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const isQuizFinished = useQuizStore((state) => state.isQuizFinished);
  const setTimerExpired = useQuizStore((state) => state.setIsTimerExpired);
  const setTimeLeftStore = useQuizStore((state) => state.setTimeLeftStore);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    if (isQuizFinished) {
      setTimeLeftStore(timeLeft);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isQuizFinished]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeftStore(timeLeft);
      setTimerExpired(true);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className=" text-2xl font-bold px-4 py-2 rounded-md flex gap-1">
      {!isQuizFinished && (
        <>
          <TimerIcon className="w-8 h-8" />
          <p>
            {minutes}:{seconds.toString().padStart(2, "0")}
          </p>
        </>
      )}
    </div>
  );
}
