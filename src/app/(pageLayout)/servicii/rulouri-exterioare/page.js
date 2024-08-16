import CTA from "@/components/CTA";
import HomeHeading from "@/components/custom ui/HomeHeading";
import ImageGallery from "@/components/ImageGallery";
import ServiciiBlockModel1 from "@/components/pages/servicii/ServiciiBlockModel1";
import ServiciiBlockModel2 from "@/components/pages/servicii/ServiciiBlockModel2";
import { FaShieldAlt } from "react-icons/fa";
import { GiFlexibleStar } from "react-icons/gi";
import { FaHandFist } from "react-icons/fa6";
import Button from "@/components/custom ui/Button";
import ServiciiBlockModel3 from "@/components/pages/servicii/ServiciiBlockModel3";

const texts = {
  smallHeading: "Rulouri Exterioare",
  bigHeading: "Ce sunt Rulourile Exterioare?",
  firstH3Text:
    "Rulourile exterioare sunt destinate pentru protecția împotriva radiației solare a spațiilor interioare și realizarea unui ambient plăcut, crescând gradul de confort termic și fonic. Lamelele rulourilor sunt realizate din aluminiu, iar umplutura acestora este realizată prin injectare cu spumă poliuretanică.",
  secondH3: "Beneficii",
  secondH3Text: [
    {
      title: "Protecție solară și confort",
      text: "Rulourile exterioare oferă protecție eficientă împotriva radiației solare și contribuie la menținerea unui confort termic optim în interiorul locuinței.",
    },
    {
      title: "Izolație termică și fonică",
      text: "Lamelele din aluminiu umplute cu spumă poliuretanică asigură o izolație termică și fonică excelentă, reducând zgomotul exterior și economisind energie.",
    },
    {
      title: "Versatilitate și personalizare",
      text: "Rulourile sunt disponibile în diverse culori și pot fi personalizate pentru a se potrivi perfect cu estetica clădirii.",
    },
  ],
  thirdH3: "Exemple de utilizare: ",
  thirdH3Text: [
    {
      text: "Ferestre, balcoane, terase, spații comerciale.",
    },
  ],
};

const page = () => {
  return (
    <>
      <section className="max-w-screen-xl xl:mx-auto mx-10 my-28">
        <HomeHeading
          smallTitle="Rulouri Exterioare"
          smallTitleCSS="justify-start"
          bigTitle="Introducere"
          bigTitleCSS="justify-center text-left mb-8"
        />
        <p className="mb-2">
          Rulourile exterioare sunt soluția ideală pentru protecția eficientă
          împotriva radiațiilor solare și pentru îmbunătățirea confortului
          termic și fonic al spațiilor interioare.
        </p>
        <p className="mb-2">
          Lamelele rulourilor sunt fabricate din aluminiu de înaltă calitate și
          sunt umplute cu spumă poliuretanică, ceea ce asigură durabilitate și
          performanță ridicată. Există două tipuri principale de rulouri
          exterioare: rulouri suprapuse, care se montează împreună cu tâmplăria,
          și rulouri aplicate, ideale pentru ferestrele cu tâmplăria deja
          instalată.
        </p>
        <p className="mb-2">
          Rulourile pot fi simple sau echipate cu plasă de insecte, oferind
          astfel protecție suplimentară. Acestea pot fi acționate manual, cu
          șnur, panglică sau manivelă, ori electric, cu ajutorul unui motor
          electric controlat prin buton sau telecomandă.
        </p>
        <Button
          type="link"
          href="/contact"
          customClass="font-semibold w-full sm:w-[280px] mt-8"
          text="OBȚINE O CONSULTAȚIE"
          mainColor="blue"
          secondColor="orange"
        />
      </section>
      <ServiciiBlockModel1
        CTAButton={false}
        id="rulouri-exterioare"
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
      <ServiciiBlockModel2
        CTAButton={true}
        smallHeading="Rulouri Exterioare"
        bigHeading="Beneficiile Rulourilor Exterioare"
        cards={[
          {
            title: "Protecție și Confort",
            text: [
              {
                subtitle: "Protecție solară eficientă",
                description:
                  "Rulourile exterioare blochează radiațiile solare, menținând interiorul răcoros și confortabil chiar și în zilele cele mai călduroase.",
              },
              {
                subtitle: "Izolație fonică",
                description:
                  "Materialele utilizate reduc considerabil zgomotul exterior, oferind un spațiu liniștit și relaxant.",
              },
            ],
            icon: FaShieldAlt,
          },
          {
            title: "Durabilitate și Rezistență",
            text: [
              {
                subtitle: "Materiale de înaltă calitate",
                description:
                  "Lamelele din aluminiu umplute cu spumă poliuretanică oferă rezistență și durabilitate pe termen lung.",
              },
              {
                subtitle: "Rezistență la intemperii",
                description:
                  "Rulourile sunt concepute pentru a rezista în condiții meteorologice extreme, protejând eficient împotriva ploii, vântului și zăpezii.",
              },
            ],
            icon: FaHandFist,
          },
          {
            title: "Opțiuni de Personalizare",
            text: [
              {
                subtitle: "Culori diverse",
                description:
                  "Disponibile într-o gamă variată de culori, inclusiv alb, maro, maro închis și imitație lemn (stejar auriu, nuc, wenge, mahon).",
              },
              {
                subtitle: "Sisteme de acționare",
                description:
                  "Rulourile pot fi acționate manual sau electric, în funcție de preferințele și nevoile utilizatorului.",
              },
            ],
            icon: GiFlexibleStar,
          },
        ]}
      />
      <ServiciiBlockModel3
        smallHeading="Rulouri Exterioare"
        bigHeading="Tipuri de Rulouri Exterioare"
        description="Există două tipuri principale de rulouri exterioare: rulourile suprapuse, care se montează odată cu tâmplăria, și rulourile aplicate, care se pot instala pe tâmplăria deja existentă sau direct pe zidărie. Fiecare tip oferă opțiuni variate pentru a se potrivi diferitelor cerințe estetice și funcționale."
        cards={[
          {
            title: "Rulouri suprapuse",
            secondTitle: "Descriere",
            secondTitleText:
              "Aceste rulouri se montează împreună cu tâmplăria, caseta fiind fixată deasupra acesteia. Sunt ideale pentru clădirile aflate în construcție sau renovare.",
            thirdTitle: "Avantaje",
            thirdTitleText:
              "Integrate perfect cu tâmplăria, protecție sporită împotriva intemperiilor.",
          },
          {
            title: "Rulouri aplicate",
            secondTitle: "Descriere",
            secondTitleText:
              "Rulourile aplicate se pot monta pe tâmplăria deja existentă sau pe zidărie, în funcție de cerințele specifice ale clădirii.",
            thirdTitle: "Avantaje",
            thirdTitleText:
              "Versatilitate în instalare, disponibile cu sau fără plasă de insecte.",
          },
        ]}
      />
      <ImageGallery smallHeading="Rulouri Exterioare" bigHeading="Galerie" />
      <WorkProcess />
      <CTA />
    </>
  );
};

export default page;
