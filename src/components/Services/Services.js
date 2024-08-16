import React from "react";
import ServicesCards from "./ServicesCards";
import { servicii } from "@/lib/variables";
import HomeHeading from "../custom ui/HomeHeading";

const Services = () => {
  return (
    <section className="mx-10 my-28 max-w-screen-xl xl:mx-auto">
      <HomeHeading
        smallTitle="Serviciile Noastre"
        smallTitleCSS="justify-center"
        bigTitle="Servicii Profesionale de Montaj"
        bigTitleCSS="justify-center text-center mb-8"
      />
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
