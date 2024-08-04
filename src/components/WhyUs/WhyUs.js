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
    <section className="bg-black text-white lg:clip-bottom-left-rounded my-20 lg:px-0 px-6 pt-10 lg:pt-0">
      <div className="grid lg:grid-cols-2 grid-cols-1 max-w-7xl w-full mx-auto">
        <div className="lg:pr-10 order-2 lg:order-none py-10 lg:py-0">
          <Image
            src="/Hero1.jpg"
            alt="Renovation"
            width={500}
            height={500}
            className=" bg-black w-full h-full"
          />
        </div>
        <div className="lg:py-8  text-center">
          <p className="flex text-lg items-center text-[#f68a09] pb-4 font-semibold justify-center">
            <LuCrown className="pr-2 text-3xl" />
            De ce să ne alegeți pe noi?
          </p>
          <h1 className="lg:text-4xl text-2xl  font-bold mb-4">
            Descoperiți avantajele renovării noastre.
          </h1>
          <p className="mb-4">
            Multe servicii de construcție sunt pricepute în a încorpora practici
            sustenabile și ecologice, contribuind la responsabilitatea de mediu
            și reducând potențial costurile operaționale.
          </p>
          <div className="flex lg:flex-row flex-col lg:space-x-8 space-y-4 lg:space-y-0 mb-8 lg:text-sm text-lg text-center">
            <button
              className={`lg:w-full py-4 px-8 clip-bottom-right ${
                activeTab === "skills" ? "bg-[#f68a09] " : "bg-gray-700 "
              }`}
              onClick={handleShowSkills}
            >
              <span>Abilitățile noastre</span>
            </button>
            <button
              className={`lg:w-full py-4 px-8 clip-bottom-right ${
                activeTab === "mission" ? "bg-[#f68a09] " : "bg-gray-700 "
              }`}
              onClick={handleShowMission}
            >
              Misiunea noastră
            </button>
            <button
              className={`lg:w-full py-4 px-8 clip-bottom-right ${
                activeTab === "vision" ? "bg-[#f68a09] " : "bg-gray-700 "
              }`}
              onClick={handleShowVision}
            >
              Viziunea noastră
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
