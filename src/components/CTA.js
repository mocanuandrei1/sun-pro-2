import Image from "next/image";
import HomeHeading from "./custom ui/HomeHeading";
import Button from "./custom ui/Button";

export default function CTA() {
  return (
    <section className="relative lg:h-60 h-80 bg-black text-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center h-full max-w-screen-xl xl:mx-auto mx-10 mt-10 lg:mt-28">
        <div className="absolute inset-0">
          <Image
            src="/images/homepage/sunpro-lucrare (7).webp"
            alt="Obține o Consultație Gratuită"
            width={2000}
            height={1600}
            className="opacity-10 object-cover w-full relative h-full"
          />
        </div>
        <div className="z-10 block">
          <HomeHeading
            smallTitle="Contactează-ne"
            smallTitleCSS="justify-start"
            bigTitle="Obține o Constultație Gratuită"
            bigTitleCSS="justify-center text-left mb-0"
          />
        </div>
        <div className="flex lg:flex-row flex-col gap-4 items-center lg:justify-end">
          <Button
            type="link"
            href="despre-noi"
            text="Obține Consultația Gratuită"
            customClass="mt-0 lg:mt-10 w-full sm:w-[290px] grid-about-6 "
            mainColor="orange"
            secondColor="blue"
          />
          <Button
            type="link"
            href="despre-noi"
            text="Lucrează cu noi"
            customClass="mt-0 lg:mt-10 w-full sm:w-[220px] grid-about-6 "
            mainColor="blue"
            secondColor="orange"
          />
        </div>
      </div>
    </section>
  );
}
