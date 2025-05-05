import { Button } from "@/components/components/Button";
import toast from "react-hot-toast";
import { ShareIcon } from "lucide-react";

export function ShareButton() {
  return (
    <div className="flex justify-end items-center rounded-2xl ">
      <div>
        <Button
          className="bg-amber-500/80 text-white flex gap-2"
          onClick={async () => {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Oda Linki kopyalandı");
          }}
        >
          <p>Share </p>
          <ShareIcon className="text-white" />
        </Button>
      </div>
    </div>
  );
}
