import Image from "next/image";
import React from "react";
import { LuCrown } from "react-icons/lu";

export default function About() {
  return (
    <section className="grid-section-about items-start bg-white max-w-screen-xl xl:mx-auto mx-10 my-28">
      <div className="lg:pr-10 grid-about-1 mx-auto h-full w-full">
        <Image
          src="/images/aboutus.png"
          alt="Renovation"
          width={1200}
          height={800}
          className="bg-black object-cover w-full sm:w-2/3 lg:h-full lg:w-full mx-auto"
        />
      </div>
      <p className="flex text-lg items-center text-[#f68a09] font-semibold grid-about-2">
        <LuCrown className="pr-2 text-3xl" />
        Despre SunPro
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-relaxed grid-about-3 mb-8 lg:mb-0 text-center lg:text-left">
        Protejează și Înfrumusețează-ți Spațiile Exterioare
        <span className="hidden sm:block"> cu Noi</span>
      </h1>
      <p className="text-md text-custom-gray grid-about-4 my-10 lg:my-0">
        Cu experiență în montarea copertinelor, pergolelor retractabile,
        închiderilor de terase, rulourilor exterioare și prelatelor PVC, oferim
        soluții de calitate pentru protecția spațiilor exterioare, asigurând
        integrarea perfectă a detaliilor.
      </p>
      <div className="grid-about-5 flex flex-col sm:flex-row gap-5 lg:gap-2">
        <div className="p-6 lg:mr-3 bg-gray-100 basis-1/2">
          <div className="text-2xl font-medium flex mb-3">
            <p className="text-[#f68a09] pr-2 font-montserrat">10</p>
            <h2> Ani de Experiență</h2>
          </div>
          <p className="text-custom-gray">
            De peste un deceniu, oferim montaj profesional cu expertiză și
            dedicare, mândri de reputația noastră de excelență și de proiectele
            de succes.
          </p>
        </div>
        <div className="p-6 lg:ml-3 bg-gray-100 basis-1/2">
          <div className="text-2xl font-medium flex mb-3">
            <p className="text-[#f68a09] pr-2 font-montserrat">10</p>
            <h2> Tehnicieni Experți</h2>
          </div>
          <p className="text-custom-gray">
            Echipa noastră de 10 tehnicieni experimentați transformă viziunea ta
            în realitate cu profesionalism și la cele mai înalte standarde.
          </p>
        </div>
      </div>
      <button className="lg:mt-4 w-full sm:w-2/3 lg:w-full mt-10 px-6 py-3 bg-[#f68a09] text-white rounded-sm clip-bottom-right block grid-about-6">
        Află mai multe despre noi
      </button>
    </section>
  );
}
