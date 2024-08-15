"use client";
import React from "react";
import CountUp from "react-countup";

export default function AboutStatistics() {
  return (
    <div className="bg-[#f68a09] text-white py-8 ">
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 lg:gap-10 lg:mx-auto mx-10 max-w-7xl ">
        <div className="text-center">
          <CountUp
            end={158}
            duration={3}
            suffix="+"
            className="text-4xl font-bold"
          />
          <p className="mt-2 text-lg">Copertine Instalate</p>
        </div>
        <div className="text-center">
          <CountUp
            end={65}
            duration={3}
            suffix="+"
            className="text-4xl font-bold"
          />
          <p className="mt-2 text-lg">Pergole Montate</p>
        </div>
        <div className="text-center">
          <CountUp
            end={42}
            duration={3}
            suffix="+"
            className="text-4xl font-bold"
          />
          <p className="mt-2 text-lg">Terase Închise</p>
        </div>
        <div className="text-center">
          <CountUp
            end={20}
            duration={3}
            suffix="+"
            className="text-4xl font-bold"
          />
          <p className="mt-2 text-lg">Prelate PVC Instalate</p>
        </div>
        <div className="text-center lg:block hidden">
          <CountUp
            end={16}
            duration={3}
            suffix="+"
            className="text-4xl font-bold"
          />
          <p className="mt-2 text-lg">Rulouri Exterioare Montate</p>
        </div>
      </div>
    </div>
  );
}
