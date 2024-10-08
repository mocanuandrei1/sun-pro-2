import AboutStatistics from "@/components/AboutStatistics";
import AboutUs from "@/components/AboutUs";
import Certifications from "@/components/Certifications";
import CompanyHistory from "@/components/CompanyHistory";
import CTA from "@/components/CTA";
import WorkProcess from "@/components/WorkProcess";
import React from "react";

export const metadata = {
  title: "Despre Noi",
  description:
    "SunPro oferă soluții personalizate pentru a satisface nevoile unice și specificațiile fiecărui proiect.",
};

export default function page() {
  return (
    <div>
      <AboutUs />
      <AboutStatistics />
      <CompanyHistory />
      <WorkProcess subtitle="Despre SunPro" />
      <Certifications />
      <CTA />
    </div>
  );
}
