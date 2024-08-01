import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { DrawerClose, DrawerHeader } from "../ui/drawer";

export default function NavBarMobile() {
  return (
    <div>
      <DrawerHeader className="bg-black h-20 flex justify-between">
        <Image src="/logo2.png" alt="Kotar Logo" width={80} height={80} />
        <DrawerClose>
          <AiOutlineClose className="text-white text-3xl cursor-pointer bg-[#f68a09] rounded-full" />
        </DrawerClose>
      </DrawerHeader>
      <nav className="flex flex-col items-center">
        <Link href="/" className="p-4">
          Home
        </Link>
        <Link href="/about" className="p-4">
          About Us
        </Link>
        <Link href="/services" className="p-4">
          Service
        </Link>
        <Link href="/pages" className="p-4">
          Pages
        </Link>
        <Link href="/blog" className="p-4">
          Blog
        </Link>
        <Link href="/contact" className="p-4">
          Contact Us
        </Link>
      </nav>
    </div>
  );
}
