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
import WorkProcess from "@/components/WorkProcess";

export const metadata = {
  title: "Prelate PVC",
  description:
    "Prelatele PVC sunt soluții versatile și durabile pentru acoperirea și protejarea diferitelor tipuri de spații, de la terase și balcoane la vehicule și echipamente industriale.",
  keywords: [
    "prelate pvc",
    "pvc-u",
    "material pvc",
    "prelata pvc",
    "prelata 3x4",
    "prelata 4x4",
    "prelata 6x4",
    "prelata 2x3",
    "prelata 4x6",
    "folie pvc constructii",
    "prelata 4x5",
    "prelata 6x6",
    "prelata 2x2",
    "prelata 3x5",
    "prelata 5x4",
    "prelata 5x6",
    "prelate pt terase",
    "prelata 6x3",
    "prelata 8x4",
    "prelata 8x6",
  ],
};

const texts = {
  smallHeading: "Prelate PVC",
  bigHeading: "Ce sunt Prelatele PVC?",
  firstH3Text:
    "Prelatele PVC sunt soluții versatile și durabile pentru acoperirea și protejarea diferitelor tipuri de spații, de la terase și balcoane la vehicule și echipamente industriale. Fabricate din material PVC de înaltă calitate, acestea oferă protecție superioară împotriva intemperiilor.",
  secondH3: "Beneficii",
  secondH3Text: [
    {
      title: "Protecție avansată",
      text: "Materialul PVC este impermeabil și rezistent la razele UV, oferind protecție eficientă împotriva ploii, vântului și expunerii prelungite la soare.",
    },
    {
      title: "Durabilitate",
      text: "Prelatele PVC sunt extrem de rezistente și au o durată lungă de viață, chiar și în condiții de utilizare intensă.",
    },
    {
      title: "Versatilitate",
      text: "Aceste prelate pot fi utilizate într-o varietate de aplicații, de la acoperirea teraselor până la protejarea echipamentelor industriale.",
    },
  ],
  thirdH3: "Exemple de utilizare: ",
  thirdH3Text: [
    {
      text: "Terase, balcoane, vehicule, echipamente industriale, depozite.",
    },
  ],
};

const photos = [];

for (let i = 1; i <= 14; i++) {
  photos.push({
    src: `/images/prelate-pvc/sunpro-prelate-pvc (${i}).webp`,
    width: 1000,
    height: 1000,
  });
}

const page = () => {
  return (
    <>
      <section className="max-w-screen-xl xl:mx-auto mx-10 my-10 lg:my-28">
        <HomeHeading
          smallTitle="Prelate PVC"
          smallTitleCSS="justify-start"
          bigTitle="Introducere"
          bigTitleCSS="justify-center text-left mb-8"
        />
        <p className="mb-2">
          Prelatele PVC sunt soluția ideală pentru protecția diverselor tipuri
          de spații și echipamente, asigurând o rezistență sporită la condițiile
          meteorologice nefavorabile.
        </p>
        <p className="mb-2">
          Datorită materialului PVC de înaltă calitate, aceste prelate sunt
          impermeabile și protejează eficient împotriva razelor UV, oferind
          astfel un grad ridicat de protecție și durabilitate.
        </p>
        <p className="mb-2">
          Acestea sunt disponibile într-o varietate de dimensiuni și culori,
          adaptându-se perfect nevoilor și preferințelor fiecărui client.
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
        image="/images/prelate-pvc/sunpro-prelate-pvc (2).webp"
        CTAButton={false}
        id="prelate-pvc"
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
        smallHeading="Prelate PVC"
        bigHeading="Beneficiile Prelatelor PVC"
        cards={[
          {
            title: "Protecție și Durabilitate",
            text: [
              {
                subtitle: "Impermeabilitate",
                description:
                  "Prelatele PVC oferă protecție completă împotriva apei, fiind ideale pentru acoperirea spațiilor exterioare.",
              },
              {
                subtitle: "Rezistență la UV",
                description:
                  "Materialul PVC protejează împotriva deteriorării cauzate de razele UV, prelungind durata de viață a prelatei.",
              },
            ],
            icon: FaShieldAlt,
          },
          {
            title: "Flexibilitate și Control",
            text: [
              {
                subtitle: "Adaptabilitate",
                description:
                  "Prelatele pot fi personalizate în funcție de dimensiuni și culori, pentru a se potrivi perfect cerințelor fiecărui proiect.",
              },
              {
                subtitle: "Ușurință în utilizare",
                description:
                  "Acestea sunt ușor de instalat și demontat, oferind confort și practicitate.",
              },
            ],
            icon: GiFlexibleStar,
          },
          {
            title: "Versatilitate",
            text: [
              {
                subtitle: "Aplicații diverse",
                description:
                  "Prelatele PVC pot fi utilizate într-o gamă largă de aplicații, inclusiv pentru protecția vehiculelor, echipamentelor și depozitelor.",
              },
              {
                subtitle: "Disponibilitate",
                description:
                  "Sunt disponibile într-o varietate de dimensiuni și culori, adaptabile la orice tip de proiect.",
              },
            ],
            icon: FaHandFist,
          },
        ]}
      />
      <ServiciiBlockModel3
        image="/images/prelate-pvc/sunpro-prelate-pvc (6).webp"
        smallHeading="Prelate PVC"
        bigHeading="Tipuri de Prelate PVC"
        description="Prelatele PVC variază în funcție de grosimea și calitatea materialului, oferind soluții adaptate nevoilor specifice fiecărui client. Printre cele mai populare tipuri se numără prelatele standard, prelatele pentru vehicule și prelatele industriale."
        cards={[
          {
            title: "Standard",
            secondTitle: "Descriere",
            secondTitleText:
              "Prelatele standard sunt ideale pentru acoperirea teraselor, balcoanelor și altor spații exterioare, oferind o protecție eficientă împotriva intemperiilor.",
            thirdTitle: "Avantaje",
            thirdTitleText:
              "Impermeabilitate, ușurință în instalare, durabilitate.",
          },
          {
            title: "Pentru vehicule",
            secondTitle: "Descriere",
            secondTitleText:
              "Aceste prelate sunt proiectate pentru a proteja vehiculele de intemperii și razele UV, asigurând o durată lungă de viață.",
            thirdTitle: "Avantaje",
            thirdTitleText:
              "Protecție UV, durabilitate, disponibilitate în diferite dimensiuni.",
          },
          {
            title: "Industriale",
            secondTitle: "Descriere",
            secondTitleText:
              "Prelatele industriale sunt utilizate pentru a proteja echipamentele și materialele din depozite sau fabrici, oferind o protecție robustă.",
            thirdTitle: "Avantaje",
            thirdTitleText:
              "Rezistență sporită, protecție împotriva condițiilor dure de mediu, personalizare disponibilă.",
          },
        ]}
      />
      <ImageGallery
        photos={photos}
        smallHeading="Prelate PVC"
        bigHeading="Galerie"
      />
      <WorkProcess />
      <CTA />
    </>
  );
};

export default page;
