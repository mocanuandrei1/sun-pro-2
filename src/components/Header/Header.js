"use client";
import React, { useRef } from "react";
import NavBarMobile from "../NavBar/NavBarMobile";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import NavBarDesktop from "../NavBar/NavBarDesktop";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { companyData } from "@/lib/variables";
import HeaderIcon from "./HeaderIcon";
import Link from "next/link";

export default function Header() {
  const triggerRef = useRef(null);

  return (
    <header className="md:relative sticky top-0 left-0 z-50 bg-black md:bg-gradient-to-r from-black via-black to-white to-70% ">
      <Drawer direction="right">
        <div className="relative max-w-screen-xl xl:mx-auto md:mx-10 flex justify-between items-center md:items-start h-20 md:h-28">
          <div className="basis-1/2 pl-4 md:pl-0 md:basis-1/4">
            <Link href="/">
              <Image
                src="/logo-black.webp"
                alt="Sun Pro Logo"
                priority
                width={80}
                height={80}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="basis-3/4 hidden md:flex bg-white items-start justify-around flex-nowrap h-full md:pt-4">
            <HeaderIcon
              phone={companyData.phone}
              text="Telefon:"
              icon="phone"
            />
            <HeaderIcon email={companyData.email} text="E-mail:" icon="email" />
            <HeaderIcon
              customCss="lg:flex hidden"
              location={companyData.location}
              text="Locatie:"
              icon="location"
            />
          </div>
          <div className="md:hidden pr-4 md:pr-0 flex items-center justify-end basis-1/2">
            <DrawerTrigger ref={triggerRef}>
              <AiOutlineMenu
                className="text-white text-3xl cursor-pointer"
                style={{ outline: "none" }}
              />
            </DrawerTrigger>
          </div>
          <NavBarDesktop />
        </div>
        <DrawerContent>
          <NavBarMobile triggerRef={triggerRef} />
        </DrawerContent>
      </Drawer>
    </header>
  );
}
