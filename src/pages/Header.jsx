import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <nav  className={`flex items-center justify-between w-full h-[10vh] py-4 px-6 sm:px-30 bg-[#333] ${
        isLoaded ? "fade-in" : ""
      }`}>
        <div className="flex justify-center items-center gap-2">
          <div className="sm:hidden flex items-center" onClick={toggleMenu}>
            <div className="text-white space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </div>

          <p className="text-white text-2xl font-bold ">Portfolio.</p>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex flex-col" : "hidden"
          } sm:flex sm:flex-row gap-4 text-gray-300 text-base sm:font-normal lg:gap-6  sm:ml-10 sm:static absolute top-16 left-0 right-0 bg-black sm:bg-transparent p-6 sm:p-0 transition-all duration-300 ease-in-out`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 font-bold"
                : "text-gray-300 hover:text-orange-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 font-bold"
                : "text-gray-300 hover:text-orange-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/skill"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 font-bold"
                : "text-gray-300 hover:text-orange-300"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 font-bold"
                : "text-gray-300 hover:text-orange-300"
            }
          >
            Projects
          </NavLink>
        </div>
        <div className="hover:bg-orange-500 bg-orange-400 rounded px-4 py-1 text-white text-lg font-normal ">
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
