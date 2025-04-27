import { NavbarItem } from "./components/NavbarItem";
import { ListIcon, HomeIcon, UserIcon } from "lucide-react";
export function Navbar() {
  return (
    <nav className=" bg-amber-400 p-4 w-full">
      <ul className="flex justify-between gap-3">
        <NavbarItem link="/all-quizes" label="All Quizes">
          <ListIcon className="w-8 h-8" />
        </NavbarItem>
        <NavbarItem link="/" label="home-page">
          <HomeIcon className="w-8 h-8" />
        </NavbarItem>
        <NavbarItem link="/profile" label="profile">
          <UserIcon className="w-8 h-8" />
        </NavbarItem>
      </ul>
    </nav>
  );
}
