import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white">
            {isOpen ? <CloseIcon /> : <MenuOutlinedIcon />}
          </button>
        </div>

        {/* Navigation links */}
        <ul className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <li>
            <a
              href="/"
              className="text-black text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl mx-4 hover:text-gray-500 hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-black text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl mx-4 hover:text-gray-500 hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="text-black text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl mx-4 hover:text-gray-500 hover:underline"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl mx-4 hover:text-gray-500 hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
