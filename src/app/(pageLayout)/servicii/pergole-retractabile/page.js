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
  title: "Pergole Retractabile",
  description:
    "Pergolele retractabile sunt soluția ideală pentru acoperirea teraselor, a restaurantelor și a cafenelelor, oferind protecție și confort maxim.",
  keywords: [
    "pergole retractabile",
    "pergolă retractabilă",
    "pergola retractabila pret",
    "pergole terasa retractabile",
    "pergole terase retractabile",
    "terase retractabile pret",
    "pergole terasa retractabile pret",
    "pergole bioclimatice retractabile",
    "montaj pergola retractabila",
    "pergole retractabile bucuresti",
  ],
};

const texts = {
  smallHeading: "Pergole Retractabile",
  bigHeading: "Ce sunt Pergolele Retractabile?",
  firstH3Text:
    "Pergola retractabilă este un tip de copertină destinată acoperirii unor suprafețe mari, precum terasele, restaurantele și cafenelele. Aceste structuri sunt construite din profile de aluminiu extrudat, ceea ce le conferă o rezistență deosebită. ",
  secondH3: "Beneficii",
  secondH3Text: [
    {
      title: "Flexibilitate",
      text: "Pergolele pot fi extinse sau retrase cu ușurință, asigurând un control precis al umbririi.",
    },
    {
      title: "Protecție",
      text: "Materialele utilizate sunt impermeabile și rezistente la condiții meteo extreme, inclusiv ploaie, vânt și zăpadă.",
    },
    {
      title: "Estetică modernă",
      text: "Designul elegant completează orice spațiu exterior, oferind un aspect contemporan.",
    },
  ],
  thirdH3: "Exemple de utilizare: ",
  thirdH3Text: [
    {
      text: "Terase mari, restaurante, cafenele, spații comerciale, grădini.",
    },
  ],
};

const photos = [];

for (let i = 1; i <= 18; i++) {
  photos.push({
    src: `/images/pergole-retractabile/sunpro-pergole-retractabile (${i}).webp`,
    width: 1000,
    height: 1000,
  });
}

const page = () => {
  return (
    <>
      <section className="max-w-screen-xl xl:mx-auto mx-10 my-10 lg:my-28">
        <HomeHeading
          smallTitle="Pergole Retractabile"
          smallTitleCSS="justify-start"
          bigTitle="Introducere"
          bigTitleCSS="justify-center text-left mb-8"
        />
        <p className="mb-2">
          Pergolele retractabile sunt soluția perfectă pentru a acoperi
          suprafețe mari, cum ar fi terasele, restaurantele și cafenelele,
          oferind un confort maxim fără a afecta libertatea de mișcare sub
          acestea.
        </p>
        <p className="mb-2">
          Realizate din materiale de înaltă calitate, aceste pergole combină
          funcționalitatea și designul modern pentru a transforma orice spațiu
          exterior într-un loc confortabil și protejat, indiferent de condițiile
          meteorologice.
        </p>
        <p className="mb-2">
          Acoperirea este realizată din poliplan PVC cu inserție de carbon, un
          material impermeabil și rezistent la intemperii, inclusiv la
          temperaturi scăzute și la zăpadă de până la 40 cm.
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
        image="/images/pergole-retractabile/sunpro-pergole-retractabile (14).webp"
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
      <ServiciiBlockModel2
        CTAButton={true}
        smallHeading="Pergole Retractabile"
        bigHeading="Beneficiile Pergolelor Retractabile"
        cards={[
          {
            title: "Protecție și Confort",
            text: [
              {
                subtitle: "Protecție împotriva razelor UV",
                description:
                  "Poliplanul din PVC utilizat în acoperirea pergolei este impermeabil și rezistent la intemperii, asigurând un spațiu protejat pe toată durata anului.",
              },
              {
                subtitle: "Confort în aer liber",
                description:
                  "Pergolele oferă un spațiu confortabil care poate fi folosit chiar și în timpul anotimpului rece, fără a fi afectat de temperaturile scăzute sau de zăpadă.",
              },
            ],
            icon: FaShieldAlt,
          },
          {
            title: "Flexibilitate și Control",
            text: [
              {
                subtitle: "Controlul umbririi",
                description:
                  "Acționarea electrică, disponibilă cu întrerupător și telecomandă, permite ajustarea rapidă și ușoară a pergolei în funcție de necesitățile momentului.",
              },
              {
                subtitle: "Senzor de vânt opțional",
                description:
                  "Sistemul poate fi echipat cu un senzor de vânt, care asigură protecție suplimentară în condiții meteorologice nefavorabile.",
              },
            ],
            icon: GiFlexibleStar,
          },
          {
            title: "Durabilitate",
            text: [
              {
                subtitle: "Materiale rezistente la intemperii",
                description:
                  "Profilele din aluminiu extrudat și acoperirea din PVC asigură o durată lungă de viață și o întreținere minimă.",
              },
              {
                subtitle: "Structuri robuste",
                description:
                  "Pergolele sunt concepute pentru a rezista la zăpadă cu o grosime de până la 40 cm, ceea ce le face ideale pentru utilizare în orice sezon.",
              },
            ],
            icon: FaHandFist,
          },
        ]}
      />
      <ServiciiBlockModel3
        image="/images/pergole-retractabile/sunpro-pergole-retractabile (17).webp"
        smallHeading="Pergole Retractabile"
        bigHeading="Tipuri de Pergole Retractabile"
        description="Pergolele retractabile se diferențiază prin materialele utilizate și funcționalitatea oferită. Printre cele mai populare tipuri se numără pergolele bioclimatice, cele din aluminiu și cele motorizate, fiecare având avantaje distincte în funcție de nevoile și stilul dorit."
        cards={[
          {
            title: "Bioclimatice",
            secondTitle: "Descriere",
            secondTitleText:
              "Pergolele bioclimatice sunt dotate cu lamele ajustabile care permit controlul temperaturii și al ventilației naturale, oferind confort optim în orice anotimp.",
            thirdTitle: "Avantaje",
            thirdTitleText:
              "Adaptabilitate în funcție de condițiile meteorologice, reglarea temperaturii și a luminii.",
          },
          {
            title: "Aluminiu",
            secondTitle: "Descriere",
            secondTitleText:
              "Pergolele din aluminiu sunt structuri ușoare și durabile, ideale pentru utilizări multiple, de la terase rezidențiale la spații comerciale.",
            thirdTitle: "Avantaje",
            thirdTitleText:
              "Rezistență la coroziune, întreținere ușoară, durabilitate extinsă.",
          },
          {
            title: "Motorizate",
            secondTitle: "Descriere",
            secondTitleText:
              "Aceste pergole sunt echipate cu un sistem de acționare electrică, care permite deschiderea și închiderea rapidă prin intermediul unei telecomenzi sau al unui întrerupător.",
            thirdTitle: "Avantaje",
            thirdTitleText:
              "Operare ușoară, confort sporit, opțiunea de a adăuga senzori de vânt pentru protecție suplimentară.",
          },
        ]}
      />
      <ImageGallery
        photos={photos}
        smallHeading="Pergole Retractabile"
        bigHeading="Galerie"
      />
      <WorkProcess />
      <CTA />
    </>
  );
};

export default page;
