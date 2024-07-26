import React from "react";
import Image from "next/image";
import { LuCrown } from "react-icons/lu";

export default function CTA() {
  return (
    <section className="relative w-full h-80 bg-black text-white flex items-center justify-between px-20">
      <Image
        src="/Logo.png"
        alt="Loading..."
        layout="fill"
        objectFit="cover"
        className="opacity-30"
      />
      <div className="z-10">
        <p className="flex text-lg items-center text-[#f68a09] pb-4 font-semibold">
          <LuCrown className="pr-2 text-3xl" />
          Get Consultation
        </p>
        <h2 className="text-5xl font-bold">
          Get A Free Consultation <br />
          Contact Us <span className="text-[#f68a09]">!</span>
        </h2>
      </div>

      <div className="z-10 flex space-x-4">
        <button className="mt-8 px-6 py-3 bg-[#f68a09] text-white  rounded-sm clip-bottom-right ">
          GET CONSULTATIONS
        </button>
        <button className="mt-8 px-6 py-3 bg-white text-black  rounded-sm clip-bottom-right ">
          WORK WITH US
        </button>
      </div>
    </section>
  );
}
