"use client";
import Image from "next/image";
import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";
import Select from "react-select";
import Button from "../custom ui/Button";
import { LuCrown } from "react-icons/lu";

export default function ServicesGetInTouch() {
  const options = [
    { label: "Construction" },
    { label: "Real Estate" },
    { label: "Industry" },
    { label: "Architect" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#f68a09" : "white",
      color: state.isFocused ? "white" : "black",
      cursor: "pointer",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#F3F4F6",
      borderColor: state.isFocused ? "black" : "#E5E7EB",
      borderWidth: "2px",
      padding: "6px",
      boxShadow: state.isFocused ? "0 0 0 0px black" : "none",
      "&:hover": {
        borderColor: "black",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "gray",
    }),
  };

  return (
    <section className="bg-white pt-20 max-w-7xl lg:mx-auto w-full px-10 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="flex text-lg items-center text-[#f68a09] font-semibold grid-about-2 mb-6">
            <LuCrown className="pr-2 text-3xl" />
            Intram in legatura
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-relaxed grid-about-3 mb-8 lg:mb-4 text-center lg:text-left">
            Ai un proiect viitor? Trimite-ne un mesaj acum!
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute flex top-4 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Numele tau"
                  className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute flex top-4 left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Adresa de email"
                  className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaPhone className="absolute flex top-4 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Numarul tau de telefon"
                  className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
                />
              </div>
              <Select
                options={options}
                styles={customStyles}
                placeholder="Selecteaza subiectul"
              />
            </div>
            <div className="relative">
              <FaEdit className="absolute flex top-4 left-3 text-gray-400" />
              <textarea
                placeholder="Mesajul tau"
                className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
              ></textarea>
            </div>
            <Button
              type="link"
              href="despre-noi"
              text="Trimite Mesajul"
              customClass="mt-10 lg:mt-4 w-full sm:w-[290px] grid-about-6 "
            />
          </form>
        </div>
        <div className="bg-black">
          <Image
            src="/Logo.png"
            alt="Construction Worker"
            width={500}
            height={500}
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
}
