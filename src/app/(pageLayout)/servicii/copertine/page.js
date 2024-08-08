import CTA from "@/components/CTA";
import Button from "@/components/custom ui/Button";
import HomeHeading from "@/components/custom ui/HomeHeading";
import ImageGallery from "@/components/ImageGallery";
import ServiciiBlockModel1 from "@/components/pages/servicii/ServiciiBlockModel1";
import React from "react";

const texts = {
  smallHeading: "Copertine",
  bigHeading: "Copertine cu brațe laterale",
  firstH3: "Ce sunt copertinele cu brațe laterale?",
  firstH3Text:
    "Copertinele cu brațe laterale sunt proiectate pentru a oferi protecție solară eficientă și ajustabilitate. Acestea sunt prevăzute cu brațe articulate care permit reglarea unghiului și extinderea copertinei după necesități.",
  secondH3: "Beneficii",
  secondH3Text: [
    {
      title: "Protecție solară: ",
      text: "Blochează eficient razele UV.",
    },
    {
      title: "Ajustabilitate: ",
      text: "Permite reglarea unghiului și a lungimii extinse.",
    },
    {
      title: "Durabilitate: ",
      text: "Materiale rezistente la intemperii și uzură.",
    },
  ],
  thirdH3: "Exemple de utilizare",
  thirdH3Text: [
    {
      title: "Terase: ",
      text: "Ideal pentru spații exterioare de relaxare.",
    },
    {
      title: "Grădini: ",
      text: "Protejează plantele și mobilierul de grădină.",
    },
    {
      title: "Spații comerciale: ",
      text: "Oferă confort clienților în zonele de exterior.",
    },
  ],
};

const texts2 = {
  smallHeading: "Copertine",
  bigHeading: "Copertine cu casetă",
  firstH3: "Ce sunt copertinele cu casetă?",
  firstH3Text:
    "Copertinele cu casetă sunt echipate cu un mecanism care închide complet copertina într-o casetă protectoare atunci când nu este utilizată. Aceasta prelungește durata de viață a materialului și menține un aspect curat și modern.",
  secondH3: "Beneficii",
  secondH3Text: [
    {
      title: "Protecție completă: ",
      text: "Materialul este protejat în totalitate de casetă.",
    },
    {
      title: "Design modern: ",
      text: "Aspect estetic și elegant.",
    },
    {
      title: "Durabilitate: ",
      text: "Rezistență crescută datorită protecției oferite de casetă.",
    },
  ],
  thirdH3: "Exemple de utilizare",
  thirdH3Text: [
    {
      title: "Balcoane: ",
      text: "Asigură intimitate și protecție.",
    },
    {
      title: "Ferestre: ",
      text: "Protejează interiorul de razele solare directe.",
    },
    {
      title: "Spații comerciale: ",
      text: "Adaugă valoare estetică și funcțională.",
    },
  ],
};

const texts3 = {
  smallHeading: "Copertine",
  bigHeading: "Copertine fixe - capotine",
  firstH3: "Ce sunt copertinele fixe - capotine?",
  firstH3Text:
    "Copertinele fixe, cunoscute și ca capotine, sunt structuri rigide care oferă protecție permanentă. Acestea sunt ideale pentru zonele care necesită o protecție constantă și durabilă.",
  secondH3: "Beneficii",
  secondH3Text: [
    {
      title: "Rezistență în condiții meteo extreme: ",
      text: "Construcție solidă care rezistă vântului puternic și ploii.",
    },
    {
      title: "Întreținere redusă: ",
      text: "Necesită minimă întreținere datorită construcției robuste.",
    },
  ],
  thirdH3: "Exemple de utilizare",
  thirdH3Text: [
    {
      title: "Intrări de clădiri: ",
      text: "Protejează intrarea de intemperii.",
    },
    {
      title: "Ferestre: ",
      text: "Reduce căldura solară și protejează geamurile.",
    },
  ],
};

const texts4 = {
  smallHeading: "Copertine",
  bigHeading: "Copertine retractabile",
  firstH3: "Ce sunt copertinele retractabile?",
  firstH3Text:
    "Copertinele retractabile sunt sisteme flexibile care permit extinderea și retragerea copertinei în funcție de necesități, oferind astfel control complet asupra expunerii la soare și umbră.",
  secondH3: "Beneficii",
  secondH3Text: [
    {
      title: "Flexibilitate: ",
      text: "Poate fi ajustată în funcție de condițiile meteorologice.",
    },
    {
      title: "Economie de spațiu: ",
      text: "Retractabilitatea permite economisirea spațiului când nu este utilizată.",
    },
    {
      title: "Control facil: ",
      text: "Ușor de manevrat, manual sau automat.",
    },
  ],
  thirdH3: "Exemple de utilizare",
  thirdH3Text: [
    {
      title: "Terase: ",
      text: "Ideal pentru controlul expunerii la soare.",
    },
    {
      title: "Spații comerciale: ",
      text: "Oferă confort clienților și flexibilitate pentru afaceri.",
    },
    {
      title: "Grădini: ",
      text: "Protejează zonele verzi și mobilierul de exterior.",
    },
  ],
};

const page = () => {
  return (
    <>
      <section className="max-w-screen-xl xl:mx-auto mx-10 my-28">
        <HomeHeading
          smallTitle="Copertine"
          smallTitleCSS="justify-start"
          bigTitle="Introducere"
          bigTitleCSS="justify-center text-left mb-8"
        />
        <p className="mb-2">
          Copertinele reprezintă o soluție practică și estetică pentru protecția
          spațiilor exterioare împotriva soarelui, ploii și altor condiții
          meteorologice.
        </p>
        <p className="mb-6">
          La SunPro, oferim o gamă variată de copertine, inclusiv copertine cu
          brațe laterale, copertine cu casetă, copertine fixe (capotine) și
          copertine retractabile, toate montate profesional pentru a satisface
          nevoile și preferințele clienților noștri.
        </p>
        <p className="mb-2">
          Copertinele pe care le oferim sunt disponibile în următoarele
          categorii:
        </p>
        <ul className="flex flex-col gap-1">
          <li>
            <a
              href="#copertine-cu-brate-laterale"
              className="text-custom-orange underline underline-offset-4 font-bold"
            >
              1. Copertine cu brațe laterale
            </a>
          </li>
          <li>
            <a
              href="#copertine-cu-caseta"
              className="text-custom-orange underline underline-offset-4 font-bold"
            >
              2. Copertine cu casetă
            </a>
          </li>
          <li>
            <a
              href="#copertine-fixe-capotine"
              className="text-custom-orange underline underline-offset-4 font-bold"
            >
              3. Copertine fixe - capotine
            </a>
          </li>
          <li>
            <a
              href="#copertine-retractabile"
              className="text-custom-orange underline underline-offset-4 font-bold"
            >
              4. Copertine retractabile
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
        id="copertine-cu-brate-laterale"
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
        id="copertine-cu-caseta"
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
        id="copertine-fixe-capotine"
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
        id="copertine-retractabile"
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
      <ImageGallery />
      <CTA />
    </>
  );
};

export default page;
