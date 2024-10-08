"use client";
import { navBarLinks, servicii } from "@/lib/variables";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Button from "../custom ui/Button";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function NavBarDesktop() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState(null);

  const closeTimeoutRef = useRef(null);

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

  const handleMouseEnter = (e) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom,
      left: rect.left,
    });
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownPosition(null);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownPosition(null);
    }, 200);
  };

  const renderDropdown = () => {
    if (!dropdownPosition) return null;

    return createPortal(
      <div
        className="bg-white text-black w-48 z-50 border-b-4 border-[#f68a09] swing-in-top-bck"
        style={{
          position: "fixed", // Folosim "fixed" pentru a ne asigura că dropdown-ul rămâne în poziția corectă față de navbar
          top: dropdownPosition.top,
          left: dropdownPosition.left,
        }}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {servicii.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="block px-4 py-2 text-[.9rem] font-semibold hover:bg-gray-200"
          >
            {service.title}
          </Link>
        ))}
      </div>,
      document.body
    );
  };

  return (
    <nav
      className={`hidden md:block clip-bottom-angled h-14 z-50 ${
        isScrolled
          ? "fixed top-0 left-1/2 -translate-x-1/2 w-[90%] xl:w-[1280px]"
          : "absolute -bottom-5 left-0 w-full"
      }`}
    >
      <div className="flex bg-[#f68a09] h-full justify-between relative">
        <div className="flex items-center h-full relative">
          {navBarLinks.map((link, id) => {
            if (link.name.toLowerCase() === "servicii") {
              return (
                <div
                  key={id}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.path}
                    className={`hover:bg-black flex h-14 items-center px-5 transition-all font-semibold duration-200 hover:text-white ${
                      pathname === link.path
                        ? "text-md lg:text-lg"
                        : "text-sm lg:text-base"
                    } ${dropdownPosition ? "bg-black text-white" : ""}`}
                  >
                    {link.name.toUpperCase()}
                    <IoIosArrowForward
                      className={`transition-[transform] delay-100  ${
                        dropdownPosition ? "rotate-90" : ""
                      } ${
                        pathname === link.path
                          ? "text-md lg:text-lg"
                          : "text-sm lg:text-base"
                      }`}
                    />
                  </Link>
                </div>
              );
            }
            return (
              <Link
                key={id}
                href={link.path}
                className={`hover:bg-black flex h-full items-center px-5 transition-all font-semibold duration-200 hover:text-white ${
                  pathname === link.path
                    ? "text-md lg:text-lg"
                    : "text-sm lg:text-base"
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            );
          })}
        </div>

        <Button
          type="link"
          href="/contact"
          customClass="font-semibold"
          text="OBȚINE O CONSULTAȚIE"
          mainColor="blue"
          secondColor="black"
        />
      </div>
      {renderDropdown()}
    </nav>
  );
}
