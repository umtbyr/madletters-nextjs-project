import { Button } from "@/components/components/Button";
import toast from "react-hot-toast";

export function RoomHeader() {
  return (
    <div className="flex justify-end items-center px-6 mt-4">
      <div>
        <Button
          onClick={async () => {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Oda Linki kopyalandı");
          }}
        >
          Paylaş!
        </Button>
      </div>
    </div>
  );
}
