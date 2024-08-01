import React from "react";
import NavBarMobile from "../NavBar/NavBarMobile";
import Image from "next/image";
import HeaderCall from "./HeaderCall";
import HeaderEmail from "./HeaderEmail";
import HeaderLocation from "./HeaderLocation";
import { AiOutlineMenu } from "react-icons/ai";
import NavBarDesktop from "../NavBar/NavBarDesktop";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Header() {
  return (
    <header className="md:relative sticky top-0 left-0 z-50 bg-black md:bg-gradient-to-r from-black via-black to-white to-70% ">
      <Drawer direction="right">
        <div className="relative max-w-screen-xl xl:mx-auto md:mx-10 flex justify-between items-center md:items-start h-20 md:h-28">
          <div className="basis-1/2 pl-4 md:pl-0 md:basis-1/4">
            <Image
              src="/logo2.png"
              alt="Kotar Logo"
              width={80}
              height={80}
              className="cursor-pointer h-20 "
            />
          </div>
          <div className="basis-3/4 hidden md:flex bg-white items-start justify-around flex-nowrap h-full md:pt-4">
            <HeaderCall />
            <HeaderEmail />
            <HeaderLocation />
          </div>
          <div className="md:hidden pr-4 md:pr-0 flex items-center justify-end basis-1/2">
            <DrawerTrigger>
              <AiOutlineMenu className="text-white text-3xl cursor-pointer" />
            </DrawerTrigger>
          </div>
          <NavBarDesktop />
        </div>
        <DrawerContent>
          <NavBarMobile />
        </DrawerContent>
      </Drawer>
    </header>
  );
}
