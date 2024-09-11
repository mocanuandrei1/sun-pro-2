import React from "react";
import ServicesCards from "./ServicesCards";
import { servicii } from "@/lib/variables";
import HomeHeading from "../custom ui/HomeHeading";

const Services = () => {
  return (
    <section className="mx-10 my-20 lg:my-28 max-w-screen-xl xl:mx-auto">
      <HomeHeading
        smallTitle="Serviciile Noastre"
        smallTitleCSS="justify-start"
        bigTitle="Servicii Profesionale de Montaj"
        bigTitleCSS="justify-start text-left mb-8"
      />
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
  );
};

export default Services;
