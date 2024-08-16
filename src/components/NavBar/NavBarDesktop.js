"use client";
import { navBarLinks } from "@/lib/variables";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../custom ui/Button";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

export default function NavBarDesktop() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  let dropdownTimeout;

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

  const servicesLinks = [
    { name: "Copertine", path: "/copertine" },
    { name: "Pergole Retractabile", path: "/pergole-retractabile" },
    { name: "Inchideri Terase", path: "/inchideri-terase" },
    { name: "Rulouri Exterioare", path: "/rulouri-exterioare" },
    { name: "Prelate PVC", path: "/prelate-pvc" },
  ];

  const handleMouseEnter = (e) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setIsClosing(false);
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
  };

  const handleDropdownMouseLeave = () => {
    setIsClosing(true);
    dropdownTimeout = setTimeout(() => {
      setDropdownPosition(null);
    }, 1000);
  };

  const renderDropdown = () => {
    if (!dropdownPosition) return null;

    return createPortal(
      <div
        className={`bg-white text-black w-48 z-50 border-b-4 border-[#f68a09] ${
          isClosing ? "swing-out-top-bck" : "swing-in-top-bck"
        }`}
        style={{
          position: "absolute",
          top: dropdownPosition.top,
          left: dropdownPosition.left,
        }}
        onMouseEnter={() => {
          if (dropdownTimeout) {
            clearTimeout(dropdownTimeout);
          }
        }}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {servicesLinks.map((service, index) => (
          <Link
            key={index}
            href={service.path}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            {service.name}
          </Link>
        ))}
      </div>,
      document.body
    );
  };

  return (
    <nav
      className={`hidden md:block clip-bottom-angled h-14 text-sm z-10 ${
        isScrolled
          ? "fixed top-0 left-1/2 -translate-x-1/2 w-[90%] xl:w-[1280px]"
          : "absolute -bottom-5 left-0 w-full"
      }`}
    >
      <div className="flex bg-[#f68a09] h-full justify-between relative">
        <div className="flex items-center h-full">
          {navBarLinks.map((link, id) => {
            if (link.name.toLowerCase() === "servicii") {
              return (
                <div
                  key={id}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                >
                  <Link
                    href={link.path}
                    className={`hover:bg-black flex h-14 items-center px-5 transition-all font-semibold duration-200 hover:text-white ${
                      pathname === link.path ? "text-lg" : ""
                    }`}
                  >
                    {link.name.toUpperCase()}
                  </Link>
                </div>
              );
            }
            return (
              <Link
                key={id}
                href={link.path}
                className={`hover:bg-black flex h-full items-center px-5 transition-all font-semibold duration-200 hover:text-white ${
                  pathname === link.path ? "text-lg" : ""
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
