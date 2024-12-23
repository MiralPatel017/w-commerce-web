import { Link } from "react-router-dom";
import { LuSun } from 'react-icons/lu';

import { FaMoon } from "react-icons/fa";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black z-10 bgblurenav fixed top-0 text-white w-full h-[60px] flex items-center px-4 md:px-10">
      <div className="logo">
        <img src="letter-m.png" alt="logo" className="w-[40px] bg-white rounded-full border-transparent" />
      </div>

      <ul className="hidden md:flex gap-10 text-center mx-auto items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/Product">Product</Link></li>
        <li><Link to="/ContectUs">Contact Us</Link></li>
      </ul>

      <button
        className="text-[25px] max-md:hidden pr-20"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <LuSun /> : <FaMoon className="text-[20px]" />}
      </button>

      <button
        className="block md:hidden ml-auto text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {isMenuOpen && (
        <ul className="absolute top-[60px] left-0 w-full bg-black h-auto z-10 flex flex-col gap-4 py-4 text-center">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/AboutUs" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/Product" onClick={() => setIsMenuOpen(false)}>Product</Link></li>
          <li><Link to="/ContectUs" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
          <li onClick={() => setIsMenuOpen(false)}>
            <button className="text-[25px] rounded-full" onClick={() => {setDarkMode(!darkMode)}}>
              {darkMode ? <LuSun /> : <FaMoon className="text-[20px]" />}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;