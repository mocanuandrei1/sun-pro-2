import React from "react";
import TestimonialsMobile from "./TestimonialsMobile";
import TestimonialsDesktop from "./TestimonialsDesktop";

const slides = [
  // Copertine retractabile, fixe, din policarbonat sau din pânză
  {
    name: "Index1Alexandru Marin",
    role: "Proprietar Cafenea",
    review:
      "Copertina retractabilă de la Sun Pro a transformat terasa cafenelei mele. Calitate impecabilă și montaj rapid!",
  },
  {
    name: "Index2Cristina Voicu",
    role: "Proprietar Vilă",
    review:
      "Copertinele din policarbonat de la Sun Pro oferă protecție excelentă împotriva soarelui și a ploii. Recomand cu încredere!",
  },

  // Pergole retractabile din aluminiu sau din lemn
  {
    name: "Index3Mihai Radu",
    role: "Manager Restaurant",
    review:
      "Pergola retractabilă de la Sun Pro adaugă eleganță și funcționalitate terasei noastre. Un produs excelent!",
  },
  {
    name: "Index4Alina Dobre",
    role: "Proprietar Pensiune",
    review:
      "Pergola din lemn de la Sun Pro se potrivește perfect cu estetica pensiunii noastre. Suntem foarte mulțumiți!",
  },

  // Închideri terase din sticlă sau din policarbonat
  {
    name: "Index5Răzvan Ionescu",
    role: "Proprietar Restaurant",
    review:
      "Închiderea terasei cu sticlă de la Sun Pro ne permite să o folosim tot anul. Calitate de top!",
  },
  {
    name: "Index6Ioana Tudor",
    role: "Proprietar Casă de Vacanță",
    review:
      "Închiderea terasei cu policarbonat de la Sun Pro ne-a transformat spațiul într-un loc preferat pentru relaxare.",
  },

  // Rulouri exterioare din aluminiu sau PVC
  {
    name: "Index7Andrei Popa",
    role: "Proprietar Locuință",
    review:
      "Rulourile din aluminiu de la Sun Pro oferă protecție excelentă și adaugă siguranță casei noastre.",
  },
  {
    name: "Index8Elena Stancu",
    role: "Proprietar Apartament",
    review:
      "Rulourile din PVC de la Sun Pro sunt estetice, durabile și eficiente în izolarea termică. O alegere excelentă!",
  },

  // Prelate PVC pentru terase, piscine, balcoane
  {
    name: "Index9Sorin Dumitru",
    role: "Proprietar Terasă",
    review:
      "Prelata din PVC de la Sun Pro a schimbat aspectul terasei noastre. Este rezistentă și ușor de întreținut!",
  },
  {
    name: "Index10Oana Georgescu",
    role: "Manager Centru SPA",
    review:
      "Prelatele PVC de la Sun Pro sunt robuste, ușor de manevrat și oferă protecție totală. Mulțumim, Sun Pro!",
  },
];

export default function Testimonials() {
  return (
    <div>
      <div className="block lg:hidden">
        <TestimonialsMobile slides={slides} />
      </div>

      <div className="hidden lg:block">
        <TestimonialsDesktop slides={slides} />
      </div>
    </div>
  );
}
