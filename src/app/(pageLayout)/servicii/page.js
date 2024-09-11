import CTA from "@/components/CTA";
import ServicesCards from "@/components/Services/ServicesCards";
import { servicii } from "@/lib/variables";
import React from "react";

export default function page() {
  return (
    <div>
      <section className="mx-10 my-20 max-w-screen-xl xl:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicii.map((serviciu) => (
            <ServicesCards
              key={serviciu.title}
              title={serviciu.title}
              description={serviciu.description}
              url={serviciu.href}
              image={serviciu.image}
            />
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
}
