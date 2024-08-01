"use client";
import React, { useState } from "react";
import NavBarMobile from "../NavBar/NavBarMobile";
import Image from "next/image";
import HeaderCall from "./HeaderCall";
import HeaderEmail from "./HeaderEmail";
import HeaderLocation from "./HeaderLocation";
import { AiOutlineMenu } from "react-icons/ai";
import NavBarDesktop from "../NavBar/NavBarDesktop";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-black md:bg-gradient-to-r from-black via-black to-white to-70% ">
      <div className="relative max-w-screen-xl xl:mx-auto md:mx-10 flex justify-between items-center md:items-start h-20 md:h-28">
        <div className="basis-1/2 pl-4 md:pl-0 md:basis-1/4 md:pt-4">
          <Image
            src="/Logo.png"
            alt="Kotar Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>
        <div className="basis-3/4 hidden md:flex bg-white items-start justify-around flex-nowrap h-full md:pt-4">
          <HeaderCall />
          <HeaderEmail />
          <HeaderLocation />
        </div>
        <div className="md:hidden pr-4 md:pr-0 flex items-center justify-end basis-1/2">
          <AiOutlineMenu
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
        <div className="hidden md:flex">
          <NavBarDesktop />
        </div>
      </div>
      <NavBarMobile isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu} />
    </header>
  );
}
