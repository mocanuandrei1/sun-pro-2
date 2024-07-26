"use client";
import Image from "next/image";
import { GrUserManager } from "react-icons/gr";
import { PiCertificate } from "react-icons/pi";
import { useState } from "react";

export default function AboutUs() {
  const [rotateIcon, setRotateIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setRotateIcon(icon);
  };

  const handleAnimationEnd = () => {
    setRotateIcon(null);
  };

  return (
    <div className="grid grid-cols-2 p-12">
      <div className="pr-10">
        <Image
          src="/Logo.png"
          alt="Renovation"
          width={500}
          height={500}
          className="mx-10 bg-black w-full h-full"
        />
      </div>
      <div className="mx-10">
        <h1 className="text-[#f68a09] font-bold mb-2">ABOUT US COMPANY</h1>
        <h2 className="text-3xl font-bold mb-4">
          We Are Always Think On Your Dream
        </h2>
        <p className="text-lg mb-6">
          Many modern construction companies focus on sustainable building
          practices, incorporating eco-friendly material energy-efficient
          systems and environmental conscious designs to reduce the
          environmental impact of their projects.
        </p>

        <div className="grid grid-cols-2">
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
                Quality And Expert Team Members
              </h3>
            </div>
            <p>
              Initial phase involving project conceptualization, design, and
              obtaining necessary.
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
                Certified & Awards winner
              </h3>
            </div>
            <p>
              Initial phase involving project conceptualization, design, and
              obtaining necessary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
