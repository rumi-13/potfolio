import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useDarkMode } from "../DarkModeContext";
import logo from "../assets/logo.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Education", "Contact"];
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="w-full sticky top-0 z-50 bg-slate-50 dark:bg-slate-900 shadow-sm dark:shadow-lg ring-1 ring-slate-200 dark:ring-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 font-[Poppins]">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo image */}
          <div className="flex items-center">
            <img
              src= {logo}
              alt="logo"
              className="h-12 w-auto sm:h-14 lg:h-16 transition-all duration-200"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) =>
              item === "Contact" ? (
                <a
                  key={item}
                  href="#contact"
                  className="text-base lg:text-lg font-medium transition-all duration-200 hover:text-blue-600 dark:hover:text-yellow-300 hover:scale-105 text-slate-700 dark:text-slate-200"
                >
                  {item}
                </a>
              ) : (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-base lg:text-lg font-medium transition-all duration-200 hover:scale-105 ${
                      isActive
                        ? "text-blue-600 dark:text-yellow-300 font-semibold scale-105"
                        : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-yellow-300"
                    }`
                  }
                >
                  {item}
                </NavLink>
              )
            )}

            {/* Dark Mode Toggle */}
            <button
              className="text-xl lg:text-2xl text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-yellow-300 transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Dark Mode"
              onClick={toggleDarkMode}
            >
              <FiMoon />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-2xl text-slate-700 dark:text-slate-200 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
              aria-label="Mobile Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-4 sm:right-6 lg:right-8 mt-2 w-64 bg-white dark:bg-slate-800 shadow-lg dark:shadow-xl rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 p-6 z-40 md:hidden transition-all duration-300">
          <div className="flex flex-col gap-y-4">
            {navItems.map((item) =>
              item === "Contact" ? (
                <a
                  key={item}
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium transition-all duration-200 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-yellow-300 text-slate-700 dark:text-slate-200"
                >
                  {item}
                </a>
              ) : (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium transition-all duration-200 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 ${
                      isActive
                        ? "text-blue-600 dark:text-yellow-300 font-semibold bg-slate-100 dark:bg-slate-700"
                        : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-yellow-300"
                    }`
                  }
                >
                  {item}
                </NavLink>
              )
            )}

            {/* Mobile Dark Mode Toggle */}
            <button
              className="flex items-center gap-x-3 text-base font-medium transition-all duration-200 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-yellow-300 text-slate-700 dark:text-slate-200"
              onClick={() => {
                toggleDarkMode();
                setMenuOpen(false);
              }}
            >
              <FiMoon className="text-lg" />
              Dark Mode
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
