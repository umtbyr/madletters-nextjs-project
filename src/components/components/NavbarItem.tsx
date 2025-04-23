import Link from "next/link";

type NavbarProps = {
  children?: React.ReactNode;
  link: string;
  label: string;
};

export function NavbarItem(props: NavbarProps) {
  return (
    <li className="flex justify-center">
      <Link href={props.link}>{props.children}</Link>
    </li>
  );
}
