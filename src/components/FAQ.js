"use client";
import React, { useState } from "react";
import { LuCrown } from "react-icons/lu";
import FAQItem from "./FAQItem"; // Assuming FAQItem is in the same directory
import Image from "next/image";

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
    <div className="w-full h-full max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 relative py-20">
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
        <p className="flex text-lg items-center justify-center md:justify-start text-[#f68a09] font-semibold grid-about-2">
          <LuCrown className="pr-2 text-3xl" />
          Intrebări frecvente
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold leading-relaxed grid-about-3 mb-8 lg:mb-3 text-center lg:text-left">
          Planificarea Proiectului și Consultanță
        </h2>
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
    </div>
  );
}
