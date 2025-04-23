type AnwswerButtonProps = {
  children?: React.ReactNode;
  answerHandler: (answer: string) => void;
  answer: string;
  clearAnswerHandler: () => void;
};

export function AnswerQuestionButton({
  answer,
  clearAnswerHandler,
  answerHandler,
}: AnwswerButtonProps) {
  return (
    <button
      className="min-w-[156px] border-black border-3 shadow-2xl text-3xl rounded-2xl p-4 bg-amber-400 font-bold "
      onClick={() => {
        answerHandler(answer);
        clearAnswerHandler();
      }}
    >
      {answer !== "" ? "Gönder" : "Geç"}
    </button>
  );
}
