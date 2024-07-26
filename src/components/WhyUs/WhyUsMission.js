import React from "react";
import { GoVerified } from "react-icons/go";

export default function WhyUsMission() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">
        Leading Way In Building & Civil Constructions!
      </h3>
      <p className="mb-8">
        Dramatically foster compelling result before vertical platforms.
        Globally pursue client focused potentiality without global alignment.
        Dramatical maximize covalent data with world-class schemas.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Commercial Services</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Residential Services</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Industrial Services</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Construction Service</p>
        </div>
      </div>
    </div>
  );
}
