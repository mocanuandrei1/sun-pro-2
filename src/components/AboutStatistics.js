"use client";
import React from "react";
import CountUp from "react-countup";

export default function AboutStatistics() {
  return (
    <div className="bg-[#f68a09] text-white py-8">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 lg:gap-10 mx-auto">
        <div className="text-center">
          <CountUp
            end={2000}
            duration={3}
            suffix="+"
            className="text-4xl font-bold"
          />
          <p className="mt-2 text-lg">Project Completed</p>
        </div>
        <div className="text-center">
          <CountUp
            end={1500}
            duration={3}
            suffix="+"
            className="text-4xl font-bold"
          />
          <p className="mt-2 text-lg">Customer Satisfied</p>
        </div>
        <div className="text-center">
          <CountUp
            end={360}
            duration={3}
            suffix="+"
            className="text-4xl font-bold"
          />
          <p className="mt-2 text-lg">Expert Team Members</p>
        </div>
        <div className="text-center">
          <CountUp
            end={85}
            duration={3}
            suffix="+"
            className="text-4xl font-bold"
          />
          <p className="mt-2 text-lg">Awards Winner</p>
        </div>
      </div>
    </div>
  );
}
