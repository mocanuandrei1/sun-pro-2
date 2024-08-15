import Image from "next/image";
import { GrUserManager } from "react-icons/gr";
import { PiCertificate } from "react-icons/pi";
import { LuCrown } from "react-icons/lu";

export default function AboutUs() {
  return (
    <div className="grid custom:grid-cols-2 grid-cols-1 py-20 max-w-7xl custom:mx-auto mx-10">
      {/* Afișăm imaginea doar pe ecrane mai mari de 1300px */}
      <div className="pr-10 custom:block hidden">
        <Image
          src="/Hero1.jpg"
          alt="Renovation"
          width={500}
          height={500}
          className="mr-10 bg-black w-full h-full"
        />
      </div>
      <div className="flex flex-col custom:items-start items-center">
        <p className="flex text-lg items-center justify-center custom:justify-start text-[#f68a09] font-semibold  mb-4">
          <LuCrown className="pr-2 text-3xl" />
          Despre compania noastra
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold leading-relaxed  mb-8 custom:mb-4 text-center custom:text-left">
          Ne gandim mereu la visul tau
        </h2>
        <p className="text-lg mb-12 text-center custom:text-left">
          Multe companii de construcții moderne se concentrează pe practici de
          construcție durabile, încorporând sisteme ecologice eficiente din
          punct de vedere energetic și design conștient de mediu pentru a reduce
          impactul proiectelor lor asupra mediului.
        </p>

        <div className="grid custom:grid-cols-2 grid-cols-1 justify-items-center custom:justify-items-start">
          <div className="bg-gray-100 custom:mr-4 p-4">
            <div className="flex items-center justify-center custom:justify-start mb-4">
              <div className="custom:text-5xl text-3xl text-[#f68a09] icon-rotate">
                <GrUserManager />
              </div>
              <h3 className="custom:text-xl text-base font-semibold ml-2 text-center custom:text-left">
                Membrii echipei de calitate și experți
              </h3>
            </div>
            <p className="text-center custom:text-left">
              Etapa inițială care implică conceptualizarea proiectului,
              proiectarea și obținerea necesară.
            </p>
          </div>

          <div className="bg-gray-100 custom:ml-4 p-4 custom:mt-0 mt-4">
            <div className="flex items-center justify-center custom:justify-start mb-4">
              <div className="custom:text-5xl text-3xl text-[#f68a09] icon-rotate">
                <PiCertificate />
              </div>
              <h3 className="custom:text-xl text-base font-semibold ml-2 text-center custom:text-left">
                Leaderi de piata in domeniu
              </h3>
            </div>
            <p className="text-center custom:text-left">
              Faza inițială care implică conceptualizarea proiectului,
              proiectarea și obținerea necesară.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
