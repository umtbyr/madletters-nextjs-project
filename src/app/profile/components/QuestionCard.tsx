"use client";

import { QuestionStatus } from "@/app/models/quiz";
import { CircleCheckIcon, CircleMinusIcon, CircleXIcon } from "lucide-react";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
type QuestionCardProps = {
  answer: {
    question: string;
    userAnswer: string | null;
    status: QuestionStatus;
    answer: string;
  };
};

export function QuestionCard({ answer }: QuestionCardProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  let icon: React.ReactNode;
  switch (answer.status) {
    case QuestionStatus.CORRECT:
      icon = <CircleCheckIcon className="w-6 h-6 text-green-500" />;
      break;
    case QuestionStatus.INCORRECT:
      icon = <CircleXIcon className="w-6 h-6 text-red-600" />;
      break;
    default:
      icon = <CircleMinusIcon className="w-6 h-6 text-blue-500" />;
      break;
  }

  return (
    <>
      <div className=" w-full flex justify-between p-4" onClick={handleOpen}>
        <div className="flex items-center gap-2">
          {open ? (
            <ChevronUpIcon className="w-6 h-6" />
          ) : (
            <ChevronDownIcon className="w-6 h-6" />
          )}
          <p className="font-medium text-lg">{answer.answer}</p>
        </div>
        {icon}
      </div>
      {open && (
        <div
          className={`flex w-full max-w-full px-4 py-4 bg-white rounded-b-2xl accordion-open`}
        >
          <div className="flex gap-2 items-center">
            <p className="font-medium text-lg">{answer.question}</p>
          </div>
        </div>
      )}
    </>
  );
}
