import Image from "next/image";
import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiChoice, GiHammerNails } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import HomeHeading from "./custom ui/HomeHeading";

export default function WorkProcess({ subtitle }) {
  return (
    <section className="mx-10 my-12 lg:my-28 max-w-screen-xl xl:mx-auto">
      <HomeHeading
        smallTitle={subtitle ? subtitle : "Procesul de lucru"}
        smallTitleCSS="justify-start"
        bigTitle="Etapele colaborării noastre"
        bigTitleCSS="justify-start text-left mb-5 lg:mb-20"
      />
      <div className="relative max-w-6xl w-full mx-auto">
        <Image
          src={"/WorkProcess.png"}
          alt="Loading.. "
          width={1200}
          height={400}
          className="w-[80%] h-full object-fill hidden custom:block"
        />

        {/* Layout pentru desktop */}
        <div className="hidden custom:block">
          <div className="absolute -top-5 -left-16 flex items-center">
            <div className="rounded-full bg-gray-100 w-28 h-28 flex items-center justify-center text-white border-2 border-black ">
              <IoNewspaperOutline className="text-[#f68a09] text-5xl icon-rotate" />
            </div>
            <div className="ml-4">
              <p className="text-custom-gray text-sm font-semibold">Pasul 1</p>
              <p className="text-xl font-bold">Consultare</p>
              <p className="text-custom-gray text-sm">
                Evaluăm nevoile și <br /> preferințele clientului.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-[21%] flex items-center">
            <div className="rounded-full bg-gray-100 w-28 h-28 flex items-center justify-center text-white border-2 border-black ">
              <GiChoice className="text-[#f68a09] text-5xl icon-rotate" />
            </div>
            <div className="ml-4">
              <p className="text-custom-gray text-sm font-semibold">Pasul 2</p>
              <p className="text-xl font-bold">Alegerea produsului</p>
              <p className="text-custom-gray text-sm">
                Ghidăm clientul în selecția <br /> copertinei ideale.
              </p>
            </div>
          </div>

          <div className="absolute -top-5 left-[45%] flex items-center">
            <div className="rounded-full bg-gray-100 w-28 h-28 flex items-center justify-center text-white border-2 border-black ">
              <GiHammerNails className="text-[#f68a09] text-5xl icon-rotate" />
            </div>
            <div className="ml-4">
              <p className="text-custom-gray text-sm font-semibold">Pasul 3</p>
              <p className="text-xl font-bold">Montaj</p>
              <p className="text-custom-gray text-sm">
                Efectuăm montajul profesional <br /> al copertinei alese.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 -right-16 flex items-center">
            <div className="rounded-full bg-gray-100 w-28 h-28 flex items-center justify-center text-white border-2 border-black ">
              <FaHandshake className="text-[#f68a09] text-5xl icon-rotate" />
            </div>
            <div className="ml-4">
              <p className="text-custom-gray text-sm font-semibold">Pasul 4</p>
              <p className="text-xl font-bold">Servicii post-vânzare</p>
              <p className="text-custom-gray text-sm">
                Oferim suport și întreținere <br /> pentru produsele noastre.
              </p>
            </div>
          </div>
        </div>

        {/* Layout pentru mobil */}
        <div className="block custom:hidden">
          <div className="flex items-center mb-6">
            <div className="min-w-[64px] rounded-full bg-gray-100 w-16 h-16 flex items-center justify-center text-white border-2 border-black">
              <IoNewspaperOutline className="text-[#f68a09] text-3xl icon-rotate" />
            </div>
            <div className="ml-4 flex-1 text-left">
              <p className="text-custom-gray text-xs font-semibold">Pasul 1</p>
              <p className="text-lg font-bold">Consultare</p>
              <p className="text-custom-gray text-xs">
                Evaluăm nevoile și preferințele clientului.
              </p>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="min-w-[64px] rounded-full bg-gray-100 w-16 h-16 flex items-center justify-center text-white border-2 border-black">
              <GiChoice className="text-[#f68a09] text-3xl icon-rotate" />
            </div>
            <div className="ml-4 flex-1 text-left">
              <p className="text-custom-gray text-xs font-semibold">Pasul 2</p>
              <p className="text-lg font-bold">Alegerea produsului</p>
              <p className="text-custom-gray text-xs">
                Ghidăm clientul în selecția copertinei ideale.
              </p>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="min-w-[64px] rounded-full bg-gray-100 w-16 h-16 flex items-center justify-center text-white border-2 border-black">
              <GiHammerNails className="text-[#f68a09] text-3xl icon-rotate" />
            </div>
            <div className="ml-4 flex-1 text-left">
              <p className="text-custom-gray text-xs font-semibold">Pasul 3</p>
              <p className="text-lg font-bold">Montaj</p>
              <p className="text-custom-gray text-xs">
                Efectuăm montajul profesional al copertinei alese.
              </p>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="min-w-[64px] rounded-full bg-gray-100 w-16 h-16 flex items-center justify-center text-white border-2 border-black">
              <FaHandshake className="text-[#f68a09] text-3xl icon-rotate" />
            </div>
            <div className="ml-4 flex-1 text-left">
              <p className="text-custom-gray text-xs font-semibold">Pasul 4</p>
              <p className="text-lg font-bold">Servicii post-vânzare</p>
              <p className="text-custom-gray text-xs">
                Oferim suport și întreținere pentru produsele noastre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
