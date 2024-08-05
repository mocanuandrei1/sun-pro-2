"use client";
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQItem({ question, answer, isActive, onClick }) {
  return (
    <div className="w-full h-auto">
      <div
        className="relative flex flex-row justify-between items-center pl-3 p-3 cursor-pointer rounded-lg border border-black"
        onClick={onClick}
      >
        <span className="text-black pr-8">{question}</span>
        <div className="h-full w-12 absolute right-0 text-white flex items-center justify-center transition-colors duration-1000 rounded-r-lg bg-[#f68a09]">
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
    </div>
  );
}
