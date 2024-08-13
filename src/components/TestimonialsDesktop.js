"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";

export default function TestimonialsDesktop({ slides }) {
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

  return (
    <div className="w-full max-w-7xl mx-auto py-16 relative">
      <p className="flex text-lg items-center justify-center text-[#f68a09] font-semibold mb-4">
        <LuCrown className="pr-2 text-3xl" />
        Testimoniale
      </p>
      <h2 className="text-3xl font-bold leading-relaxed mb-8 text-center">
        Ce spun clienții noștri
      </h2>

      <div className="relative">
        <div className="overflow-hidden mx-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / 3}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-none w-1/3 p-4">
                <div className="group h-full p-6 rounded-lg text-center border-2 border-[#f68a09] shadow-md shadow-[#f68a09] transition-all duration-1000 hover:border-[#0975F6] hover:shadow-[#0975F6]">
                  <h2 className="text-2xl font-bold text-[#f68a09] group-hover:text-[#0975F6] transition-colors duration-1000">
                    {slide.name}
                  </h2>
                  <h4 className="text-lg text-gray-600">{slide.role}</h4>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={20}
                        className="text-[#f68a09] transition-colors duration-300 group-hover:text-[#0975F6]"
                        style={{
                          transitionDelay: `${i * 100}ms`, // Creează un efect de tranziție de la stânga la dreapta
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-base">{slide.review}</p>
                </div>
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
