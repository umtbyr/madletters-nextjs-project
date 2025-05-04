"use client";
import { useQuizStore } from "@/app/store/quizStore";
import { Button } from "@/components/components/Button";

export function FinishQuizButton() {
  const isRounding = useQuizStore((state) => state.isRounding);
  const isQuizFinished = useQuizStore((state) => state.isQuizFinished);
  const setTimerExpired = useQuizStore((state) => state.setIsTimerExpired);

  return (
    <div className="flex w-1/2 justify-start">
      <div>
        {!isQuizFinished && isRounding && (
          <Button
            className="bg-red-600 text-white "
            onClick={() => {
              setTimerExpired(true);
            }}
          >
            Finish
          </Button>
        )}
      </div>
    </div>
  );
}
