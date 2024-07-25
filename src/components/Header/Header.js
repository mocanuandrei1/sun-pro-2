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
    <header className="relative bg-black">
      <div className="lg:grid lg:grid-cols-3 lg:h-28 lg:items-start items-center h-20 flex justify-between">
        <div className="col-span-1 lg:ml-32 ml-4">
          <Image
            src="/Logo.png"
            alt="Kotar Logo"
            width={100}
            height={100}
            className="lg:w-24 lg:h-20 w-16 h-14"
          />
        </div>
        <div className="hidden lg:grid grid-cols-3 col-span-2 h-28 bg-gray-100 lg:pr-32 items-start pt-4">
          <HeaderCall />
          <HeaderEmail />
          <HeaderLocation />
        </div>
        <div className="lg:hidden pr-4">
          <AiOutlineMenu
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>
      <div className="hidden lg:flex">
        <NavBarDesktop />
      </div>
      <NavBarMobile isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu} />
    </header>
  );
}
