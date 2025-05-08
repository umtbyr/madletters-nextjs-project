import { LoaderCircleIcon } from "lucide-react";

export function WaitingSpinner() {
  return (
    <>
      <p className="font-semibold text-slate-800">
        Waiting for users to be ready!
      </p>
      <LoaderCircleIcon className="animate-spin w-6 h-6 text-slate-800" />
    </>
  );
}
