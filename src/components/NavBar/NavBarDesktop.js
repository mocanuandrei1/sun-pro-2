"use client";
import { navBarLinks } from "@/lib/variables";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../custom ui/Button";

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
      className={`hidden md:block clip-bottom-angled h-14 text-sm z-10 ${
        isScrolled
          ? "fixed top-0 left-1/2 -translate-x-1/2 w-[90%] xl:w-[1280px] "
          : "absolute -bottom-5 left-0 w-full"
      }`}
    >
      <div className="flex bg-[#f68a09] h-full justify-between">
        <div className="flex items-center h-full">
          {navBarLinks.map((link, id) => (
            <Link
              key={id}
              href="/"
              className="hover:bg-black flex h-full items-center px-5 transition-all duration-200 font-semibold hover:text-white"
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </div>

        <Button
          type="link"
          href="/contact"
          customClass="font-semibold"
          text="OBȚINE O CONSULTAȚIE"
        />
      </div>
    </nav>
  );
}
