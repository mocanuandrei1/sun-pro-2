import React from "react";
import TestimonialsMobile from "./TestimonialsMobile";
import TestimonialsDesktop from "./TestimonialsDesktop";

const slides = [
  // Testimonial 1
  {
    name: "Marius Popescu",
    role: "Proprietar Hotel",
    review:
      "Soluțiile de umbrire de la Sun Pro au adus un plus de confort clienților noștri. Servicii de calitate și montaj profesionist!",
  },
  // Testimonial 2
  {
    name: "Ana Ionescu",
    role: "Proprietar Restaurant",
    review:
      "Pergola retractabilă de la Sun Pro a transformat terasa noastră într-un loc preferat pentru clienți, indiferent de vreme.",
  },
  // Testimonial 3
  {
    name: "Vlad Radu",
    role: "Proprietar Pensiune",
    review:
      "Rulourile exterioare de la Sun Pro ne oferă intimitate și protecție împotriva soarelui puternic. Foarte mulțumiți!",
  },
  // Testimonial 4
  {
    name: "Elena Marin",
    role: "Manager Spa",
    review:
      "Prelatele de la Sun Pro sunt rezistente și estetice, perfect integrate în designul centrului nostru. Recomandăm cu încredere!",
  },
  // Testimonial 5
  {
    name: "Răzvan Tudor",
    role: "Proprietar Cafenea",
    review:
      "Copertina retractabilă de la Sun Pro este excelentă pentru terasa noastră. Montaj rapid și servicii impecabile!",
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
