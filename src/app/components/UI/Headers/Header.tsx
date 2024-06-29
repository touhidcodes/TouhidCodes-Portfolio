"use client";

import React, { useState, ChangeEvent } from "react";

const Header = () => {
  const [close, setClose] = useState(false);
  const navOptions = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  const handleToggle = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      setClose(true);
    } else {
      setClose(false);
    }
  };

  return (
    <div className=" bg-[#1d1e1f]">
      <div className="navbar  text-white mx-auto max-w-screen-xl">
        <div className="navbar-start">
          {/* TODO: Name should be regular font */}
          <a className="btn btn-ghost normal-case text-2xl chillax font-light">
            TouhidCodes
          </a>
          <div className="relative">
            <div className="badge badge-outline text-green-600 rounded-md p-3 font-semibold">
              AVAILABLE
            </div>
            <div className=" absolute -top-1 -right-1">
              <div className="bg-green-700 w-3 h-3 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              {navOptions}
              <button className="btn btn-ghost font-regular">
                <p className=" badge  text-white bg-opacity-10 rounded-md p-5 text-lg chillax font-extralight">
                  LETS TALK
                </p>
              </button>
            </ul>
          </div>
          {/* Dropdown Menu */}
          <div className="dropdown  dropdown-open dropdown-end">
            <label className="btn btn-ghost lg:hidden swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={close ? true : false}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 swap-off fill-current"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              <svg
                className="h-6 w-6  swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            <div
              className={`${
                !close ? "hidden" : "grid"
              } menu menu-lg dropdown-content  w-screen `}
            >
              <ul
                tabIndex={0}
                className="rounded-md shadow w-10/12 z-[1]  mx-auto bg-[#222]"
              >
                {/* TODO: Nav options should be animatic */}
                {navOptions}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
