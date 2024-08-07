import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({ type, href, customClass, text, mainColor, secondColor }) => {
  const colorMap = {
    blue: "#0975F6",
    orange: "#f68a09",
    black: "#000000",
  };

  mainColor = colorMap[mainColor] || mainColor;
  secondColor = colorMap[secondColor] || secondColor;

  if (type === "button") {
    return (
      <button
        className={`relative mt-8 px-6 py-3 text-white hover:text-black rounded-sm animate-fade-in-up clip-bottom-right overflow-hidden group`}
        style={{ backgroundColor: mainColor }}
      >
        <div className="absolute inset-0">
          <div
            className="w-full h-1/2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
            style={{ backgroundColor: secondColor }}
          ></div>
          <div
            className="w-full h-1/2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"
            style={{ backgroundColor: secondColor }}
          ></div>
        </div>
        <div className="flex items-center relative z-10">
          <span>DISCOVER MORE</span>
          <FiArrowUpRight className="pl-2 text-2xl transition-transform duration-500 group-hover:rotate-45" />
        </div>
      </button>
    );
  } else if (type === "link") {
    return (
      <Link
        href={href}
        className={
          `relative px-6 py-3 flex items-center justify-center text-white rounded-sm clip-bottom-right group ` +
          customClass
        }
        style={{ backgroundColor: mainColor }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="h-1/2 transform -translate-x-[110%] group-hover:-translate-x-0 transition-transform duration-500"
            style={{ backgroundColor: secondColor }}
          ></div>
          <div
            className="h-1/2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"
            style={{ backgroundColor: secondColor }}
          ></div>
        </div>
        <div className="flex items-center relative z-10">
          <span>{text}</span>
          <FiArrowUpRight className="pl-2 text-2xl transition-transform duration-500 group-hover:rotate-45" />
        </div>
      </Link>
    );
  }
};

export default Button;
