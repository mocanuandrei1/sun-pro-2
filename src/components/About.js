import Image from "next/image";
import React from "react";

import Button from "./custom ui/Button";
import HomeHeading from "./custom ui/HomeHeading";

export default function About() {
  return (
    <section className="grid-section-about bg-white max-w-screen-xl xl:mx-auto mx-10 my-10 lg:my-28">
      <div className="grid-about-1 mx-auto h-4/5">
        <Image
          src="/images/homepage/sunpro-lucrare (6).webp"
          alt="SunPro Despre Noi"
          width={2000}
          height={1200}
          className="bg-black object-cover w-full sm:w-2/3 lg:h-full lg:w-full rounded-lg mx-auto"
        />
      </div>
      <HomeHeading
        smallTitle="Despre SunPro"
        smallTitleCSS="justify-start"
        bigTitle="Protejează și Înfrumusețează-ți Spațiile Exterioare"
        bigTitleSecond="cu Noi"
        bigTitleCSS="justify-center text-left mb-6"
      />
      <p className="text-md text-custom-gray grid-about-4 my-10 lg:mt-0 lg:mb-6">
        Cu experiență în montarea copertinelor, pergolelor retractabile,
        închiderilor de terase, rulourilor exterioare și prelatelor PVC, oferim
        soluții de calitate pentru protecția spațiilor exterioare, asigurând
        integrarea perfectă a detaliilor.
      </p>
      <div className="grid-about-5 flex flex-col sm:flex-row gap-5 lg:gap-2">
        <div className="p-6 lg:mr-3 bg-gray-100 rounded-lg shadow-lg basis-1/2">
          <div className="text-2xl font-medium flex mb-3">
            <p className="text-[#f68a09] pr-2 font-montserrat">13</p>
            <h2>
              Ani <span className="block">Experiență</span>
            </h2>
          </div>
          <p className="text-custom-gray">
            De peste un deceniu, oferim montaj profesional cu expertiză și
            dedicare, mândri de reputația noastră de excelență și de proiectele
            de succes.
          </p>
        </div>
        <div className="p-6 lg:ml-3 bg-gray-100 rounded-lg shadow-lg basis-1/2">
          <div className="text-2xl font-medium flex mb-3">
            <p className="text-[#f68a09] pr-2 font-montserrat">10</p>
            <h2>
              Tehnicieni <span className="block">Experți</span>
            </h2>
          </div>
          <p className="text-custom-gray">
            Echipa noastră de 10 tehnicieni experimentați transformă viziunea ta
            în realitate cu profesionalism și la cele mai înalte standarde.
          </p>
        </div>
      </div>
      <Button
        type="link"
        href="despre-noi"
        text="Află Mai Multe Despre Noi"
        customClass="mt-10 lg:mt-4 w-full sm:w-[290px] grid-about-6 "
        mainColor="orange"
        secondColor="blue"
      />
    </section>
  );
}
