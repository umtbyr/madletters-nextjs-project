import Link from "next/link";

type NavbarProps = {
  children?: React.ReactNode;
  link: string;
  label: string;
};

export function NavbarItem(props: NavbarProps) {
  return (
    <Link className="flex flex-col h-full justify-center " href={props.link}>
      {props.children}
    </Link>
  );
}
