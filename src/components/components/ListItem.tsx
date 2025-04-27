import { CircleArrowRightIcon } from "lucide-react";
import Link from "next/link";

type ListItemProps = {
  label: string;
  href: string;
};

export function ListItem(props: ListItemProps) {
  return (
    <Link href={props.href}>
      <div className="flex justify-between w-full max-w-full items-center">
        <p className="font-medium text-lg">{props.label}</p>
        <CircleArrowRightIcon className="w-6 h-6 text-amber-600" />
      </div>
    </Link>
  );
}
