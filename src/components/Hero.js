import Image from "next/image";
import React from "react";
import { LuCrown } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="relative h-screen bg-black px-6 lg:px-20">
      <Image
        src="/HeroPhoto.png"
        alt="Loading..."
        layout="fill"
        objectFit="cover"
        className="opacity-30"
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center text-white h-full w-full text-center">
        <div className="col-start-2">
          <p className="flex text-lg items-center text-[#f68a09] font-semibold justify-center">
            <LuCrown className="pr-2 text-3xl" />
            <span>Personalizează - Protejează - Bucura-te</span>
          </p>
          <p className="lg:text-6xl text-3xl font-bold mt-4">
            <span>PROTEJEAZĂ SPAȚIUL EXTERIOR</span>
            <span>PROTEJEAZĂ SPAȚIUL EXTERIOR</span>
          </p>

          <button className="mt-8 px-6 py-3 bg-[#f68a09] text-white  rounded-sm clip-bottom-right ">
            <span>DISCOVER MORE</span>
          </button>
        </div>
      </div>
    </section>
  );
}
