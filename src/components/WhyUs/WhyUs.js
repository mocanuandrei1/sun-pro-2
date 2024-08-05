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
    <section className="bg-black text-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 max-w-screen-xl xl:mx-auto mx-10 my-28">
        <div className="lg:pr-10 order-2 lg:order-none">
          <Image
            src="/Hero1.jpg"
            alt="Renovation"
            width={1600}
            height={1200}
            className=" bg-black w-full h-full object-cove pb-10 sm:pb-0"
          />
        </div>
        <div className="lg:p-8  my-10">
          <p className="flex text-lg items-center justify-center md:justify-start text-[#f68a09] font-semibold grid-about-2">
            <LuCrown className="pr-2 text-3xl" />
            De Ce Să Alegi SunPro ?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-relaxed grid-about-3 mb-8 lg:mb-3 text-center lg:text-left">
            Descoperă Avantajele Soluțiilor Noastre Exterioare.
          </h2>
          <p className="mb-4">
            Serviciile noastre de montaj aduc un plus de funcționalitate și stil
            spațiilor tale exterioare. Ne concentrăm pe utilizarea materialelor
            de calitate superioară și pe practici durabile, asigurându-ne că
            fiecare proiect este executat la cele mai înalte standarde.
          </p>
          <div className="flex lg:space-x-8 space-x-4 mb-8">
            <button
              className={`py-2 px-8 clip-bottom-right ${
                activeTab === "skills" ? "bg-[#f68a09] " : "bg-gray-700 "
              }`}
              onClick={handleShowSkills}
            >
              Abilități
            </button>
            <button
              className={` py-2 px-8 clip-bottom-right ${
                activeTab === "mission" ? "bg-[#f68a09] " : "bg-gray-700 "
              }`}
              onClick={handleShowMission}
            >
              Misiune
            </button>
            <button
              className={` py-2 px-8 clip-bottom-right ${
                activeTab === "vision" ? "bg-[#f68a09] " : "bg-gray-700 "
              }`}
              onClick={handleShowVision}
            >
              Viziune
            </button>
          </div>
          {activeTab === "skills" && <WhyUsSkills />}
          {activeTab === "mission" && <WhyUsMission />}
          {activeTab === "vision" && <WhyUsVision />}
        </div>
      </div>
    </section>
  );
}
