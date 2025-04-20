import Link from "next/link";

export function NavbarItem(props: { link: string; label: string }) {
  return (
    <li className="flex-1 text-center">
      <Link
        href={props.link}
        className="block py-2 w-full hover:underline text-2xl font-bold text-amber-400"
      >
        {props.label}
      </Link>
    </li>
  );
}
