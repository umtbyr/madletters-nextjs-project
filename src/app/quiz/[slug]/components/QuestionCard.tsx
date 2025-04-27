import { Question } from "@/app/models/quiz";
import { Card } from "@/components/components";
type QuestionCardProps = {
  children?: React.ReactNode;
  question: Question;
};

export function QuestionCard(props: QuestionCardProps) {
  return (
    <Card style="mx-2  shadow-xl">
      <p className="text-2xl font-medium break-words w-full max-w-full">
        {props.question?.question}
      </p>
    </Card>
  );
}
