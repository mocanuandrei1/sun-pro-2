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
    <section className="grid grid-cols-2 bg-black text-white clip-bottom-left-rounded my-20">
      <div className="pr-10">
        <Image
          src="/Logo.png"
          alt="Renovation"
          width={500}
          height={500}
          className="mx-10 bg-black w-full h-full"
        />
      </div>
      <div className="p-8 mx-20 my-10">
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
        <div className="flex space-x-8 mb-8">
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
