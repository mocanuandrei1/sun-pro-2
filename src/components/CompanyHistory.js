import React from "react";
import Image from "next/image";
import HomeHeading from "./custom ui/HomeHeading";

export default function CompanyHistory() {
  const historyData = [
    {
      date: "22 IULIE, 2024",
      title: "10 Ani de Experiență în Soluții de Protecție Exterioară",
      description:
        "SunPro a acumulat o vastă experiență în oferirea de soluții inovatoare pentru protecția spațiilor exterioare, inclusiv pergole retractabile, prelate PVC și rulouri exterioare.",
    },
    {
      date: "23 IULIE, 2013",
      title: "Fondarea SunPro",
      description:
        "SunPro a fost fondată cu misiunea de a îmbunătăți confortul și protecția spațiilor exterioare prin produse de înaltă calitate și design modern.",
    },
    {
      date: "24 IULIE, 2024",
      title: "Extinderea Gamelor de Produse",
      description:
        "Am extins gama noastră de produse pentru a include o varietate de soluții, de la pergole retractabile și prelate PVC până la rulouri exterioare personalizate.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  py-20 lg:max-w-7xl lg:mx-auto mx-10">
      <div className="relative h-full">
        <Image
          src="/Hero1.jpg"
          alt="Istoria Companiei SunPro"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <HomeHeading
          smallTitle="Istoria Companiei"
          smallTitleCSS="justify-start"
          bigTitle="Exterior confortabil, protecție garantată"
          bigTitleCSS="justify-center text-left mb-6"
        />
        <div className="space-y-8">
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
    </div>
  );
}
