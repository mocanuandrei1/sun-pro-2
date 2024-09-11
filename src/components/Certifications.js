import React from "react";
import HomeHeading from "./custom ui/HomeHeading";
import Image from "next/image";

const Certifications = () => {
  return (
    <section className="mx-10 my-12 lg:my-28 max-w-screen-xl xl:mx-auto">
      <HomeHeading
        smallTitle="Despre SunPro"
        smallTitleCSS="justify-start"
        bigTitle="Premii și parteneriate"
        bigTitleCSS="justify-start text-left mb-8"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Image
          src="/premiu.png"
          alt="Locul 1 în Top Afaceri România 2023"
          width={1200}
          height={800}
          className="object-cover"
        />
        <Image
          src="/premiu2.png"
          alt="Locul 1 în Top Profit România 2023"
          width={1200}
          height={800}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Certifications;
