import Link from "next/link";
import React from "react";

export default function NavBarDesktop() {
  return (
    <nav className="absolute -bottom-5 w-[83%] text-white clip-bottom-angled mx-32 h-14 text-sm z-10">
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
