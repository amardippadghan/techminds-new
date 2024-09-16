import React from "react";
import ThemeToggler from "./ThemeToggler";
import logo from "../assets/images/TMIH_LOGO_Black_icon.png";

function Header() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar" style={{ backgroundColor: "#240133" }}>
          <div className="flex-1">
            {/* Logo and TechMinds name */}
            <a className="btn btn-ghost normal-case text-xl flex items-center space-x-2 text-white">
              <img
                src={logo}
                alt="Tech Minds It Hub"
                className="w-16 h-14 object-contain"
              />
              <span>Tech Minds It Hub</span>
            </a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-white hover:bg-white hover:text-[#240133]">
                  Overview
                </a>
              </li>
              <li>
                <details>
                  <summary className="text-white hover:bg-white hover:text-[#240133]">
                    Courses
                  </summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <a className="hover:bg-[#47025c]">Link 1</a>
                    </li>
                    <li>
                      <a className="hover:bg-[#47025c]">Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="text-white hover:bg-white hover:text-[#240133]">
                  Contact
                </a>
              </li>
              <li></li>
              <ThemeToggler />
              <li></li>
            </ul>
          </div>
          {/* Burger icon for mobile */}
          <div className="lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Drawer content */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80" style={{ backgroundColor: "#240133" }}>
          <li>
            <a className="text-white hover:bg-white hover:text-[#240133]">Courses</a>
          </li>
          <li>
            <a className="text-white hover:bg-white hover:text-[#240133]">Services</a>
          </li>
          <li>
            <a className="text-white hover:bg-white hover:text-[#240133]">Contact</a>
          </li>
          <li>
            <details>
              <summary className="text-white hover:bg-white hover:text-[#240133]">
                Parent
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a className="hover:bg-[#47025c]">Link 1</a>
                </li>
                <li>
                  <a className="hover:bg-[#47025c]">Link 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li></li>
          <ThemeToggler />
        </ul>
      </div>
    </div>
  );
}

export default Header;
