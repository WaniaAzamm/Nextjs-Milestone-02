"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [dropDownVisible, setDropdownVisibility] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownVisibility(!dropDownVisible);
  };

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div
        className={`bg-[#044e83] text-white flex justify-between items-center py-5 px-5 fixed top-0 left-0 w-full z-50`}
      >
        {!menuVisible && (
          <>
            <Image
              height={100}
              width={100}
              className="absolute left-4 bottom-[-40px] w-14 h-16 md:w-16 md:h-20 transform translate-y-1/2 md:left-10 lg:left-14 mb-9"
              src="/logo.jpeg"
              alt="logo"
              style={{ zIndex: 60 }}
            ></Image>
            <p className="text-sm pl-28 font-bold hidden md:block lg:text-lg lg:ml-8">
              Tuition Free Education Program on Latest Technologies
            </p>
            <p className="text-xl font-bold md:hidden ml-16">
              Tuition Free Program
            </p>
          </>
        )}

        <ul
          className={`hidden md:flex space-x-6 lg:space-x-8 text-sm font-semibold ${
            menuVisible ? "opacity-0" : "opacity-100"
          }`}
        >
          <li className="transition-colors duration-500 hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="transition-colors duration-500 hover:text-gray-300">
            <Link href="/apply">Apply</Link>
          </li>
          <li className="transition-colors duration-500 hover:text-gray-300">
            <Link href="/result">Result</Link>
          </li>
          <li className="transition-colors duration-500 hover:text-gray-300">
            <Link href="/jobs">Jobs</Link>
          </li>
          <li
            className="transition-colors duration-500 hover:text-gray-300 flex items-center cursor-pointer"
            onClick={handleToggleDropdown}
          >
            Courses <AiOutlineDown className="text-lg ml-1" />
          </li>
        </ul>

        <div className="md:hidden cursor-pointer" onClick={handleToggleMenu}>
          {menuVisible ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </div>
      </div>

      {menuVisible && (
        <div className="fixed inset-0 bg-[#044e83] flex flex-col items-center justify-center text-white z-40 top-4">
          <ul className="flex flex-col space-y-5 text-xl font-semibold mb-8">
            <li className="transition-colors duration-500 hover:text-gray-300">
              <Link href="/" onClick={handleToggleMenu}>
                Home
              </Link>
            </li>
            <li className="transition-colors duration-500 hover:text-gray-300">
              <Link href="/apply" onClick={handleToggleMenu}>
                Apply
              </Link>
            </li>
            <li className="transition-colors duration-500 hover:text-gray-300">
              <Link href="/result" onClick={handleToggleMenu}>
                Result
              </Link>
            </li>
            <li className="transition-colors duration-500 hover:text-gray-300">
              <Link href="/jobs" onClick={handleToggleMenu}>
                Jobs
              </Link>
            </li>
            <li
              className="transition-colors duration-500 hover:text-gray-300 flex items-center cursor-pointer"
              onClick={handleToggleDropdown}
            >
              Courses <AiOutlineDown className="text-xl ml-3 " />
            </li>
          </ul>

          {dropDownVisible && (
            <div className="bg-zinc-50 text-black px-4 py-2 rounded shadow-lg w-[80%] mb-11">
              <h1 className="font-bold text-xl">Core Courses</h1>
              <ul>
                <li className="pb-2 text-gray-600 hover:text-blue-800 pt-2 cursor-pointer">
                  Programming Fundamentals
                </li>
                <li className="pb-2 text-gray-600 hover:text-blue-800 cursor-pointer">
                  Web2 Using NextJS
                </li>
                <li className=" text-gray-600 hover:text-blue-800 cursor-pointer">
                  Earn as You Learn
                </li>
                <hr className="mt-2 bg-gray-600" />
                <h1 className="text-xl font-bold pt-3">Advanced Courses</h1>
                <li className="pb-2 pt-2 text-gray-600 hover:text-blue-800 cursor-pointer">
                  Web 3 and Metaverse
                </li>
                <li className="pb-2 text-gray-600 hover:text-blue-800 cursor-pointer">
                  Artificial Intelligence (AI) and Deep Learning
                </li>
                <li className="pb-2 text-gray-600 hover:text-blue-800 cursor-pointer">
                  Ambient Computing and IoT
                </li>
                <li className="pb-2 text-gray-600 hover:text-blue-800 cursor-pointer">
                  Genomics and Bioinformatics
                </li>
                <li className=" text-gray-600 hover:text-blue-800 cursor-pointer">
                  Network Programmability and Automation
                </li>
              </ul>
            </div>
          )}
        </div>
      )}

      {dropDownVisible && (
        <div className="hidden md:block w-80 absolute bg-zinc-50 text-black shadow-lg mt-20 mr-7 right-0 px-6 py-4 z-40">
          <h1 className="font-bold text-lg">Core Courses</h1>
          <ul>
            <li className="pb-2 text-gray-600 hover:text-blue-800 pt-2 cursor-pointer">
              Programming Fundamentals
            </li>
            <li className="pb-2 text-gray-600 hover:text-blue-800 cursor-pointer">
              Web2 Using NextJS
            </li>
            <li className="pb-2 text-gray-600 hover:text-blue-800 cursor-pointer">
              Earn as You Learn
            </li>
            <hr className="mt-2 bg-gray-600" />
            <h1 className="text-lg font-bold pt-4">Advanced Courses</h1>
            <li className="pb-2 pt-2 text-gray-600 hover:text-blue-800 cursor-pointer">
              Web 3 and Metaverse
            </li>
            <li className="pb-2 text-gray-600 hover:text-blue-800 cursor-pointer">
              Artificial Intelligence (AI) and Deep Learning
            </li>
            <li className="pb-2 text-gray-600 hover:text-blue-800 cursor-pointer">
              Ambient Computing and IoT
            </li>
            <li className="pb-2 text-gray-600 hover:text-blue-800 cursor-pointer">
              Genomics and Bioinformatics
            </li>
            <li className="pb-2 text-gray-600 hover:text-blue-800 cursor-pointer">
              Network Programmability and Automation
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
