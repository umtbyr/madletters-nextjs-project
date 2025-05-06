import Link from "next/link";
import { LinkIcon, MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-slate-800 w-full h-full py-4 px-6 flex flex-col items-center  text-slate-200/80 text-sm gap-2">
      <div className="flex  gap-4  justify-between">
        <Link
          href={"/terms-of-service"}
          className="flex gap-2 items-center cursor-pointer"
        >
          <p className="underline">Terms of use</p>
          <LinkIcon className="w-4 h-4" />
        </Link>
        <Link
          href={"/privacy-policy"}
          className="flex gap-2 items-center cursor-pointer"
        >
          <p className="underline">Privacy policy</p>
          <LinkIcon className="w-4 h-4" />
        </Link>
      </div>
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
