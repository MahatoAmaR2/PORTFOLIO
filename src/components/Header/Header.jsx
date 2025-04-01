import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full py-4 px-10 bg-black">
        <div>
          <p className="text-white text-2xl font-bold">Portfolio.</p>
        </div>
        <div className="flex gap-4 text-gray-300 text-base font-normal">
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
        <div className="bg-orange-400 rounded px-4 py-1 text-white text-lg font-normal ">
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
