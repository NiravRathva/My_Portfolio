import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
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
        <ul className={`md:flex  ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="/project" className="text-white">
              Project
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
