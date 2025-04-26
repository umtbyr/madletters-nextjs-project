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
      className="flex-1 w-full max-w-full border-black border-2 shadow-2xl text-xl rounded-2xl py-4 px-4 bg-amber-400 font-extrabold "
      onClick={() => {
        answerHandler(answer);
        clearAnswerHandler();
      }}
    >
      {answer !== "" ? "Cevapla" : "Geç"}
    </button>
  );
}
