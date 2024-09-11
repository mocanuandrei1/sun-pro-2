import React from "react";
import Image from "next/image";
import HomeHeading from "./custom ui/HomeHeading";

export default function CompanyHistory() {
  const historyData = [
    {
      date: "23 August, 2013",
      title: "Fondarea SunPro",
      description:
        "SunPro a fost fondată cu misiunea clară de a aduce un plus de confort și protecție spațiilor exterioare. Cei doi parteneri fondatori au pornit la drum cu determinare și viziunea de a oferi produse de înaltă calitate și design modern, care să răspundă nevoilor clienților.",
    },
    {
      date: "2018",
      title: "Pragul de 500.000 RON depășit",
      description:
        "Cu dedicare și muncă susținută, SunPro a reușit să depășească pragul de 500.000 RON cifră de afaceri în anul 2018. Această realizare a marcat o etapă importantă în evoluția companiei, consolidându-ne poziția pe piață și demonstrând încrederea tot mai mare pe care clienții o au în serviciile noastre.",
    },
    {
      date: "2020",
      title: "SunPro devine unul dintre cei mai mari distribuitori din România",
      description:
        "Anul 2020 a adus o nouă realizare majoră pentru SunPro: am devenit unul dintre cei mai mari distribuitori de folie din România. Această expansiune a fost posibilă datorită angajamentului nostru de a oferi produse și servicii de calitate superioară.",
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-screen-xl xl:mx-auto mx-10 my-10 lg:my-28">
      <div>
        <HomeHeading
          smallTitle="Despre SunPro"
          smallTitleCSS="justify-start"
          bigTitle="Istoria Companiei SunPro"
          bigTitleCSS="justify-center text-left mb-8"
        />
        <div className="flex flex-col justify-center gap-4">
          {historyData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border-l-4 border-[#f68a09] pl-4"
            >
              <p className="text-lg font-bold text-[#f68a09]">{item.date}</p>
              <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden relative lg:flex justify-center items-center">
        <Image
          src="/images/homepage/sunpro-lucrare (2).webp"
          alt="Istorie SunPro"
          width={2000}
          height={1200}
          className="object-cover h-3/4 rounded-lg"
        />
      </div>
    </section>
  );
}
