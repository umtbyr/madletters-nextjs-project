"use client";

import { useState } from "react";
import { AnswerQuestionButton } from "./AnswerButton";

type UserInputProps = {
  children?: React.ReactNode;
  answerHandler: (answer: string) => void;
};

export function UserInput(props: UserInputProps) {
  const [userAnswer, setUserAnswer] = useState<string>();

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  const clearInputHandler = () => {
    setUserAnswer("");
  };

  return (
    <div className="flex gap-6">
      <input
        value={userAnswer}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.answerHandler(userAnswer ?? "");
            clearInputHandler();
          }
        }}
        onChange={(event) => handleUserInput(event)}
        className="text-2xl border-4 border-black rounded-2xl p-4 bg-white font-bold"
        type="text"
        id="user-input"
      />
      <AnswerQuestionButton
        clearAnswerHandler={clearInputHandler}
        answer={userAnswer ?? ""}
        answerHandler={props.answerHandler}
      />
    </div>
  );
}
