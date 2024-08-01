"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LuCrown } from "react-icons/lu";
import WhyUsSkills from "./WhyUsSkills";
import WhyUsMission from "./WhyUsMission";
import WhyUsVision from "./WhyUsVision";

export default function WhyUs() {
  const [activeTab, setActiveTab] = useState("skills");

  const handleShowSkills = () => {
    setActiveTab("skills");
  };

  const handleShowMission = () => {
    setActiveTab("mission");
  };

  const handleShowVision = () => {
    setActiveTab("vision");
  };

  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 bg-black text-white lg:clip-bottom-left-rounded my-20 lg:px-20 px-6">
      <div className="lg:pr-10 order-2 lg:order-none">
        <Image
          src="/Logo.png"
          alt="Renovation"
          width={500}
          height={500}
          className=" bg-black w-full h-full"
        />
      </div>
      <div className="lg:p-8  my-10">
        <p className="flex text-lg items-center text-[#f68a09] pb-4 font-semibold">
          <LuCrown className="pr-2 text-3xl" />
          Why Choose Us Our Renovation Company
        </p>
        <h1 className="text-4xl font-bold mb-4">
          Discover The Advantages Of Our Renovation.
        </h1>
        <p className="mb-4">
          Many construction services are adept at incorporating sustainable and
          eco-friendly practices, contributing to environmental responsibility
          and potentially reducing operational costs.
        </p>
        <div className="flex lg:space-x-8 space-x-4 mb-8">
          <button
            className={`py-2 px-8 clip-bottom-right ${
              activeTab === "skills" ? "bg-[#f68a09] " : "bg-gray-700 "
            }`}
            onClick={handleShowSkills}
          >
            Our Skills
          </button>
          <button
            className={` py-2 px-8 clip-bottom-right ${
              activeTab === "mission" ? "bg-[#f68a09] " : "bg-gray-700 "
            }`}
            onClick={handleShowMission}
          >
            Our Mission
          </button>
          <button
            className={` py-2 px-8 clip-bottom-right ${
              activeTab === "vision" ? "bg-[#f68a09] " : "bg-gray-700 "
            }`}
            onClick={handleShowVision}
          >
            Our Vision
          </button>
        </div>
        {activeTab === "skills" && <WhyUsSkills />}
        {activeTab === "mission" && <WhyUsMission />}
        {activeTab === "vision" && <WhyUsVision />}
      </div>
    </section>
  );
}
