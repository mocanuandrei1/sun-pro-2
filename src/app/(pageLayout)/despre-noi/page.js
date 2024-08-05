import AboutStatistics from "@/components/AboutStatistics";
import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import React from "react";

export default function page() {
  return (
    <div>
      <AboutUs />
      <AboutStatistics />
      <CTA />
    </div>
  );
}
