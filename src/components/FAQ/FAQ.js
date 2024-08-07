"use client";
import React, { useState } from "react";
import { LuCrown } from "react-icons/lu";
import Image from "next/image";
import FAQItem from "./FAQItem";
import HomeHeading from "../custom ui/HomeHeading";

const faqs = [
  {
    question:
      "Ce tipuri de copertine oferim și cum să alegi varianta potrivita?",
    answer:
      "Pentru fiecare client, oferim copertine retractabile, fixe, din policarbonat sau din pânză. Alegerea copertinei depinde de nevoile și preferințele tale, de condițiile climatice din zonă și de stilul arhitectural al casei tale. Echipa noastră te poate ajuta să alegi soluția ideală.",
  },
  {
    question:
      "Cum funcționează pergolele retractabile și care sunt avantajele lor?",
    answer:
      "Pergolele retractabile sunt structuri versatile din aluminiu sau lemn, care permit ajustarea cantității de umbră și protecție împotriva intemperiilor. Ele oferă flexibilitate și confort, permițându-ți să te bucuri de spațiul exterior indiferent de vreme.",
  },
  {
    question: "Ce opțiuni avem pentru închiderea teraselor?",
    answer:
      "Oferim închideri de terase cu sticlă sau policarbonat. Închiderea terasei poate oferi protecție împotriva vântului și ploii, permițând utilizarea acesteia pe tot parcursul anului. Sticla oferă un aspect elegant și vizibilitate, în timp ce policarbonatul este durabil și eficient din punct de vedere termic.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-screen-xl xl:mx-auto mx-10 my-28">
      <div className="hidden lg:flex justify-center items-center">
        <div className="relative w-full h-full flex-shrink-0">
          <Image
            src="/Hero1.jpg"
            alt="Construction workers"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div>
        <HomeHeading
          smallTitle="Intrebări Frecvente"
          smallTitleCSS="justify-center lg:justify-start"
          bigTitle="Planificarea Proiectului și Consultanță"
          bigTitleSecond="cu Noi"
          bigTitleCSS="justify-center text-center lg:text-left mb-8"
        />
        <div className="flex flex-col justify-center gap-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
