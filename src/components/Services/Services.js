import React from "react";

import { LuCrown } from "react-icons/lu";
import ServicesCards from "./ServicesCards";
const servicii = [
  {
    title: "Copertine",
    href: "/servicii/copertine",
    description:
      "Copertine retractabile, fixe, din policarbonat sau din panza.",
  },
  {
    title: "Pergole Retractabile",
    href: "/servicii/pergole-retractabile",
    description: "Pergole retractabile din aluminiu sau din lemn.",
  },
  {
    title: "Inchideri Terase",
    href: "/servicii/inchideri-terase",
    description: "Inchideri terase din sticla sau din policarbonat.",
  },
  {
    title: "Rulouri Exterioare",
    href: "/servicii/rulouri-exterioare",
    description: "Rulouri exterioare din aluminiu sau PVC.",
  },
  {
    title: "Prelate PVC",
    href: "/servicii/prelate-pvc",
    description: "Prelate PVC pentru terase, piscine, balcoane.",
  },
];
const Services = () => {
  return (
    <section>
      <p className="flex text-lg justify-center items-center text-[#f68a09] pb-4 font-semibold">
        <LuCrown className="pr-2 text-3xl" />
        Our Services
      </p>
      <h2 className="flex justify-center text-3xl font-bold pb-4">
        Ce Servicii Vă Oferim?
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
