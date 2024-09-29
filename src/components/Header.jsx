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
            <a
              className="btn btn-ghost normal-case text-xl flex items-center space-x-2 text-white"
              href="/"
            >
              <img
                src={logo}
                alt="Tech Minds It Hub"
                className="w-10 h-14 object-contain"
              />
              <span>Tech Minds It Hub</span>
            </a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a
                  className="text-white hover:bg-white hover:text-[#240133]"
                  href="/"
                >
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
                      <a className="text-black hover:bg-[#47025c] hover:text-white" href="/course/course_001">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a className="text-black hover:bg-[#47025c] hover:text-white" href="/course/course_002">
                        Frontend Development
                      </a>
                    </li>
                    <li>
                      <a className="text-black hover:bg-[#47025c] hover:text-white" href="/course/course_003">
                        Backend Development
                      </a>
                    </li>
                    <li>
                      <a className="text-black hover:bg-[#47025c] hover:text-white" href="/course/course_004">
                        MERN Stack Development
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a
                  className="text-white hover:bg-white hover:text-[#240133]"
                  href="/ContactUs"
                >
                  Contact
                </a>
              </li>
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
      <div className="drawer-side z-10">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="drawer-header" style={{ backgroundColor: "#240133", padding: '1rem' }}>
          {/* Logo and TechMinds name */}
          <a
            className="btn btn-ghost normal-case text-xl flex items-center space-x-2 text-white"
            href="/"
          >
            <img
              src={logo}
              alt="Tech Minds It Hub"
              className="w-10 h-14 object-contain"
            />
            <span>Tech Minds It Hub</span>
          </a>
        </div>
        <ul className="menu p-4 w-full" style={{ backgroundColor: "#240133" }}>
          <li>
            <a className="text-white hover:bg-white hover:text-[#240133]" href="/">
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
                  <a className="text-black hover:bg-[#47025c] hover:text-white" href="/course/course_001">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="text-black hover:bg-[#47025c] hover:text-white" href="/course/course_002">
                    Frontend Development
                  </a>
                </li>
                <li>
                  <a className="text-black hover:bg-[#47025c] hover:text-white" href="/course/course_003">
                    Backend Development
                  </a>
                </li>
                <li>
                  <a className="text-black hover:bg-[#47025c] hover:text-white" href="/course/course_004">
                    MERN Stack Development
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="text-white hover:bg-white hover:text-[#240133]" href="/ContactUs">
              Contact
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Header;
