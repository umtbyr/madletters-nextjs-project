import { NavbarItem } from "./components/NavbarItem";
import { ListIcon, HomeIcon, UserIcon, GlobeIcon } from "lucide-react";
export function Navbar() {
  return (
    <nav className=" bg-amber-400/80 p-4 w-full">
      <div className="flex w-full">
        <div className="w-1/3">
          <NavbarItem link="/all-quizes" label="All Quizes">
            <ListIcon className="w-8 h-8" />
          </NavbarItem>
        </div>
        <div className="w-1/3 flex justify-center">
          <NavbarItem link="/" label="home-page">
            <HomeIcon className="w-8 h-8" />
          </NavbarItem>
        </div>
        <div className="flex justify-end gap-6 w-1/3">
          <NavbarItem link="/play-online" label="home-page">
            <GlobeIcon className="w-8 h-8" />
          </NavbarItem>
          <NavbarItem link="/profile" label="profile">
            <UserIcon className="w-8 h-8" />
          </NavbarItem>
        </div>
      </div>
    </nav>
  );
}
