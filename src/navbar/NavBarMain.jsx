import React from "react";
import NavBarLogo from "./NavbarLogo";
import NavBarLinks from "./NavBarLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-50 flex gap-4 mt-2 backdrop-blur-lg">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavBarLogo />

        <div className={`${menuOpen ? "sm:block " : "sm:hidden"} lg:block`}>
          <NavBarLinks />
        </div>
        <div className="flex lg:hidden sm:block p-2  items-center justify-center rounded-full border-[0.5px] border-[orange]">
          <button
            className="text-2xl p-3 border border-orange rounded-full text-[black]"
            onClick={
              toggleMenu
            } /*The onclick carries a prop toggleMenu which has been initially declared as const */
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMain;
