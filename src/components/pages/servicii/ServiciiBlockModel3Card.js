"use client";
import React, { useState } from "react";

const ServiciiBlockModel3Card = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <ul className="flex flex-col sm:flex-row gap-3 mb-8">
        {cards.map((card, index) => (
          <li key={index} className="flex flex-col">
            <button
              className={`py-2 px-8 clip-bottom-right ${
                activeIndex === index ? "bg-custom-orange" : "bg-gray-600"
              }`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {card.title}
            </button>
          </li>
        ))}
      </ul>
      {activeIndex !== null && (
        <div
          className={`overflow-hidden w-full flex flex-col gap-1 transition-max-height duration-500 ${
            activeIndex !== null ? "max-h-screen" : "max-h-0"
          }`}
        >
          <p className="font-bold">{cards[activeIndex].secondTitle}</p>
          <p className="mb-5">{cards[activeIndex].secondTitleText}</p>
          <p className="font-bold">{cards[activeIndex].thirdTitle}</p>
          <p>{cards[activeIndex].thirdTitleText}</p>
        </div>
      )}
    </>
  );
};

export default ServiciiBlockModel3Card;
