"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NavBarDesktop() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 100;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`hidden md:block text-white clip-bottom-angled h-14 text-sm z-10 ${
        isScrolled
          ? "fixed top-0 left-1/2 -translate-x-1/2 w-[90%] xl:w-[1280px] "
          : "absolute -bottom-5 left-0 w-full"
      }`}
    >
      <div className="flex bg-[#f68a09] text-white h-full justify-between">
        <div className="flex items-center space-x-6 pl-8">
          <Link href="/" className="hover:text-gray-500">
            HOME
          </Link>
          <Link href="/about" className="hover:text-gray-500">
            ABOUT US
          </Link>
          <Link href={"/service"} className="relative group">
            <button className="hover:text-gray-500">SERVICE +</button>
          </Link>
          <Link href={"/service"} className="relative group">
            <button className="hover:text-gray-500">PAGES +</button>
          </Link>
          <Link href={"/service"} className="relative group">
            <button className="hover:text-gray-500">BLOG +</button>
          </Link>
          <Link href="/contact" className="hover:text-gray-500">
            CONTACT US
          </Link>
        </div>
        <Link
          href="/contact"
          className="flex items-center bg-gray-800 hover:text-gray-500 px-8 font-medium"
        >
          GET A QUOTE
        </Link>
      </div>
    </nav>
  );
}
