import CTA from "@/components/CTA";
import Button from "@/components/custom ui/Button";
import HomeHeading from "@/components/custom ui/HomeHeading";
import ImageGallery from "@/components/ImageGallery";
import ServiciiBlockModel1 from "@/components/pages/servicii/ServiciiBlockModel1";
import React from "react";

const texts = {
  smallHeading: "Închideri Terase",
  bigHeading: "Închideri Terase cu Caseta și Ghidaje Laterale",
  firstH3: "Ce sunt inchiderile terase cu caseta și ghidaje laterale?",
  firstH3Text:
    "Aceste sisteme sunt o alternativă modernă și eficientă la geamurile tradiționale. Sunt ideale pentru protejarea teraselor, balcoanelor și a altor spații exterioare împotriva vântului, ploii și zăpezii. Sistemul include o casetă din aluminiu și ghidaje laterale, toate vopsite electrostatic pentru o durabilitate extinsă.",
  secondH3: "Beneficii",
  secondH3Text: [
    {
      title: "Protecție superioară: ",
      text: "Ideale pentru protejarea teraselor și balcoanelor împotriva intemperiilor.",
    },
    {
      title: "Estetică modernă: ",
      text: "Caseta din aluminiu și ghidajele laterale asigură un aspect curat și elegant.",
    },
    {
      title: "Luminozitate naturală: ",
      text: "Polimerul transparent permite pătrunderea luminii naturale.",
    },
  ],
  thirdH3: "Exemple de utilizare",
  thirdH3Text: [
    {
      title: "Balcoane: ",
      text: "Perfecte pentru spațiile exterioare care necesită protecție suplimentară.",
    },
    {
      title: "Terase rezidențiale: ",
      text: "Oferă protecție și confort în orice anotimp.",
    },
    {
      title: "Spații comerciale: ",
      text: "Asigură confortul clienților în zonele exterioare.",
    },
  ],
};

const texts2 = {
  smallHeading: "Închideri Terase",
  bigHeading: "Închideri Terase cu Tambur – Tip Rulou",
  firstH3: "Ce sunt inchiderile terase cu tambur - tip rulou?",
  firstH3Text:
    "Sistemul de inchideri cu tambur de tip rulou este o soluție eficientă pentru protejarea teraselor și a altor spații exterioare. Datorită policristalului transparent, lumina naturală este păstrată, oferind un mediu plăcut și luminos.",
  secondH3: "Beneficii",
  secondH3Text: [
    {
      title: "Utilizare facilă: ",
      text: "Sistemul este simplu de manevrat, fie manual, fie electric.",
    },
    {
      title: "Rezistență la intemperii: ",
      text: "Proiectat să reziste la temperaturi scăzute și condiții meteo dure.",
    },
    {
      title: "Transparență: ",
      text: "Polimerul transparent păstrează lumina naturală în spațiul închis.",
    },
  ],
  thirdH3: "Exemple de utilizare",
  thirdH3Text: [
    {
      title: "Terase de case și vile: ",
      text: "Ideal pentru spațiile exterioare care necesită protecție sezonieră.",
    },
    {
      title: "Balcoane: ",
      text: "Oferă protecție suplimentară și păstrează lumina naturală.",
    },
    {
      title: "Spații comerciale: ",
      text: "Asigură confortul clienților și protecția necesară împotriva intemperiilor.",
    },
  ],
};

const texts3 = {
  smallHeading: "Închideri Terase",
  bigHeading: "Închideri Terase cu Capse și Bride",
  firstH3: "Ce sunt inchiderile terase cu capse și bride?",
  firstH3Text:
    "Pentru o soluție simplă și eficientă, inchiderile terase cu capse și bride oferă protecție excelentă pe durata anotimpului rece. Acest sistem utilizează policristal transparent de 0,8 mm grosime, perfect pentru izolarea termică a spațiilor exterioare.",
  secondH3: "Beneficii",
  secondH3Text: [
    {
      title: "Soluție economică: ",
      text: "Ideală pentru protecția temporară a teraselor.",
    },
    {
      title: "Izolare termică: ",
      text: "Materialul asigură un mediu confortabil și izolat.",
    },
    {
      title: "Ușor de montat: ",
      text: "Sistemul este simplu de instalat și utilizat.",
    },
  ],
  thirdH3: "Exemple de utilizare",
  thirdH3Text: [
    {
      title: "Terase rezidențiale: ",
      text: "Perfecte pentru spațiile exterioare pe timp de iarnă.",
    },
    {
      title: "Spații temporare: ",
      text: "Oferă protecție suplimentară în zonele exterioare temporare.",
    },
    {
      title: "Balcoane mici: ",
      text: "Protejează eficient spațiile exterioare de dimensiuni reduse.",
    },
  ],
};

