import Link from "next/link";
import { CoffeeIcon } from "lucide-react";
export default function BuyMeACoffeeButton() {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Buy me a coffee"
      href="https://coff.ee/umutbayar"
      className="flex p-2 rounded-2xl  bg-yellow-400/90 text-slate-800 items-center justify-center min-w-28"
    >
      <div className="flex text-md font-medium items-center justify-evenly gap-1">
        <p>Buy me a Coffee</p>
        <CoffeeIcon />
      </div>
    </Link>
  );
}
