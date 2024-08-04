import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { LuCrown } from "react-icons/lu";

export default function CTA() {
  return (
    <section className="flex justify-center relative h-80 bg-black text-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center h-full lg:max-w-7xl lg:w-full lg:mx-0 mx-10">
        <div className="absolute inset-0">
          <Image
            src="/Hero1.jpg"
            alt="Loading..."
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="z-10">
          <h2 className="flex justify-center lg:justify-start lg:text-xl text-lg items-center text-[#f68a09] pb-4 font-semibold">
            <LuCrown className="pr-2 text-3xl" />
            <span>Get Consultation</span>
          </h2>
          <h1 className="lg:text-5xl text-3xl font-bold lg:text-start text-center">
            <span>Get A Free Consultation</span> <br />
            <span>Contact Us</span> <span className="text-[#f68a09]">!</span>
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col lg:space-x-6 space-y-2 lg:space-y-0 items-center justify-center">
          <button className="relative lg:w-[40%] w-[60%] py-4 bg-[#f68a09] text-white hover:text-black rounded-sm clip-bottom-right overflow-hidden group">
            <div className="absolute inset-0">
              <div className="bg-white w-full h-1/2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="bg-white w-full h-1/2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </div>
            <div className="flex items-center relative z-10 justify-center">
              <span className="">GET CONSULTATION</span>
              <FiArrowUpRight className="pl-2 text-2xl transition-transform duration-500 group-hover:rotate-45" />
            </div>
          </button>
          <button className="relative lg:w-[30%] w-[60%] py-4 bg-white text-black hover:text-white rounded-sm  clip-bottom-right overflow-hidden group">
            <div className="absolute inset-0">
              <div className="bg-[#f68a09] w-full h-1/2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="bg-[#f68a09] w-full h-1/2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </div>
            <div className="flex items-center relative z-10 justify-center">
              <span className="">WORK WITH US</span>
              <FiArrowUpRight className="pl-2 text-2xl transition-transform duration-500 group-hover:rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
