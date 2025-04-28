"use client";
import { useQuizStore } from "@/app/store/quizStore";
import { Button } from "@/components/components/Button";

export function FinishQuizButton() {
  const isRounding = useQuizStore((state) => state.isRounding);
  const isQuizFinished = useQuizStore((state) => state.isQuizFinished);
  const setTimerExpired = useQuizStore((state) => state.setIsTimerExpired);

  return (
    <div className="flex w-1/2 ml-auto ">
      {!isQuizFinished && isRounding && (
        <Button
          className="bg-red-500 text-white "
          onClick={() => {
            setTimerExpired(true);
          }}
        >
          Bitir
        </Button>
      )}
    </div>
  );
}
