import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { DrawerClose, DrawerHeader } from "../ui/drawer";
import { navBarLinks } from "@/lib/variables";

export default function NavBarMobile() {
  return (
    <div>
      <DrawerHeader className="bg-black h-20 flex justify-between">
        <Image src="/logo2.png" alt="Kotar Logo" width={80} height={80} />
        <DrawerClose>
          <AiOutlineClose className="text-white text-3xl cursor-pointer rounded-full" />
        </DrawerClose>
      </DrawerHeader>
      <nav className="flex flex-col items-center h-[calc(100svh-80px)] gap-5 justify-center">
        {navBarLinks.map((link, id) => (
          <Link
            key={id}
            href="/"
            className="p-4 hover:bg-black hover:text-white transition-all duration-200"
          >
            {link.name.toUpperCase()}
          </Link>
        ))}
      </nav>
    </div>
  );
}
