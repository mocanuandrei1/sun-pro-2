"use client";
import React from "react";
import CountUp from "react-countup";

export default function AboutStatistics() {
  return (
    <div className="bg-orange-500 text-white py-8">
      <div className="container mx-auto flex justify-between">
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
