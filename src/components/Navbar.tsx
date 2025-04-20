import { NavbarItem } from "./components/NavbarItem";

export function Navbar() {
  return (
    <nav className="w-full bg-stone-50 border-b p-3">
      <ul className="flex w-full">
        <NavbarItem link="/all-quizes" label="All Quizes" />
        <NavbarItem link="/" label="Home" />
        <NavbarItem link="profile" label="Profile" />
      </ul>
    </nav>
  );
}
