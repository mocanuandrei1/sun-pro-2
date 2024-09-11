import HomeHeading from "@/components/custom ui/HomeHeading";
import Image from "next/image";
import React from "react";
import ServiciiBlockModel3Card from "./ServiciiBlockModel3Card";

const ServiciiBlockModel3 = ({
  image,
  smallHeading,
  bigHeading,
  description,
  cards,
}) => {
  return (
    <section className="bg-black text-white my-10 lg:my-28">
      <div className="grid lg:grid-cols-2 gap-10 items-start grid-cols-1 max-w-screen-xl py-10 xl:mx-auto mx-10">
        <Image
          src={image}
          alt={bigHeading}
          width={1600}
          height={1200}
          className=" bg-black object-cover order-2 rounded-lg lg:order-none"
        />
        <div>
          <HomeHeading
            smallTitle={smallHeading}
            bigTitle={bigHeading}
            smallTitleCSS="justify-start"
            bigTitleCSS="justify-center text-left mb-8"
          />
          <p className="mb-8">{description}</p>
          <ServiciiBlockModel3Card cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default ServiciiBlockModel3;
