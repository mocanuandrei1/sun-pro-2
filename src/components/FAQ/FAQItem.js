"use client";
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQItem({ question, answer, isActive, onClick }) {
  return (
    <>
      <div
        className="relative flex flex-row justify-between items-strech cursor-pointer rounded-lg border border-black"
        onClick={onClick}
      >
        <span className="text-black basis-5/6 sm:basis-11/12 p-3">
          {question}
        </span>
        <div className="basis-1/6 sm:basis-1/12 text-white flex items-center justify-center transition-colors duration-1000 rounded-r-lg bg-[#f68a09]">
          {isActive ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out rounded-lg ${
          isActive ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-gray-100 p-4 text-sm">{answer}</div>
      </div>
    </>
  );
}
