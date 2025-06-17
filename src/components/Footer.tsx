import { MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-slate-800 w-full h-full py-4 px-6 flex flex-col items-center  text-slate-200/80 text-sm gap-2">
      <div className="flex  gap-4  justify-between"></div>
      <div className="flex  gap-1  justify-between">
        <p>Feel free to contact us via</p>
        <div className="flex gap-2 items-center">
          <p>info@madletters.com</p>
          <MailIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
