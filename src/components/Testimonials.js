import React from "react";
import TestimonialsMobile from "./TestimonialsMobile";
import TestimonialsDesktop from "./TestimonialsDesktop";

const slides = [
  {
    name: "Angelina Rose",
    role: "Fondator și CEO",
    review: "Vizualizați obiectiv tehnologia fără erori pentru alinierea B2B.",
  },
  {
    name: "Ion Popescu",
    role: "Director de Marketing",
    review:
      "Valorifică monoton o gamă extinsă de modele prin colaborare eficientă.",
  },
  {
    name: "Maria Ionescu",
    role: "Dezvoltator Principal",
    review:
      "Inovați eficient resursele de la un capăt la altul cu arhitecturi cross-platform.",
  },
  {
    name: "Angelina Rose",
    role: "Fondator și CEO",
    review: "Vizualizați obiectiv tehnologia fără erori pentru alinierea B2B.",
  },
  {
    name: "Ion Popescu",
    role: "Director de Marketing",
    review:
      "Valorifică monoton o gamă extinsă de modele prin colaborare eficientă.",
  },
  {
    name: "Maria Ionescu",
    role: "Dezvoltator Principal",
    review:
      "Inovați eficient resursele de la un capăt la altul cu arhitecturi cross-platform.",
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
