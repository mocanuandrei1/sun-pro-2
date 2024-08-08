import HomeHeading from "@/components/custom ui/HomeHeading";
import React from "react";
import ServiciiBlockModel2Card from "./ServiciiBlockModel2Card";
import { FaInfo } from "react-icons/fa6";
import Button from "@/components/custom ui/Button";

const generateTitleToIconMap = (cards) => {
  const map = {};
  cards.forEach((card) => {
    map[card.title] = card.icon || FaInfo;
  });
  return map;
};

const ServiciiBlockModel2 = ({
  smallHeading,
  bigHeading,
  cards,
  CTAButton,
}) => {
  const titleToIconMap = generateTitleToIconMap(cards);

  return (
    <section className="max-w-screen-xl xl:mx-auto mx-10 my-28">
      <HomeHeading
        smallTitle={smallHeading}
        smallTitleCSS="justify-start"
        bigTitle={bigHeading}
        bigTitleCSS="justify-center text-left mb-14"
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start overflow-hidden gap-5">
        {cards.map((card, index) => {
          const CardIcon = titleToIconMap[card.title] || FaInfo;
          return (
            <li
              key={index}
              className="mb-8 border-[1px] rounded-lg group p-4 border-black flex flex-col items-center"
            >
              <CardIcon className="text-6xl group-hover:scale-110 mb-4" />
              <h3 className="mb-8">{card.title}</h3>
              <ul className="flex flex-col gap-4">
                {card.text.map((text, subIndex) => (
                  <ServiciiBlockModel2Card
                    title={text.subtitle}
                    description={text.description}
                    key={subIndex}
                    icon={text.icon}
                  />
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      {CTAButton && (
        <Button
          type="link"
          href="/contact"
          customClass="font-semibold w-full sm:w-[280px] mx-auto"
          text="OBȚINE O CONSULTAȚIE"
          mainColor="blue"
          secondColor="orange"
        />
      )}
    </section>
  );
};

export default ServiciiBlockModel2;
