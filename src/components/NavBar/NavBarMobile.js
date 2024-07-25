import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBarMobile({ isOpen, closeMenu }) {
  return (
    <div
      className={`h-full w-64 bg-white shadow-lg fixed top-0 -left-10 transform ${
        isOpen ? "translate-x-10" : "-translate-x-full"
      } duration-500 z-50`}
    >
      <div className="flex justify-center items-center p-4 bg-black relative">
        <Image src="/Logo.png" alt="Loading..." width={100} height={100} />
      </div>
      <AiOutlineClose
        className="text-white text-3xl cursor-pointer bg-[#f68a09] absolute -right-[14px] top-[88px] rounded-full p-1"
        onClick={closeMenu}
      />
      <nav className="p-4">
        <Link href="/" className="block py-2 px-4 hover:bg-gray-200">
          Home
        </Link>
        <Link href="/about" className="block py-2 px-4 hover:bg-gray-200">
          About Us
        </Link>
        <Link href="/services" className="block py-2 px-4 hover:bg-gray-200">
          Service
        </Link>
        <Link href="/pages" className="block py-2 px-4 hover:bg-gray-200">
          Pages
        </Link>
        <Link href="/blog" className="block py-2 px-4 hover:bg-gray-200">
          Blog
        </Link>
        <Link href="/contact" className="block py-2 px-4 hover:bg-gray-200">
          Contact Us
        </Link>
      </nav>
    </div>
  );
}
