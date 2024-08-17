"use client";
import React from "react";
import CountUp from "react-countup";

export default function AboutStatistics() {
  return (
    <div className="bg-black py-8 ">
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 lg:gap-10 lg:mx-auto mx-10 max-w-7xl ">
        <div className="text-left">
          <CountUp
            start={0}
            end={158}
            duration={3}
            suffix="+"
            className="text-4xl font-bold text-white"
          />
          <p className="mt-2 text-lg text-custom-orange">Copertine Instalate</p>
        </div>
        <div className="text-left">
          <CountUp
            end={65}
            duration={3}
            suffix="+"
            className="text-4xl font-bold text-white"
          />
          <p className="mt-2 text-lg text-custom-orange">Pergole Montate</p>
        </div>
        <div className="text-left">
          <CountUp
            end={42}
            duration={3}
            suffix="+"
            className="text-4xl font-bold text-white"
          />
          <p className="mt-2 text-lg text-custom-orange">Terase Închise</p>
        </div>
        <div className="text-left">
          <CountUp
            end={20}
            duration={3}
            suffix="+"
            className="text-4xl font-bold text-white"
          />
          <p className="mt-2 text-lg text-custom-orange">
            Prelate PVC Instalate
          </p>
        </div>
        <div className="text-left lg:block hidden">
          <CountUp
            end={16}
            duration={3}
            suffix="+"
            className="text-4xl font-bold text-white"
          />
          <p className="mt-2 text-lg text-custom-orange">
            Rulouri Exterioare Montate
          </p>
        </div>
      </div>
    </div>
  );
}
