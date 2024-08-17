import Image from "next/image";
import { GrUserManager } from "react-icons/gr";
import { PiCertificate } from "react-icons/pi";
import { LuCrown } from "react-icons/lu";
import HomeHeading from "./custom ui/HomeHeading";

export default function AboutUs() {
  return (
    <section className="bg-white grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl xl:mx-auto mx-10 mt-20 mb-28">
      <div className="lg:pl-10 order-1 mx-auto h-full w-full">
        <Image
          src="/images/aboutus.png"
          alt="Renovation"
          width={1200}
          height={800}
          className="bg-black object-cover w-full sm:w-2/3 lg:h-full lg:w-full mx-auto"
        />
      </div>
      <div className="flex flex-col">
        <HomeHeading
          smallTitle="Despre SunPro"
          smallTitleCSS="justify-center lg:justify-start"
          bigTitle="Creează Spații Exterioare de Vis cu SunPro"
          bigTitleSecond="cu Noi"
          bigTitleCSS="justify-center text-center lg:text-left mb-8"
        />

        <p className="text-md mb-12 text-center lg:text-left">
          La SunPro, transformăm ideile tale în realitate prin soluții de
          amenajare exterioară care combină funcționalitatea cu estetica
          modernă. Ne dedicăm să oferim servicii de înaltă calitate, folosind
          tehnologii avansate și materiale durabile, pentru a proteja și a
          înfrumuseța spațiile tale exterioare.
        </p>

        <div className="grid custom:grid-cols-2 grid-cols-1 justify-items-center custom:justify-items-start">
          <div className="bg-gray-100 custom:mr-4 p-4">
            <div className="flex items-center justify-center custom:justify-start mb-4">
              <div className="custom:text-5xl text-3xl text-[#f68a09] icon-rotate">
                <GrUserManager />
              </div>
              <h3 className="custom:text-xl text-base font-semibold ml-2 text-center custom:text-left">
                Profesionalism și Calitate
              </h3>
            </div>
            <p className="text-center custom:text-left">
              Fiecare proiect pe care îl realizăm reflectă angajamentul nostru
              față de calitate și excelență.
            </p>
          </div>

          <div className="bg-gray-100 custom:ml-4 p-4 custom:mt-0 mt-4">
            <div className="flex items-center justify-center custom:justify-start mb-4">
              <div className="custom:text-5xl text-3xl text-[#f68a09] icon-rotate">
                <PiCertificate />
              </div>
              <h3 className="custom:text-xl text-base font-semibold ml-2 text-center custom:text-left">
                Inovație și Fiabilitate
              </h3>
            </div>
            <p className="text-center custom:text-left">
              Cu SunPro, poți fi sigur că investești într-un partener de
              încredere, dedicat să aducă valoare și frumusețe spațiilor tale
              exterioare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
