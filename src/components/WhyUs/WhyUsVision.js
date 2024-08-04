import React from "react";
import { GoVerified } from "react-icons/go";

export default function WhyUsVision() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Viziunea Noastră</h3>
      <p className="mb-8">
        Îmbrățișați inițiativele holistice pentru următoarea generație de
        infrastructură. Ne propunem să integrăm perfect tehnologia și
        sustenabilitatea pentru a îmbunătăți experiențele de viață urbană.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Orașe inteligente</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Clădiri verzi</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Soluții inovatoare</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Dezvoltare durabilă</p>
        </div>
      </div>
    </div>
  );
}
