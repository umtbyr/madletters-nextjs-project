import { NavbarItem } from "./components/NavbarItem";
import { ListIcon, HomeIcon, UserIcon, GlobeIcon } from "lucide-react";
export function Navbar() {
  return (
    <nav className=" bg-amber-400/80 px-4 pt-2.5 pb-1.5 w-full">
      <div className="flex w-full">
        <div className="w-1/3">
          <NavbarItem link="/all-quizes" label="All Quizes">
            <div className="flex flex-col justify-center items-start ">
              <ListIcon className="w-8 h-8 text-gray-800" />
              <p className="text-xs  text-amber-100">quizes</p>
            </div>
          </NavbarItem>
        </div>
        <div className="w-1/3 flex justify-center">
          <NavbarItem link="/" label="home-page">
            <div className="flex flex-col justify-center items-center">
              <HomeIcon className="w-8 h-8 text-gray-800" />
              <p className="text-xs text-amber-100">home</p>
            </div>
          </NavbarItem>
        </div>
        <div className="flex justify-end gap-6 w-1/3">
          <NavbarItem link="/play-online" label="home-page">
            <div className="flex flex-col justify-center items-center">
              <GlobeIcon className="w-8 h-8 text-gray-800" />
              <p className="text-xs  text-amber-100">create</p>
            </div>
          </NavbarItem>
          <NavbarItem link="/profile" label="profile">
            <div className="flex flex-col justify-center items-center">
              <UserIcon className="w-8 h-8 text-gray-800" />
              <p className="text-xs  text-amber-100">profile</p>
            </div>
          </NavbarItem>
        </div>
      </div>
    </nav>
  );
}
