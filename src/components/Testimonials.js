"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";

const slides = [
  {
    name: "Angelina Rose",
    role: "Fondator și CEO",
    review: "Vizualizați obiectiv tehnologia fără erori pentru alinierea B2B.",
  },
  {
    name: "Ion Popescu",
    role: "Director de Marketing",
    review:
      "Valorifică monoton o gamă extinsă de modele prin colaborare eficientă.",
  },
  {
    name: "Maria Ionescu",
    role: "Dezvoltator Principal",
    review:
      "Inovați eficient resursele de la un capăt la altul cu arhitecturi cross-platform.",
  },
  {
    name: "Angelina Rose",
    role: "Fondator și CEO",
    review: "Vizualizați obiectiv tehnologia fără erori pentru alinierea B2B.",
  },
  {
    name: "Ion Popescu",
    role: "Director de Marketing",
    review:
      "Valorifică monoton o gamă extinsă de modele prin colaborare eficientă.",
  },
  {
    name: "Maria Ionescu",
    role: "Dezvoltator Principal",
    review:
      "Inovați eficient resursele de la un capăt la altul cu arhitecturi cross-platform.",
  },
  {
    name: "Angelina Rose",
    role: "Fondator și CEO",
    review: "Vizualizați obiectiv tehnologia fără erori pentru alinierea B2B.",
  },
  {
    name: "Ion Popescu",
    role: "Director de Marketing",
    review:
      "Valorifică monoton o gamă extinsă de modele prin colaborare eficientă.",
  },
  {
    name: "Maria Ionescu",
    role: "Dezvoltator Principal",
    review:
      "Inovați eficient resursele de la un capăt la altul cu arhitecturi cross-platform.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Definim lățimea fiecărui slide (fără margine) și marginea
  const slideWidth = 362.666666667; // Lățimea slide-ului fără margine
  const margin = 16; // mx-4 echivalează cu 1rem (16px) pe fiecare parte
  const totalSlideWidth = slideWidth + margin * 2; // Lățimea totală a slide-ului inclusiv marginile

  return (
    <div className="w-full max-w-7xl mx-auto py-80  relative">
      <p className="flex text-lg items-center justify-center text-[#f68a09] font-semibold mb-4">
        <LuCrown className="pr-2 text-3xl" />
        Testimoniale
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold leading-relaxed mb-8 lg:mb-4 text-center">
        Ce spun clienții noștri
      </h2>

      <div className="relative">
        <div className="overflow-hidden mx-12">
          <div
            className="flex transition-transform duration-500 ease-in-out "
            style={{
              transform: `translateX(-${currentIndex * totalSlideWidth}px)`,
              width: `${totalSlideWidth * slides.length}px`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-[362.666666667px] m-4 p-6  rounded-lg text-center border-2 border-[#f68a09] hover:border-[#0975F6] shadow-md shadow-[#f68a09] hover:shadow-[#0975F6] text-[#f68a09] hover:text-[#0975F6]"
              >
                <h2 className="text-2xl font-bold mb-1">{slide.name}</h2>
                <div className="flex justify-center">
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                </div>
                <h4 className="text-lg text-gray-600 mb-3">{slide.role}</h4>
                <p className="text-gray-700 text-base">{slide.review}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-3 rounded-full bg-[#f68a09] hover:bg-[#0975F6]"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-3 rounded-full bg-[#f68a09] hover:bg-[#0975F6]"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
