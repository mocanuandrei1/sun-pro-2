import Image from "next/image";
import React from "react";
import { LuCrown } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-black">
      <Image
        src="/HeroPhoto.png"
        alt="Loading..."
        layout="fill"
        className="opacity-30"
      />
      <div className="grid grid-cols-2 text-center text-white z-10">
        <div></div>
        <div className="col-span-1 text-left ">
          <p className="flex text-lg items-center text-[#f68a09] font-semibold">
            <LuCrown className="pr-2 text-3xl" />
            Renovate - Refresh - Rejoice
          </p>
          <p className="text-6xl  font-bold mt-4">PROFESSIONAL RENOVATION OF</p>
          <p className="text-6xl  font-bold italic">YOUR HOME</p>
          <button className="mt-8 px-6 py-3 bg-[#f68a09] text-white  rounded-sm clip-bottom-right ">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
}
