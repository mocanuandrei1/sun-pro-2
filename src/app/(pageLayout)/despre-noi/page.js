import AboutStatistics from "@/components/AboutStatistics";
import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import WorkProcess from "@/components/WorkProcess";
import React from "react";

export default function page() {
  return (
    <div>
      <AboutUs />
      <AboutStatistics />
      <CTA />
      <WorkProcess />
      <Testimonials />
    </div>
  );
}
