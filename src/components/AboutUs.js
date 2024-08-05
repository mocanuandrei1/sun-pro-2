"use client";
import Image from "next/image";
import { GrUserManager } from "react-icons/gr";
import { PiCertificate } from "react-icons/pi";
import { useState } from "react";
import { LuCrown } from "react-icons/lu";

export default function AboutUs() {
  const [rotateIcon, setRotateIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setRotateIcon(icon);
  };

  const handleAnimationEnd = () => {
    setRotateIcon(null);
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 py-20 max-w-7xl mx-auto">
      <div className="pr-10">
        <Image
          src="/Logo.png"
          alt="Renovation"
          width={500}
          height={500}
          className="mr-10 bg-black w-full h-full"
        />
      </div>
      <div>
        <p className="flex text-lg items-center justify-center md:justify-start text-[#f68a09] font-semibold grid-about-2 mb-4">
          <LuCrown className="pr-2 text-3xl" />
          Despre compania noastra
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold leading-relaxed grid-about-3 mb-8 lg:mb-4 text-center lg:text-left ">
          Ne gandim mereu la visul tau
        </h2>
        <p className="text-lg mb-12">
          Multe companii de construcții moderne se concentrează pe practici de
          construcție durabile, încorporând sisteme ecologice eficiente din
          punct de vedere energetic și design conștient de mediu pentru a reduce
          impactul proiectelor lor asupra mediului.
        </p>

        <div className="grid grid-cols-2 justify-items-end">
          <div className="bg-gray-100 mr-4 p-4">
            <div className="flex items-center mb-4">
              <div
                className={`text-5xl text-[#f68a09] ${
                  rotateIcon === "userManager" ? "rotate-y" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("userManager")}
                onAnimationEnd={handleAnimationEnd}
              >
                <GrUserManager />
              </div>
              <h3 className="text-xl font-semibold ml-2">
                Membrii echipei de calitate și experți
              </h3>
            </div>
            <p>
              Etapa inițială care implică conceptualizarea proiectului,
              proiectarea și obținerea necesară.
            </p>
          </div>

          <div className="bg-gray-100 ml-4 p-4">
            <div className="flex items-center mb-4">
              <div
                className={`text-5xl text-[#f68a09] ${
                  rotateIcon === "certificate" ? "rotate-y" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("certificate")}
                onAnimationEnd={handleAnimationEnd}
              >
                <PiCertificate />
              </div>
              <h3 className="text-xl font-semibold ml-2">
                Leaderi de piata in domeniu
              </h3>
            </div>
            <p>
              Faza inițială care implică conceptualizarea proiectului,
              proiectarea și obtinerea necesara.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
