import Image from "next/image";
import React from "react";
import { LuCrown } from "react-icons/lu";

export default function About() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-start bg-white py-28 lg:px-20 px-6">
      <div className="w-full h-full lg:pr-10 order-4 lg:order-none">
        <Image
          src="/Logo.png"
          alt="Renovation"
          width={500}
          height={500}
          className="mr-10 mt-4 lg:mt-0 bg-black object-cover h-full w-full"
        />
      </div>
      <div className="w-full order-3 lg:order-none">
        <p className="flex text-lg items-center text-[#f68a09] pb-4 font-semibold">
          <LuCrown className="pr-2 text-3xl" />
          About Renovation Company
        </p>
        <h1 className="text-4xl font-bold mb-8">
          Our Dream Home Awaits Lets Renovate Today.
        </h1>
        <p className="text-md mb-8">
          BIM is a digital representation of a buildings physical and functional
          characteristics. It enhances collaboration among stakeholders,
          improves project visualization, and helps identify potential issues
          before construction begins.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="p-6 lg:mr-3 bg-gray-100 order-2 lg:order-none">
            <div className="text-2xl font-medium flex mb-3">
              <p className="text-[#f68a09] pr-2">25</p>
              <h2> Years Experience</h2>
            </div>
            <p>
              Construction services bring expertise and experience to the table,
              ensuring that your project is managed.
            </p>
          </div>
          <div className="p-6 lg:ml-3 bg-gray-100 order-3 lg:order-none">
            <div className="text-2xl font-medium flex mb-3">
              <p className="text-[#f68a09] pr-2">60</p>
              <h2> Expert Technicians</h2>
            </div>
            <p>
              The construction industry is a multifaceted sector involving the
              planning, development, and realization of various projects.
            </p>
          </div>
        </div>
        <button className="mt-8 px-6 py-3 bg-[#f68a09] text-white rounded-sm clip-bottom-right hidden lg:block">
          More about us
        </button>
      </div>
      <button className="mt-8 px-6 py-3 bg-[#f68a09] text-white rounded-sm clip-bottom-right lg:hidden order-5">
        More about us
      </button>
    </section>
  );
}
