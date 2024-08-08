"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ServiciiBlockModel2Card = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li>
      <div
        className="relative flex flex-row justify-between items-strech cursor-pointer rounded-lg border border-black"
        onClick={() => setIsActive(!isActive)}
      >
        <span className="text-black basis-5/6 sm:basis-11/12 p-3">{title}</span>
        <div className="basis-1/6 sm:basis-1/12 text-white flex items-center justify-center transition-colors duration-1000 rounded-r-lg bg-[#f68a09]">
          {isActive ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      <p
        className={`overflow-hidden transition-[max-height] m-2 duration-500 ease-in-out rounded-lg ${
          isActive ? "max-h-screen" : "max-h-0"
        }`}
      >
        {description}
      </p>
    </li>
  );
};

export default ServiciiBlockModel2Card;
