import { Question } from "@/app/models/quiz";
import { Card } from "@/components/components";
type QuestionCardProps = {
  children?: React.ReactNode;
  question: Question;
  ref: React.Ref<HTMLDivElement>;
};

export function QuestionCard(props: QuestionCardProps) {
  return (
    <div ref={props.ref}>
      <Card style="mx-2 shadow-xl">
        <p className="text-2xl text-slate-800 font-medium break-words w-full max-w-full ">
          {props.question?.question}
        </p>
      </Card>
    </div>
  );
}
