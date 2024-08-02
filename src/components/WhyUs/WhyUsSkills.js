import React from "react";

export default function WhyUsSkills() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Abilitățile Noastre</h3>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">
            Montaj Copertine și Pergole Retractabile
          </h4>
          <h4 className="font-bold">95%</h4>
        </div>
        <div className="relative h-2 bg-gray-300 rounded">
          <div className="absolute h-full bg-[#f68a09] rounded w-0 animate-renovation"></div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">
            Instalare Rulouri Exterioare și Prelate PVC
          </h4>
          <h4 className="font-bold">95%</h4>
        </div>
        <div className="relative h-2 bg-gray-300 rounded">
          <div className="absolute h-full bg-[#f68a09] rounded w-0 animate-design"></div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">Închideri Terase Profesionale</h4>
          <h4 className="font-bold">90%</h4>
        </div>
        <div className="relative h-2 bg-gray-300 rounded">
          <div className="absolute h-full bg-[#f68a09] rounded w-0 animate-experience"></div>
        </div>
      </div>
    </div>
  );
}
