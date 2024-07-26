import React from "react";

export default function WhyUsSkills() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Our Skills</h3>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">Renovation</h4>
          <h4 className="font-bold">80%</h4>
        </div>
        <div className="relative h-2 bg-gray-300 rounded">
          <div className="absolute h-full bg-[#f68a09] rounded w-0 animate-renovation"></div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">Design</h4>
          <h4 className="font-bold">95%</h4>
        </div>
        <div className="relative h-2 bg-gray-300 rounded">
          <div className="absolute h-full bg-[#f68a09] rounded w-0 animate-design"></div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">Experience</h4>
          <h4 className="font-bold">70%</h4>
        </div>
        <div className="relative h-2 bg-gray-300 rounded">
          <div className="absolute h-full bg-[#f68a09] rounded w-0 animate-experience"></div>
        </div>
      </div>
    </div>
  );
}
