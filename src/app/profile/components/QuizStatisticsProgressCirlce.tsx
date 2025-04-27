"use client";
import { QuizStatisticsRespone } from "@/app/models/quiz";
import { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
type QuizStatisticsProgressCirlceProps = {
  children?: React.ReactNode;
  quizData: QuizStatisticsRespone;
};

export function QuizStatisticsProgressCirlce({
  quizData,
}: QuizStatisticsProgressCirlceProps) {
  const initialScore = 0;
  const [score, setScore] = useState(initialScore);
  const calculatedScore =
    ((quizData?.score ?? 0) * 100) / (quizData?.total ?? 100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (score < calculatedScore) {
        setScore((prev) => prev + 1);
        if (score >= calculatedScore) {
          clearInterval(interval);
        }
      }
    }, 10);

    return () => clearInterval(interval);
  }, [score]);

  return (
    <div className="flex w-40 h-40">
      <CircularProgressbarWithChildren
        value={score}
        strokeWidth={10}
        className="flex items-center"
        styles={buildStyles({
          pathColor: "#f59e0b",
          textColor: "#4f46e5",
          pathTransitionDuration: 0.5,
          trailColor: "#e4e4e7",
        })}
      >
        <p className="text-4xl font-extrabold ">{`${calculatedScore.toFixed(
          1
        )}`}</p>
      </CircularProgressbarWithChildren>
    </div>
  );
}
