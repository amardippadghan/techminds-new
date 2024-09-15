import React from "react";
import ThemeToggler from "./ThemeToggler";

function Header() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">TechMinds</a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Courses</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
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
                className="h-5 w-5"
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
        <ul className="menu p-4 w-80 bg-base-100">
          <li>
            <a>Courses</a>
          </li>
          <li>
            <a>Services</a>
          </li>

          <li>
            <a>Contact</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
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
