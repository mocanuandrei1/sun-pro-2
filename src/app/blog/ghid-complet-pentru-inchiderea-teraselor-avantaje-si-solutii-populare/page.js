import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaTags, FaUser } from "react-icons/fa";

export default function BlogPost() {
  return (
    <div className="lg:flex lg:max-w-7xl lg:mx-auto py-10 gap-10 mx-10 grid grid-cols-1">
      <article className="lg:w-3/4 w-full">
        <div className="bg-gray-100 mb-6 rounded-lg">
          <div className="relative overflow-hidden group">
            <Image
              src="/images/inchideri-terase/sunpro-inchideri-terase (16).webp"
              alt="Ghid complet pentru închiderea teraselor: Avantaje și soluții populare"
              width={1000}
              height={1000}
              className="w-full h-80 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="vertical-rect"></div>
          </div>
          <div className="p-8">
            <h1 className="lg:text-4xl text-2xl font-bold mb-4">
              Ghid complet pentru închiderea teraselor: Avantaje și soluții
              populare
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
              În ultimii ani, închiderea teraselor a devenit o practică tot mai
              populară în rândul proprietarilor de case și apartamente. De la
              protejarea împotriva condițiilor meteo nefavorabile până la
              crearea unui spațiu suplimentar de locuit, terasele închise oferă
              o varietate de beneficii. În acest ghid detaliat, vom explora
              avantajele închiderii teraselor, precum și cele mai eficiente și
              populare soluții disponibile.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            1. Introducere: Importanța închiderii teraselor
          </h2>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            A. Definiția și scopul închiderii teraselor
          </h3>
          <p className="lg:text-lg text-base mb-4">
            O terasă închisă se referă la un spațiu exterior parțial sau complet
            închis cu ajutorul unor materiale variate, cum ar fi sticla, folia
            transparentă, sau rulourile retractabile. Scopul principal este de a
            proteja acest spațiu împotriva intemperiilor și de a extinde
            perioada de utilizare a terasei, indiferent de anotimp.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            B. Evoluția utilizării teraselor și nevoia de adaptare la condițiile
            meteo
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Inițial, terasele au fost gândite ca spații deschise pentru relaxare
            și socializare în aer liber, dar datorită variabilității vremii și
            nevoii de confort, proprietarii de locuințe au început să le
            adapteze prin închidere. Astfel, terasele pot fi utilizate pe tot
            parcursul anului, indiferent de vreme.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            2. Avantajele principale ale închiderii teraselor
          </h2>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            A. Protecție împotriva intemperiilor: ploaie, vânt, zăpadă
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Una dintre cele mai evidente avantaje este protecția oferită de
            terasele închise împotriva elementelor naturale, precum ploaia,
            vântul sau zăpada. Închiderea terasei face posibilă utilizarea
            spațiului și pe timp de iarnă sau în zilele ploioase.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            B. Extinderea spațiului de locuit și utilizare pe tot parcursul
            anului
          </h3>
          <p className="lg:text-lg text-base mb-4">
            O terasă închisă devine o extensie naturală a casei, oferind un
            spațiu suplimentar pentru activități de zi cu zi, relaxare, sau
            chiar pentru mese în familie. Acest lucru crește valoarea locuinței
            și îmbunătățește confortul general.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            C. Creșterea confortului și funcționalității
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Închiderea terasei contribuie la crearea unui mediu mai confortabil,
            reducând expunerea la vânt și praf și permițând instalarea unor
            elemente precum mobilier, decoruri sau echipamente de divertisment
            care nu ar putea fi utilizate în aer liber neprotejate.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            D. Izolarea fonică și protecția împotriva zgomotului
          </h3>
          <p className="lg:text-lg text-base mb-4">
            În funcție de soluția aleasă, închiderea terasei poate oferi și un
            grad ridicat de izolare fonică, protejându-vă de zgomotul traficului
            sau al altor activități din exterior.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            3. Soluții populare pentru închiderea teraselor
          </h2>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            A. Închiderea terasei cu sticlă
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Sticla este una dintre cele mai utilizate soluții datorită
            aspectului modern și protecției eficiente. Sistemele din sticlă pot
            fi glisante sau fixe, oferind o vedere clară și o protecție
            excelentă împotriva intemperiilor.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            B. Folii transparente pentru terase
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Foliile din PVC sau vinil sunt soluții temporare și accesibile
            pentru protecția împotriva vântului și a ploii. Acestea sunt ușor de
            montat și pot fi îndepărtate la nevoie.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            C. Rulouri și copertine retractabile
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Rulourile retractabile sunt o soluție flexibilă pentru terasele care
            nu necesită protecție completă. Acestea pot fi confecționate din
            materiale textile, lemn sau plastic.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            D. Panouri mobile sau pliabile pentru flexibilitate
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Panourile mobile din sticlă, lemn sau alte materiale permit
            reorganizarea spațiului după nevoi. Acestea pot fi utilizate pentru
            a crea pereți temporari și pot fi mutate cu ușurință.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            E. Pergole închise și soluții semi-permanente
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Pergolele cu închideri laterale oferă un echilibru între o soluție
            deschisă și una închisă. Ele permit protecție împotriva soarelui și
            ploii, menținând totodată o conexiune cu exteriorul.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            4. Închiderea terasei cu sticlă
          </h2>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            A. Tipuri de sticlă utilizate: securizată, termopan, laminată
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Pentru închiderea teraselor se folosesc mai multe tipuri de sticlă,
            precum sticla securizată, care este rezistentă la impacturi, sticla
            termopan, care oferă o bună izolare termică, și sticla laminată,
            ideală pentru protecția solară.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            B. Avantaje: claritate, protecție și design modern
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Sticla oferă un design elegant și modern, asigurând în același timp
            o protecție optimă împotriva intemperiilor. Vederea clară păstrează
            legătura cu natura înconjurătoare, fără a sacrifica confortul.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            C. Dezavantaje: costuri ridicate, necesitatea întreținerii
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Unul dintre principalele dezavantaje ale sticlei este prețul
            ridicat, atât pentru achiziție, cât și pentru montaj. În plus,
            necesită o întreținere regulată pentru a păstra aspectul impecabil.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            D. Modele populare: sticlă glisantă, fixă sau cu rame
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Sistemele de sticlă glisantă sunt populare datorită flexibilității
            lor, permițând deschiderea completă a terasei atunci când condițiile
            meteo sunt favorabile. Modelele fixe sunt mai stabile, dar mai puțin
            flexibile.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            5. Folii transparente pentru terase
          </h2>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            A. Materiale utilizate: PVC, vinil
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Foliile transparente sunt realizate din materiale precum PVC sau
            vinil, care sunt rezistente la apă și vânt, dar oferă mai puțină
            protecție termică comparativ cu alte soluții.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            B. Avantaje: flexibilitate, costuri reduse, montaj rapid
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Foliile transparente sunt o soluție economică și practică pentru cei
            care doresc o protecție temporară. Ele sunt ușor de montat și
            demontat, fiind ideale pentru utilizarea sezonieră.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            C. Dezavantaje: durabilitate redusă, estetică inferioară
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Comparativ cu alte opțiuni, foliile transparente au o durabilitate
            mai scăzută și nu oferă un aspect estetic la fel de atractiv ca
            sticla sau alte soluții permanente.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            D. Întreținere și curățare
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Curățarea foliilor este esențială pentru a menține transparența și
            pentru a prelungi durata de viață a acestora. Ele pot fi șterse ușor
            cu apă și detergent ușor.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            6. Rulouri și copertine retractabile
          </h2>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            A. Tipuri de rulouri: textile, din plastic, lemn
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Rulourile retractabile sunt disponibile într-o gamă variată de
            materiale, fiecare cu propriile avantaje. Cele din lemn oferă un
            aspect natural, în timp ce rulourile textile sunt ușor de manevrat
            și oferă un grad ridicat de personalizare.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            B. Avantaje: soluție flexibilă, protecție parțială
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Principalul avantaj al rulourilor este flexibilitatea acestora. Ele
            pot fi ridicate sau coborâte în funcție de necesitățile momentului,
            oferind protecție împotriva soarelui și a ploii.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            7. Panouri mobile și pliabile
          </h2>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            A. Materiale: sticlă, lemn, plastic
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Panourile mobile pot fi realizate din materiale diverse, de la
            sticlă și lemn, până la plastic rezistent. Acestea oferă o soluție
            practică pentru reorganizarea rapidă a spațiului în funcție de
            nevoi.
          </p>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            B. Avantaje: mobilitate și posibilitate de reorganizare
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Un avantaj major al panourilor mobile este flexibilitatea de a
            schimba configurarea terasei în orice moment. Ele pot fi folosite
            pentru a crea spații private temporare sau pentru a delimita anumite
            zone ale terasei.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">
            8. Pergole închise și semi-permanente
          </h2>
          <h3 className="lg:text-xl text-lg font-semibold mb-2">
            A. Tipuri de pergole: metalice, din lemn, aluminiu
          </h3>
          <p className="lg:text-lg text-base mb-4">
            Pergolele pot fi construite din materiale durabile precum aluminiul,
            lemnul sau metalul, și oferă o soluție estetică pentru protejarea
            terasei.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">Concluzii</h2>
          <p className="lg:text-lg text-base">
            Închiderea teraselor aduce numeroase beneficii, de la extinderea
            spațiului de locuit până la protecția împotriva vremii. Fie că
            optați pentru sticlă, folii transparente, rulouri sau pergole
            închise, soluțiile sunt diverse și pot fi adaptate nevoilor fiecărui
            proprietar. Alegerea optimă depinde de buget, preferințe estetice și
            scopul dorit.
          </p>
        </div>
      </article>
    </div>
  );
}
