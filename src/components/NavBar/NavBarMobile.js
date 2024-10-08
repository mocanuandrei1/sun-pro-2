"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { DrawerClose, DrawerHeader } from "../ui/drawer";
import { navBarLinks } from "@/lib/variables";
import { usePathname } from "next/navigation";

export default function NavBarMobile({ triggerRef }) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (triggerRef.current) {
      triggerRef.current.click(); // Simulăm un click pe DrawerTrigger pentru a închide meniul
    }
  };

  return (
    <div>
      <DrawerHeader className="bg-black h-20 flex justify-between">
        <Link href="/">
          <Image
            src="/logo-black.webp"
            alt="Sun Pro Logo"
            priority
            width={80}
            height={80}
            className="cursor-pointer mt-2"
          />
        </Link>
        <DrawerClose>
          <AiOutlineClose
            className="text-white text-3xl cursor-pointer rounded-full"
            style={{ outline: "none" }}
          />
        </DrawerClose>
      </DrawerHeader>
      <nav className="flex flex-col items-center h-[calc(100svh-80px)] gap-5 justify-center">
        {navBarLinks.map((link, id) => (
          <Link
            key={id}
            href={link.path}
            className={`p-4 hover:bg-black rounded-lg hover:text-white transition-all duration-200 ${
              pathname === link.path ? "text-lg bg-black text-white" : ""
            }`}
            style={{ outline: "none" }} // Elimina outline
            onClick={handleLinkClick} // Închide drawer-ul la click
          >
            {link.name.toUpperCase()}
          </Link>
        ))}
      </nav>
    </div>
  );
}
