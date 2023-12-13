import React from "react";
import Logo from "../../assets/navbar/Logo.png";
import Buttons from "../button/Button";

export default function Navbar() {
  return (
    <nav className="  text-white md:px-5 ">
      <div className=" flex flex-wrap items-center justify-between py-6 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-[40px] w-[40px]" alt="Logo" />
          <span className="text-white text-2xl font-bold font-['Poppins'] leading-10">
            YORFY
          </span>
        </a>
        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse gap-4">
          <Buttons text={"Join Us"} />
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 -order-1"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between mr-[12rem] hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col items-center font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 ">
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="text-white text-sm font-bold font-['Poppins'] leading-normal flex items-center"
              >
                Dropdown
                <svg
                  className="w-2.5 h-2.5 ms-2.5 mt-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal  divide-y divide-gray-100 rounded-lg shadow w-44  "
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-bold font-['Poppins'] leading-normal"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-bold font-['Poppins'] leading-normal"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-bold font-['Poppins'] leading-normal"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="text-white text-sm font-bold font-['Poppins'] leading-normal"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-bold font-['Poppins'] leading-normal"
              >
                NFT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-bold font-['Poppins'] leading-normal"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-bold font-['Poppins'] leading-normal"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-bold font-['Poppins'] leading-normal"
              >
                Contact us
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="text-white text-sm font-bold font-['Poppins'] leading-normal flex items-center justify-center"
              >
                Pages
                <svg
                  className="w-2.5 h-2.5 ms-2.5 mt-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
         
    </nav>
  );
}
