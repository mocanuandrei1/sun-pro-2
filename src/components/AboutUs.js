import Image from "next/image";
import { GrUserManager } from "react-icons/gr";
import { PiCertificate } from "react-icons/pi";

import { LuCrown } from "react-icons/lu";

export default function AboutUs() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 py-20 max-w-7xl lg:mx-auto mx-10">
      <div className="pr-10 lg:block hidden">
        <Image
          src="/Hero1.jpg "
          alt="Renovation"
          width={500}
          height={500}
          className="mr-10 bg-black w-full h-full"
        />
      </div>
      <div>
        <p className="flex text-lg items-center justify-center md:justify-start text-[#f68a09] font-semibold grid-about-2 mb-4">
          <LuCrown className="pr-2 text-3xl" />
          Despre compania noastra
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold leading-relaxed grid-about-3 mb-8 lg:mb-4 text-center lg:text-left ">
          Ne gandim mereu la visul tau
        </h2>
        <p className="text-lg mb-12">
          Multe companii de construcții moderne se concentrează pe practici de
          construcție durabile, încorporând sisteme ecologice eficiente din
          punct de vedere energetic și design conștient de mediu pentru a reduce
          impactul proiectelor lor asupra mediului.
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-end">
          <div className="bg-gray-100 lg:mr-4 p-4">
            <div className="flex  items-center mb-4">
              <div className="lg:text-5xl text-3xl text-[#f68a09] icon-rotate">
                <GrUserManager />
              </div>
              <h3 className="lg:text-xl text-base font-semibold ml-2">
                Membrii echipei de calitate și experți
              </h3>
            </div>
            <p>
              Etapa inițială care implică conceptualizarea proiectului,
              proiectarea și obținerea necesară.
            </p>
          </div>

          <div className="bg-gray-100 lg:ml-4 p-4 lg:mt-0 mt-4">
            <div className="flex  items-center mb-4">
              <div className="lg:text-5xl text-3xl text-[#f68a09] icon-rotate">
                <PiCertificate />
              </div>
              <h3 className="lg:text-xl text-base font-semibold ml-2">
                Leaderi de piata in domeniu
              </h3>
            </div>
            <p>
              Faza inițială care implică conceptualizarea proiectului,
              proiectarea și obtinerea necesara.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
