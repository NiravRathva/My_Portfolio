import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
          Nirav Rathwa
        </a>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white">
            {isOpen ? <CloseIcon /> : <MenuOutlinedIcon />}
          </button>
        </div>

        {/* Navigation links */}
        <ul className={`md:flex  ${isOpen ? "block" : "hidden"}`}>
          <li>
            <a
              href="/"
              className="text-black text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl mx-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-black  text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl mx-4"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="text-black  text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl mx-4"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black  text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl mx-4"
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
