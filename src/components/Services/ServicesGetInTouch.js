"use client";
import Image from "next/image";
import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";
import Select from "react-select";

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
    <section className="bg-white p-10">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-[#f68a09] font-bold mb-4">GET IN TOUCH</h2>
          <h1 className="text-4xl font-bold mb-6">
            Have An Upcoming Projects? Lets Talk to Now!
          </h1>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute flex top-4 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute flex top-4 left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaPhone className="absolute flex top-4 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
                />
              </div>
              <Select
                options={options}
                styles={customStyles}
                placeholder="Select Subject"
              />
            </div>
            <div className="relative">
              <FaEdit className="absolute flex top-4 left-3 text-gray-400" />
              <textarea
                placeholder="Your Message"
                className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-8 px-6 py-3 bg-[#f68a09] text-white  rounded-sm clip-bottom-right "
            >
              SEND MESSAGE
            </button>
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
