import Image from "next/image";
import HomeHeading from "../custom ui/HomeHeading";
import WhyUsCard from "./WhyUsCard";

export default function WhyUs() {
  return (
    <section className="bg-black text-white my-20 lg:my-28">
      <div className="grid lg:grid-cols-2 gap-10 items-center grid-cols-1 max-w-screen-xl py-10 xl:mx-auto mx-10">
        <div>
          <HomeHeading
            smallTitle="De Ce Să Alegi SunPro ?"
            bigTitle="Descoperă Avantajele Soluțiilor Noastre Exterioare."
            smallTitleCSS="justify-start"
            bigTitleCSS="justify-center text-left mb-8"
          />
          <p className="mb-8">
            Serviciile noastre de montaj aduc un plus de funcționalitate și stil
            spațiilor tale exterioare. Ne concentrăm pe utilizarea materialelor
            de calitate superioară și pe practici durabile, asigurându-ne că
            fiecare proiect este executat la cele mai înalte standarde.
          </p>
          <WhyUsCard />
        </div>
        <Image
          src="/images/homepage/sunpro-lucrare (1).webp"
          alt="Renovation"
          width={2000}
          height={1200}
          className=" bg-black order-2 rounded-lg lg:order-none"
        />
      </div>
    </section>
  );
}
