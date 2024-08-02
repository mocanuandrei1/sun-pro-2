import React from "react";
import { GoVerified } from "react-icons/go";

export default function WhyUsMission() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">
        Lider în Soluții pentru Spații Exterioare!
      </h3>
      <p className="mb-8">
        Descoperiți excelența în protecția și personalizarea spațiilor
        exterioare. SunPro oferă soluții inovatoare și durabile pentru a
        transforma și proteja terasele și curțile dumneavoastră. Cu un focus pe
        calitate și funcționalitate, suntem partenerul ideal pentru orice
        proiect.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Copertine Comerciale</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Pergole Retractabile</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Sisteme de Închidere pentru Terase</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Rulouri Exterioare Adaptabile</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Prelate PVC Rezistente</p>
        </div>
      </div>
    </div>
  );
}
