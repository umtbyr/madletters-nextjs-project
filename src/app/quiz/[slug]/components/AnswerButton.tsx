import { Button } from "@/components/components/Button";

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
    <Button
      className="flex-1"
      onClick={() => {
        answerHandler(answer);
        clearAnswerHandler();
      }}
    >
      {answer !== "" ? "Cevapla" : "Geç"}
    </Button>
  );
}
