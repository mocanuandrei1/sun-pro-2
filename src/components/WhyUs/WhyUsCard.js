"use client";
import React, { useState } from "react";
import { GoVerified } from "react-icons/go";

const WhyUsCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    { title: "Despre Noi" },
    { title: "Abilitățile Noastre" },
    { title: "Viziunea Noastră" },
  ];

  const tabContents = [
    <div key="content-0">
      <h3 className="text-2xl font-bold mb-4">
        Lider în Soluții pentru Spații Exterioare!
      </h3>
      <p className="mb-8">
        Descoperiți excelența în protecția și personalizarea spațiilor
        exterioare. SunPro oferă soluții inovatoare și durabile pentru a
        transforma și proteja terasele și curțile dumneavoastră. Cu un focus pe
        calitate și funcționalitate, suntem partenerul ideal pentru orice
        proiect.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Copertine Comerciale</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Pergole Retractabile</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Sisteme de Închidere pentru Terase</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Rulouri Exterioare Adaptabile</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Prelate PVC Rezistente</p>
        </div>
      </div>
    </div>,
    <div key="content-1">
      <h3 className="text-2xl font-bold mb-4">Abilitățile Noastre</h3>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">
            Montaj Copertine și Pergole Retractabile
          </h4>
          <h4 className="font-bold">95%</h4>
        </div>
        <div className="relative h-2 bg-gray-300 rounded">
          <div className="absolute h-full bg-[#f68a09] rounded w-0 animate-renovation"></div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">
            Instalare Rulouri Exterioare și Prelate PVC
          </h4>
          <h4 className="font-bold">95%</h4>
        </div>
        <div className="relative h-2 bg-gray-300 rounded">
          <div className="absolute h-full bg-[#f68a09] rounded w-0 animate-design"></div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">Închideri Terase Profesionale</h4>
          <h4 className="font-bold">90%</h4>
        </div>
        <div className="relative h-2 bg-gray-300 rounded">
          <div className="absolute h-full bg-[#f68a09] rounded w-0 animate-experience"></div>
        </div>
      </div>
    </div>,
    <div key="content-2">
      <h3 className="text-2xl font-bold mb-4">Viziunea Noastră</h3>
      <p className="mb-8">
        Ne angajăm să oferim soluții excepționale pentru spațiile exterioare,
        îmbinând inovația și durabilitatea pentru a îmbunătăți calitatea vieții
        în aer liber. Obiectivul nostru este de a transforma fiecare spațiu
        într-un loc de relaxare și confort, cu un impact pozitiv asupra
        comunității.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Spații Comerciale</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Rezidențiale Verzi</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Soluții Inovatoare</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Dezvoltare Durabilă</p>
        </div>
      </div>
    </div>,
  ];

  return (
    <>
      <ul className="flex flex-col sm:flex-row gap-3 mb-8">
        {tabs.map((tab, index) => (
          <li key={index} className="flex flex-col">
            <button
              className={`py-2 px-8 clip-bottom-right ${
                activeIndex === index ? "bg-custom-orange" : "bg-gray-600"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      {tabContents.map((content, index) => (
        <div
          key={index}
          className={`overflow-hidden w-full flex flex-col gap-1 transition-max-height duration-500 ${
            activeIndex === index ? "max-h-screen" : "max-h-0"
          }`}
        >
          {content}
        </div>
      ))}
    </>
  );
};

export default WhyUsCard;
