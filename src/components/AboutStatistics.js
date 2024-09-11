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
            className="text-5xl font-bold text-white"
          />
          <h3 className="mt-2 text-custom-orange uppercase">
            Copertine Instalate
          </h3>
        </div>
        <div className="text-left">
          <CountUp
            start={0}
            end={65}
            duration={3}
            suffix="+"
            className="text-5xl font-bold text-white"
          />
          <h3 className="mt-2 text-custom-orange uppercase">Pergole Montate</h3>
        </div>
        <div className="text-left">
          <CountUp
            start={0}
            end={42}
            duration={3}
            suffix="+"
            className="text-5xl font-bold text-white"
          />
          <h3 className="mt-2 text-custom-orange uppercase">Terase Închise</h3>
        </div>
        <div className="text-left">
          <CountUp
            start={0}
            end={20}
            duration={3}
            suffix="+"
            className="text-5xl font-bold text-white"
          />
          <h3 className="mt-2 text-custom-orange uppercase">
            Prelate PVC Instalate
          </h3>
        </div>
        <div className="text-left lg:block hidden">
          <CountUp
            start={0}
            end={16}
            duration={3}
            suffix="+"
            className="text-5xl font-bold text-white"
          />
          <h3 className="mt-2 text-custom-orange uppercase">
            Rulouri Exterioare Montate
          </h3>
        </div>
      </div>
    </div>
  );
}
