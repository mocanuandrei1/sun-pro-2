import React from "react";
import { GoVerified } from "react-icons/go";

export default function WhyUsMission() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">
        Lider în construcții civile și de clădiri!
      </h3>
      <p className="mb-8">
        Promovați dramatic rezultate convingătoare înainte de platformele
        verticale. Urmăriți global potențialitatea axată pe client fără aliniere
        globală. Maximizați dramatic datele covalente cu scheme de clasă
        mondială.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Servicii comerciale</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Servicii rezidențiale</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Servicii industriale</p>
        </div>
        <div className="flex items-center space-x-2">
          <GoVerified className="text-[#f68a09] text-lg" />
          <p>Servicii construcții</p>
        </div>
      </div>
    </div>
  );
}
