import { Question } from "@/app/models/quiz";
import { Card } from "@/components/components";
type QuestionCardProps = {
  children?: React.ReactNode;
  question: Question;
};

export function QuestionCard(props: QuestionCardProps) {
  return (
    <Card style="mx-2 border-black border-4 shadow-2xl">
      <p className="text-3xl font-medium break-words">
        {props.question?.question}
      </p>
    </Card>
  );
}
