import Image from "next/image";
import { LuCrown } from "react-icons/lu";

export default function CTA() {
  return (
    <section className="relative flex lg:flex-row lg:justify-between lg:text-start flex-col items-center text-center lg:px-20 px-6 justify-center w-full h-80 bg-black text-white ">
      <Image
        src="/Logo.png"
        alt="Loading..."
        layout="fill"
        objectFit="cover"
        className="opacity-30"
      />
      <div className="z-10">
        <h2 className="flex lg:justify-start text-lg items-center text-[#f68a09] pb-4 font-semibold justify-center">
          <LuCrown className="pr-2 text-3xl" />
          <span>Get Consultation</span>
        </h2>
        <h1 className="lg:text-5xl text-3xl font-bold">
          <span>Get A Free Consultation</span> <br />
          <span>Contact Us</span> <span className="text-[#f68a09]">!</span>
        </h1>
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
