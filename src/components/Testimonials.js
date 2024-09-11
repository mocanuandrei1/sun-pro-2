import React from "react";
import TestimonialsMobile from "./TestimonialsMobile";
import TestimonialsDesktop from "./TestimonialsDesktop";
import { testimoniale } from "@/lib/variables";
import HomeHeading from "./custom ui/HomeHeading";

export default function Testimonials() {
  return (
    <section className="mx-10 my-28 max-w-screen-xl xl:mx-auto">
      <HomeHeading
        smallTitle="Despre SunPro"
        smallTitleCSS="justify-start"
        bigTitle="Testimoniale"
        bigTitleCSS="justify-start text-left mb-8"
      />

      <div className="block lg:hidden">
        <TestimonialsMobile slides={testimoniale} />
      </div>

      <div className="hidden lg:block">
        <TestimonialsDesktop slides={testimoniale} />
      </div>
    </section>
  );
}
