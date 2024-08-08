"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { LuCrown } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Button from "./custom ui/Button";

export default function Hero() {
  const images = ["/Hero1.jpg", "/Hero2.jpg", "/Hero3.jpg"];
  const texts = [
    "PROTEJEAZĂ SPAȚIUL EXTERIOR",
    "PROTEJEAZĂ SPAȚIUL EXTERIOR2",
    "PROTEJEAZĂ SPAȚIUL EXTERIOR3",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const intervalRef = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      changeImage(1);
    }, 8000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  const changeImage = (direction) => {
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 2000);
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
    startInterval();
  };

  const handleNextImage = () => {
    if (!isButtonDisabled) changeImage(1);
  };

  const handlePrevImage = () => {
    if (!isButtonDisabled) changeImage(-1);
  };

  return (
    <section className="relative lg:h-[800px] h-[700px] bg-black lg:px-20 overflow-hidden">
      <Image
        src={images[currentImageIndex]}
        alt="Hero Image"
        priority
        fill={true}
        quality={100}
        className="object-cover"
        key={currentImageIndex}
      />
      <div
        key={`content-${currentImageIndex}`}
        className="relative grid lg:grid-cols-2 grid-cols-1 items-center text-white h-full w-full text-center z-20"
      >
        <div className="absolute inset-0 bg-black opacity-60 w-full h-full lg:clip-hero lg:animate-slideInClipDesktop lg:w-[70%]"></div>
        <div className="col-start-2 text-left pl-6">
          <div className="flex items-center lg:text-lg text-sm text-[#f68a09] font-semibold space-y-2">
            <span className="animate-fade-in-down delay-[0.1s]">
              <LuCrown className="text-3xl pr-2 mt-1" />
            </span>
            <span className="animate-fade-in-down delay-[0.2s]">
              Personalizează
            </span>
            <hr className="animate-fade-in-down delay-[0.3s] w-5 border-t-2 border-[#f68a09] mx-1" />
            <span className="animate-fade-in-down delay-[0.4s]">
              Protejează
            </span>
            <hr className="animate-fade-in-down delay-[0.5s] w-5 border-t-2 border-[#f68a09] mx-1" />
            <span className="animate-fade-in-down delay-[0.6s]">Bucura-te</span>
          </div>
          <p className="lg:text-6xl text-3xl font-bold mt-4 animate-fade-in-left delay-700">
            <span>{texts[currentImageIndex]}</span>
          </p>
          <Button
            type="link"
            href="/servicii"
            customClass="animate-fade-in-up w-[205px] mt-8"
            text="VEZI SERVICIILE"
            mainColor="orange"
            secondColor="blue"
          />
        </div>
      </div>
      <div className="absolute lg:top-1/2 lg:right-4 bottom-4 lg:bottom-auto transform lg:-translate-y-1/2 w-full lg:w-auto flex justify-center lg:justify-end lg:flex-col lg:space-y-4 z-30">
        <button
          onClick={handlePrevImage}
          className={`text-white bg-black bg-opacity-50 rounded-2xl p-3 m-2 hover:bg-opacity-70 ${
            isButtonDisabled ? "cursor-not-allowed" : ""
          }`}
          disabled={isButtonDisabled}
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <button
          onClick={handleNextImage}
          className={`text-white bg-black bg-opacity-50 rounded-2xl p-3 m-2 hover:bg-opacity-70 ${
            isButtonDisabled ? "cursor-not-allowed" : ""
          }`}
          disabled={isButtonDisabled}
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </section>
  );
}
