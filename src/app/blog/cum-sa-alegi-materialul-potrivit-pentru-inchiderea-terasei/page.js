import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaTags, FaUser } from "react-icons/fa";
import RecentPosts from "@/components/RecentPosts";

export const metadata = {
  title:
    "Cum să alegi materialul potrivit pentru închiderea terasei: Sticlă vs. folie transparentă",
  description:
    "Alegerea materialului potrivit pentru închiderea terasei poate face diferența între un spațiu confortabil și unul neutilizabil. Află care sunt avantajele și dezavantajele sticlei și foliei transparente pentru terasa ta.",
  keywords: [
    "inchideri terasa",
    "inchideri terase",
    "închidere terasa",
    "închideri terase",
    "inchideri terase cu sticla",
    "terase inchise",
    "inchideri terase cu folie",
    "folie inchideri terase",
    "inchideri terase cu termopan",
    "inchideri terase cu sticla glisanta",
    "inchideri terase cu rulouri transparente casetate pret",
    "inchideri terase sticla",
    "inchideri terase cu folie transparenta",
  ],
};

export default function BlogPost() {
  return (
    <div className="lg:flex lg:max-w-7xl lg:mx-auto py-10 gap-10 mx-10 grid grid-cols-1">
      <article className="lg:w-3/4 w-full">
        <div className="bg-gray-100 mb-6 rounded-lg">
          <div className="relative overflow-hidden group">
            <Image
              src="/images/blog/blog (1).webp"
              alt="Cum să alegi materialul potrivit pentru închiderea terasei: Sticlă vs. folie transparentă"
              width={960}
              height={320}
              className="w-full h-80 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="vertical-rect"></div>
          </div>
          <div className="p-8">
            <h1 className="lg:text-4xl text-2xl font-bold mb-4">
              Cum să alegi materialul potrivit pentru închiderea terasei: Sticlă
              vs. folie transparentă
            </h1>
            <div className="flex items-center mb-6 text-[#f68a09] gap-1">
              <span className="flex items-center gap-2">
                <FaUser />
                <span className="text-gray-500 hover:text-[#f68a09]">
                  Mocanu Andrei
                </span>
              </span>
              <span className="mx-4 lg:block hidden">|</span>
              <span className="flex items-center gap-2 hover:text-[#f68a09]">
                <FaCalendarAlt />
                <span className="text-gray-500 hover:text-[#f68a09]">
                  16 August 2024
                </span>
              </span>
              <span className="mx-4 lg:block hidden">|</span>
              <span className="lg:flex hidden items-center gap-2 hover:text-[#f68a09]">
                <FaTags />
                <span className="text-gray-500 hover:text-[#f68a09]">
                  Închidere Terase
                </span>
              </span>
            </div>
            <h2 className="lg:text-2xl text-xl font-bold mb-4">Introducere</h2>
            <p className="lg:text-lg text-base">
              Închiderea unei terase poate transforma acest spațiu într-un loc
              utilizabil pe tot parcursul anului, indiferent de vreme. Alegerea
              materialului potrivit, fie că este vorba de închideri terase cu
              sticlă sau de închideri terase cu folie, depinde de mai mulți
              factori, cum ar fi durabilitatea, costul și estetica. Acest
              articol îți va oferi o comparație detaliată între sticlă și folie
              transparentă, pentru a te ajuta să faci cea mai bună alegere
              pentru terasa ta.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            1. Introducere: Nevoia de a închide terasa
          </h2>
          <p className="lg:text-lg text-base mb-4">
            Terasele sunt locuri ideale pentru relaxare, însă schimbările
            meteorologice pot limita timpul în care le folosim. Închiderea
            terasei cu materiale rezistente și eficiente devine o soluție
            atractivă pentru a extinde utilizarea spațiului pe tot parcursul
            anului. Fie că dorești protecție împotriva ploii, vântului sau
            frigului, materialul ales va influența direct confortul și
            durabilitatea amenajării.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            2. Materialele cele mai folosite pentru închiderea teraselor
          </h2>
          <p className="lg:text-lg text-base mb-4">
            Când vine vorba de închideri terase cu sticlă sau folie, există
            avantaje și dezavantaje pentru fiecare material. Sticla este
            cunoscută pentru durabilitate și estetică superioară, în timp ce
            folia transparentă oferă o soluție economică și flexibilă. Ambele
            materiale sunt utilizate frecvent în funcție de buget, scopul final
            și preferințele estetice.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            3. Avantajele și dezavantajele închiderii teraselor cu sticlă
          </h2>
          <p className="lg:text-lg text-base mb-4">
            <strong>Avantaje ale sticlei:</strong>
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Durabilitate ridicată: Sticla este extrem de rezistentă la
              intemperii și poate dura zeci de ani fără să se deterioreze.
            </li>
            <li>
              Transparență clară: Permite o vedere clară asupra exteriorului,
              oferind un aspect modern și elegant.
            </li>
            <li>
              Izolație termică și fonică: Sticla poate ajuta la menținerea unei
              temperaturi constante în interior și la reducerea zgomotului
              exterior.
            </li>
          </ul>
          <p className="lg:text-lg text-base mb-4">
            <strong>Dezavantaje ale sticlei:</strong>
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Costuri ridicate: Investiția inițială pentru închideri cu sticlă
              este considerabil mai mare decât alte materiale.
            </li>
            <li>
              Montaj complicat: Instalarea sticlei necesită expertiză și timp,
              ceea ce poate crește costurile de montaj.
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            4. Avantajele și dezavantajele închiderilor cu folie transparentă
          </h2>
          <p className="lg:text-lg text-base mb-4">
            <strong>Avantaje ale foliei transparente:</strong>
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Preț accesibil: Folia transparentă este mult mai ieftină decât
              sticla, fiind o opțiune populară pentru cei cu bugete mai
              restrânse.
            </li>
            <li>
              Flexibilitate: Poate fi montată și demontată cu ușurință, oferind
              o soluție temporară sau sezonieră pentru protecția terasei.
            </li>
            <li>
              Ușor de instalat: Instalarea foliei este simplă și rapidă, fără a
              necesita expertiză tehnică avansată.
            </li>
          </ul>
          <p className="lg:text-lg text-base mb-4">
            <strong>Dezavantaje ale foliei transparente:</strong>
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Durabilitate scăzută: Folia este susceptibilă la uzură, decolorare
              și rupere în condiții de vreme extremă.
            </li>
            <li>
              Izolație slabă: Spre deosebire de sticlă, folia nu izolează
              eficient terasa, permițând pierderi de căldură și pătrunderea
              zgomotelor exterioare.
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            5. Durabilitatea materialelor: Sticla vs. Folie
          </h2>
          <p className="lg:text-lg text-base mb-4">
            Sticla este un material robust și rezistent la șocuri și intemperii.
            Poate face față furtunilor, zăpezii și temperaturilor extreme, ceea
            ce o face ideală pentru închiderea permanentă a teraselor. Folia, pe
            de altă parte, are o durată de viață mai scurtă, în special în
            condiții de climă severă. Expunerea prelungită la soare și frig
            poate duce la degradarea rapidă a materialului, necesitând înlocuiri
            frecvente.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            6. Estetica și impactul vizual
          </h2>
          <p className="lg:text-lg text-base mb-4">
            Dacă aspectul terasei este o prioritate pentru tine, sticla oferă un
            finisaj modern și sofisticat. Liniile clare și transparența completă
            fac din sticlă alegerea preferată pentru terasele elegante și
            minimaliste. În schimb, folia transparentă oferă un aspect mai
            funcțional și mai puțin atractiv din punct de vedere estetic. Chiar
            dacă este transparentă, materialul poate avea reflexii sau ondulații
            care pot afecta estetica generală.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            7. Protecția termică și izolația
          </h2>
          <p className="lg:text-lg text-base mb-4">
            Sticla izolează mult mai bine o terasă decât folia. Sticla dublă sau
            triplă poate păstra căldura în timpul iernii și poate reduce nevoia
            de încălzire suplimentară. În plus, sticla este eficientă în
            menținerea unei temperaturi confortabile în timpul verii, reflectând
            o parte din razele solare. Folia, deși oferă protecție împotriva
            vântului și ploii, nu este eficientă din punct de vedere termic,
            permițând fluctuații de temperatură.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            8. Costurile inițiale: investiție în funcție de buget
          </h2>
          <p className="lg:text-lg text-base mb-4">
            Costurile variază semnificativ între sticlă și folie. Sticla este o
            soluție premium, cu costuri ridicate de achiziție și instalare. În
            funcție de complexitatea lucrării, prețul poate crește considerabil.
            Folia, pe de altă parte, este mult mai accesibilă, ceea ce o face o
            opțiune viabilă pentru proiectele cu bugete limitate.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            9. Costurile pe termen lung și întreținerea
          </h2>
          <p className="lg:text-lg text-base mb-4">
            Deși sticla implică un cost inițial mai mare, întreținerea ei este
            minimă, necesitând doar curățare periodică. Odată instalată, poate
            dura ani fără a necesita intervenții majore. În schimb, folia
            necesită înlocuire frecventă, mai ales dacă este expusă la condiții
            meteo dure. De-a lungul timpului, aceste înlocuiri constante pot
            depăși costurile inițiale mai mici ale foliei.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">Concluzie</h2>
          <p className="lg:text-lg text-base">
            Alegerea dintre sticlă și folie pentru închiderea terasei depinde de
            prioritățile tale. Dacă pui accent pe durabilitate, izolație și
            estetică, sticla este cea mai bună alegere. Dacă bugetul și
            flexibilitatea sunt factori cheie, folia transparentă poate fi o
            soluție potrivită.
          </p>
        </div>
      </article>

      {/* Bara laterală - Postări Recente */}
      <RecentPosts exclude={3} />
    </div>
  );
}
