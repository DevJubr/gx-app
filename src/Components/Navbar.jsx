"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "About", url: "/about" },
    { id: 3, text: "Service", url: "/service" },
    { id: 4, text: "Project", url: "/project" },
    { id: 5, text: "Contact", url: "/contact" },
    { id: 6, text: "Resume", url: "/resume" },
  ];

  return (
    <div className=" flex justify-between items-center not-first: h-[110px] max-w-[1310px] mx-auto px-4 text-white">
      {/* Logo */}
      <Image
        alt="logo"
        src={"/img/logo.png"}
        width={165}
        height={37}
        className="sm:w-[115px] h-[30]"
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-[1.6rem] items-center">
        {navItems.map((item) => (
          <li key={item.id} className="p-4 cursor-pointer duration-300">
            <Link href={item.url}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            stroke="#63FD88"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x-icon lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            stroke="#63FD88"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu-icon lucide-menu"
          >
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden overflow-hidden flex py-[2rem] px-[2rem] bg-[#1d1d1d] flex-col  left-0 top-[15%] w-[100%] h-full  ease-in-out duration-500"
            : "ease-in-out w-[100%] duration-500 fixed top-[15%] bottom-0 left-[-300%]"
        }
      >
        {/* Mobile Navigation Items
        

        
        */}
        <div className="effect"></div>
        {navItems.map((item) => (
          <li key={item.id} className="p-4 ">
            <Link href={item.url}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
