"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { FaStar } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";

export default function TestimonialsMobile({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    containerRef.current.style.transition = "transform 0.5s ease-in-out";
    containerRef.current.style.transform = `translateX(-100%)`;

    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);

      // Rearanjăm slide-urile după ce animația s-a încheiat
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = "translateX(0)";
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(prevIndex);

    containerRef.current.style.transition = "none";
    containerRef.current.style.transform = "translateX(-100%)";

    requestAnimationFrame(() => {
      containerRef.current.style.transition = "transform 0.5s ease-in-out";
      containerRef.current.style.transform = "translateX(0)";
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="w-full mx-auto py-16 relative" {...swipeHandlers}>
      <p className="flex text-lg items-center justify-center text-[#f68a09] font-semibold mb-4">
        <LuCrown className="pr-2 text-3xl" />
        Testimoniale
      </p>
      <h2 className="text-3xl font-bold leading-relaxed mb-8 text-center">
        Ce spun clienții noștri
      </h2>

      <div className="relative">
        <div className="overflow-hidden mx-4">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: "translateX(0)",
            }}
          >
            {/* Includeți slide-ul curent și următorul slide în container */}
            {[
              slides[currentIndex],
              slides[(currentIndex + 1) % slides.length],
            ].map((slide, index) => (
              <div key={index} className="flex-none w-full p-4">
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
                          transitionDelay: `${i * 50}ms`,
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
      </div>

      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              if (isAnimating) return;
              if (index > currentIndex) {
                handleNext();
              } else if (index < currentIndex) {
                handlePrev();
              }
            }}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-[#f68a09]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
