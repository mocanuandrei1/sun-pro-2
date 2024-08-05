import React from "react";
import { GoVerified } from "react-icons/go";

export default function WhyUsVision() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Viziunea Noastră</h3>
      <p className="mb-8">
        Ne angajăm să oferim soluții excepționale pentru spațiile exterioare,
        îmbinând inovația și durabilitatea pentru a îmbunătăți calitatea vieții
        în aer liber. Obiectivul nostru este de a transforma fiecare spațiu
        într-un loc de relaxare și confort, cu un impact pozitiv asupra
        comunității.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Spații Comerciale</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Rezidențiale Verzi</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Soluții Inovatoare</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Dezvoltare Durabilă</p>
        </div>
      </div>
    </div>
  );
}
