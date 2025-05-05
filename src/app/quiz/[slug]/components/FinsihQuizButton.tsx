"use client";
import { useQuizStore } from "@/app/store/quizStore";
import { Button } from "@/components/components/Button";
import { LogOutIcon } from "lucide-react";
export function FinishQuizButton() {
  const isRounding = useQuizStore((state) => state.isRounding);
  const isQuizFinished = useQuizStore((state) => state.isQuizFinished);
  const setTimerExpired = useQuizStore((state) => state.setIsTimerExpired);

  return (
    <div>
      {!isQuizFinished && isRounding && (
        <Button
          className="bg-red-600/80 text-white self-start "
          onClick={() => {
            setTimerExpired(true);
          }}
        >
          <div className="px-1.5">
            <LogOutIcon />
          </div>
        </Button>
      )}
    </div>
  );
}
