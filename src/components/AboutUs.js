import Image from "next/image";
import { GrUserManager } from "react-icons/gr";
import { PiCertificate } from "react-icons/pi";
import HomeHeading from "./custom ui/HomeHeading";

export default function AboutUs() {
  return (
    <section className="grid-section-about bg-white max-w-screen-xl xl:mx-auto mx-10 my-10 lg:mt-28 lg:mb-24">
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
        bigTitle="Creează spații exterioare de vis cu SunPro"
        bigTitleCSS="justify-center text-left mb-6"
      />
      <p className="text-md text-custom-gray grid-about-4 my-10 lg:mt-0 lg:mb-6">
        La SunPro, transformăm ideile tale în realitate prin soluții de
        amenajare exterioară care combină funcționalitatea cu estetica modernă.
        Ne dedicăm să oferim servicii de înaltă calitate, folosind tehnologii
        avansate și materiale durabile, pentru a proteja și a înfrumuseța
        spațiile tale exterioare.
      </p>
      <div className="grid-about-5 flex flex-col sm:flex-row gap-5 lg:gap-2">
        <div className="p-6 lg:mr-3 bg-gray-100 rounded-lg shadow-lg basis-1/2">
          <div className="text-2xl gap-2 font-medium flex mb-3">
            <div className="custom:text-5xl text-3xl text-[#f68a09] icon-rotate">
              <GrUserManager />
            </div>
            <h2>Profesionalism și Calitate</h2>
          </div>
          <p className="text-custom-gray">
            Fiecare proiect pe care îl realizăm reflectă angajamentul nostru
            față de calitate și excelență.
          </p>
        </div>
        <div className="p-6 lg:ml-3 bg-gray-100 rounded-lg shadow-lg basis-1/2">
          <div className="text-2xl gap-2 font-medium flex mb-3">
            <div className="custom:text-5xl text-3xl text-[#f68a09] icon-rotate">
              <PiCertificate />
            </div>
            <h2> Inovație și fiabilitate</h2>
          </div>
          <p className="text-custom-gray">
            Cu SunPro, poți fi sigur că investești într-un partener de
            încredere, dedicat să aducă valoare și frumusețe spațiilor tale
            exterioare.
          </p>
        </div>
      </div>
    </section>
  );
}
