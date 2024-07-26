import React from "react";
import { GoVerified } from "react-icons/go";

export default function WhyUsVision() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
      <p className="mb-8">
        Embrace holistic initiatives for the next generation of infrastructure.
        We aim to seamlessly integrate technology and sustainability to enhance
        urban living experiences.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Smart Cities</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Green Buildings</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Innovative Solutions</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Sustainable Development</p>
        </div>
      </div>
    </div>
  );
}
