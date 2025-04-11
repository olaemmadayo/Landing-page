import React, { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  {
    link: "About us",
    section: "about",
  },
];

const dropdownOptions = [
  {
    link: "Courses",
    section: "courses",
    subLinks: [
      { link: "frontend", section: "frontend" },
      { link: "backend", section: "backend" },
      { link: "AI", section: "ai" },
      { link: "GameDEV", section: "gamedev" },
      { link: "DataScience", section: "Data Science" },
    ],
  },
];
const extraLinks = [
  {
    link: "FAQ's",
    section: "faq",
  },
];

const NavBarLinks = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <ul className="flex justify-between items-center gap-10 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[102%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-[yellow]/30 backdrop-blur-lg lg:bg-[#fff] sm:w-full py-4">
      {/* For Main Links */}
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link to={`/${link.section}`} className="hover:text-[#1a10a7]">
            {link.link}
          </Link>
          <div className="mx-auto bg-[#1fe675] w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}

      {/* For Dropdown Links */}
      {dropdownOptions.map((dropdown, index) => (
        <li key={index} className="relative group">
          <button
            onClick={() => toggleDropdown(index)}
            className="hover:text-[#1a10a7] focus:outline-none"
          >
            {dropdown.link}
          </button>
          <div
            className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
              openDropdown === index ? "block" : "hidden"
            }`}
          >
            {dropdown.subLinks.map((subLink, subIndex) => (
              <Link
                key={subIndex}
                to={`/${subLink.section}`}
                className="block px-4 py-2 text-gray-700 hover:text-[blue] hover:bg-gray-200"
              >
                {subLink.link}
              </Link>
            ))}
          </div>
        </li>
      ))}

      {/* For Extra Links */}
      {extraLinks.map((link, index) => (
        <li key={index} className="group">
          <Link to={`/${link.section}`} className="hover:text-[#1a10a7]">
            {link.link}
          </Link>
          <div className="mx-auto bg-[#1fe675] w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavBarLinks;
