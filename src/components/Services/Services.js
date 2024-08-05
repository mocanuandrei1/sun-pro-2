import React from "react";

import { LuCrown } from "react-icons/lu";
import ServicesCards from "./ServicesCards";
import { servicii } from "@/lib/variables";

const Services = () => {
  return (
    <section className="mx-10 my-28 max-w-screen-xl xl:mx-auto">
      <p className="flex text-lg justify-center items-center text-[#f68a09] pb-4 font-semibold">
        <LuCrown className="pr-2 text-3xl" />
        Serviciile Noastre
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold leading-relaxed mb-8 text-center">
        Servicii Profesionale de Montaj
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicii.map((serviciu) => (
          <ServicesCards
            key={serviciu.title}
            title={serviciu.title}
            description={serviciu.description}
            url={serviciu.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
