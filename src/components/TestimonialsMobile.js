"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaStar } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";

export default function TestimonialsMobile({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <div className="w-full mx-auto py-16 relative" {...swipeHandlers}>
      <p className="flex text-lg items-center justify-center text-[#0975F6] font-semibold mb-4">
        <LuCrown className="pr-2 text-3xl" />
        Testimoniale
      </p>
      <h2 className="text-3xl font-bold leading-relaxed mb-8 text-center">
        Ce spun clienții noștri
      </h2>

      <div className="overflow-hidden mx-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-none w-full p-4">
              <div className="group h-full p-6 rounded-lg text-center border-2 border-[#0975F6] shadow-md shadow-[#0975F6] transition-all duration-300 group-hover:border-[#f68a09] group-hover:shadow-[#f68a09]">
                <h2 className="text-2xl font-bold text-[#0975F6] group-hover:text-[#f68a09] transition-colors duration-300">
                  {slide.name}
                </h2>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={20}
                      className="text-[#0975F6] transition-colors duration-300 group-hover:text-[#f68a09]"
                      style={{
                        transitionDelay: `${i * 50}ms`, // Creează un efect de tranziție de la stânga la dreapta
                      }}
                    />
                  ))}
                </div>
                <h4 className="text-lg text-gray-600 mb-3">{slide.role}</h4>
                <p className="text-gray-700 text-base">{slide.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-[#f68a09]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
