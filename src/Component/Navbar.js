import React, { useState, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Add a scroll event listener to track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // for fixed navbar
  const navbarClasses = `md:fixed top-0 left-0 right-0 lg:p-4 p-2 z-50 ${
    scrolling ? "bg-white shadow-lg" : ""
  }`;
  return (
    <nav className={navbarClasses}>
      <div
        className={`container mx-auto flex ${
          isOpen ? " " : "justify-between items-center"
        } `}
      >
        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white">
            {isOpen ? <CloseIcon /> : <MenuOutlinedIcon />}
          </button>
        </div>

        {/* Navigation links */}
        <ul
          className={`md:flex ${
            isOpen ? "block   flex " : "hidden"
          }`}
        >
          <li>
            <a
              href="#home"
              className="text-black text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl lg:mx-4 mx-1 hover:text-gray-500 hover:underline smooth-scroll"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-black text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl lg:mx-4 mx-1 hover:text-gray-500 hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="text-black text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl lg:mx-4 mx-1 hover:text-gray-500 hover:underline"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black text-base md:text-lg lg:text-lg font-black md:font-bold xl:text-2xl lg:mx-4 mx-1 hover:text-gray-500 hover:underline"
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