const texts4 = {
  smallHeading: "Închideri Terase",
  bigHeading: "Închideri Terase cu Sticlă Pliabilă",
  firstH3: "Ce sunt inchiderile terase cu sticlă pliabilă?",
  firstH3Text:
    "Sistemul de inchideri terase cu sticlă pliabilă este soluția ideală pentru cei care doresc să combine protecția împotriva intemperiilor cu un design modern și elegant. Sticla securizată de 10 mm grosime și profilele din aluminiu extrudat asigură o durabilitate remarcabilă.",
  secondH3: "Beneficii",
  secondH3Text: [
    {
      title: "Aspect modern: ",
      text: "Design elegant cu sticlă securizată și profile din aluminiu.",
    },
    {
      title: "Durabilitate ridicată: ",
      text: "Sistem robust și rezistent la condiții meteo extreme.",
    },
    {
      title: "Flexibilitate: ",
      text: "Posibilitatea de a plia sticla pentru a deschide complet spațiul.",
    },
  ],
  thirdH3: "Exemple de utilizare",
  thirdH3Text: [
    {
      title: "Terase de lux: ",
      text: "Ideal pentru spațiile exterioare elegante și moderne.",
    },
    {
      title: "Balcoane cu vedere panoramică: ",
      text: "Asigură protecție și un aspect elegant.",
    },
    {
      title: "Spații exterioare ale restaurantelor: ",
      text: "Oferă un design modern și protecție completă.",
    },
  ],
};

const page = () => {
  return (
    <>
      <section className="max-w-screen-xl xl:mx-auto mx-10 my-28">
        <HomeHeading
          smallTitle="Închideri Terase"
          smallTitleCSS="justify-start"
          bigTitle="Introducere"
          bigTitleCSS="justify-center text-left mb-8"
        />
        <p className="mb-2">
          SunPro oferă soluții inovatoare pentru închiderea teraselor, concepute
          pentru a proteja spațiile exterioare de intemperii și pentru a
          transforma fiecare spațiu deschis într-un loc confortabil și protejat
          pe tot parcursul anului.
        </p>
        <p className="mb-6">
          La SunPro, oferim o gamă variată de soluții de închidere terase,
          inclusiv sisteme cu caseta și ghidaje laterale, sisteme de tip rulou,
          inchideri cu capse și bride și inchideri cu sticlă pliabilă, toate
          montate profesional pentru a satisface nevoile și preferințele
          clienților noștri.
        </p>
        <p className="mb-2">
          Soluțiile noastre de închidere terase sunt disponibile în următoarele
          categorii:
        </p>
        <ul className="flex flex-col gap-1">
          <li>
            <a
              href="#inchideri-cu-caseta"
              className="text-custom-orange underline underline-offset-4 font-bold"
            >
              1. Inchideri Terase cu Caseta și Ghidaje Laterale
            </a>
          </li>
          <li>
            <a
              href="#inchideri-cu-tambur"
              className="text-custom-orange underline underline-offset-4 font-bold"
            >
              2. Inchideri Terase cu Tambur – Tip Rulou
            </a>
          </li>
          <li>
            <a
              href="#inchideri-cu-capse"
              className="text-custom-orange underline underline-offset-4 font-bold"
            >
              3. Inchideri Terase cu Capse și Bride
            </a>
          </li>
          <li>
            <a
              href="#inchideri-cu-sticla-pliabila"
              className="text-custom-orange underline underline-offset-4 font-bold"
            >
              4. Inchideri Terase cu Sticlă Pliabilă
            </a>
          </li>
        </ul>
        <Button
          type="link"
          href="/contact"
          customClass="font-semibold w-full sm:w-[280px] mt-6"
          text="OBȚINE O CONSULTAȚIE"
          mainColor="blue"
          secondColor="orange"
        />
      </section>
      <ServiciiBlockModel1
        CTAButton={false}
        id="inchideri-cu-caseta"
        reversed={true}
        backgroundColor="bg-black text-white"
        smallHeading={texts.smallHeading}
        bigHeading={texts.bigHeading}
        firstH3={texts.firstH3}
        firstH3Text={texts.firstH3Text}
        secondH3={texts.secondH3}
        secondH3Text={texts.secondH3Text}
        thirdH3={texts.thirdH3}
        thirdH3Text={texts.thirdH3Text}
      />
      <ServiciiBlockModel1
        CTAButton={true}
        id="inchideri-cu-tambur"
        reversed={false}
        backgroundColor="bg-white text-black"
        smallHeading={texts2.smallHeading}
        bigHeading={texts2.bigHeading}
        firstH3={texts2.firstH3}
        firstH3Text={texts2.firstH3Text}
        secondH3={texts2.secondH3}
        secondH3Text={texts2.secondH3Text}
        thirdH3={texts2.thirdH3}
        thirdH3Text={texts2.thirdH3Text}
      />
      <ServiciiBlockModel1
        CTAButton={false}
        id="inchideri-cu-capse"
        reversed={true}
        backgroundColor="bg-black text-white"
        smallHeading={texts3.smallHeading}
        bigHeading={texts3.bigHeading}
        firstH3={texts3.firstH3}
        firstH3Text={texts3.firstH3Text}
        secondH3={texts3.secondH3}
        secondH3Text={texts3.secondH3Text}
        thirdH3={texts3.thirdH3}
        thirdH3Text={texts3.thirdH3Text}
      />
      <ServiciiBlockModel1
        CTAButton={true}
        id="inchideri-cu-sticla-pliabila"
        reversed={false}
        backgroundColor="bg-white text-black"
        smallHeading={texts4.smallHeading}
        bigHeading={texts4.bigHeading}
        firstH3={texts4.firstH3}
        firstH3Text={texts4.firstH3Text}
        secondH3={texts4.secondH3}
        secondH3Text={texts4.secondH3Text}
        thirdH3={texts4.thirdH3}
        thirdH3Text={texts4.thirdH3Text}
      />
      <ImageGallery smallHeading="Închideri Terase" bigHeading="Galerie" />
      <CTA />
    </>
  );
};

export default page;
