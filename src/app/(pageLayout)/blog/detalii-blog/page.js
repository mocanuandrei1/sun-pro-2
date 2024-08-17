import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaTags, FaUser } from "react-icons/fa";
import RecentPosts from "@/components/RecentPosts";

export default function BlogPost() {
  return (
    <div className="flex max-w-7xl mx-auto py-10 gap-10">
      {/* Secțiunea principală - Conținutul blogului */}
      <article className="w-3/4">
        <div className="bg-gray-100 mb-6 rounded-lg ">
          <div className="relative overflow-hidden group">
            {/* Imaginea principală */}
            <Image
              src="/Hero1.jpg"
              alt="Ghid Complet: Cum Alegi Copertina Perfectă pentru Terasa Ta"
              width={800}
              height={600}
              className="w-full h-56 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
            />
            <div className="vertical-rect"></div>
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">
              Ghid Complet: Cum Alegi Copertina Perfectă pentru Terasa Ta
            </h1>
            <div className="flex items-center mb-6 text-[#f68a09]">
              <span className="flex items-center gap-2 ">
                <FaUser />
                <span className="text-gray-500 hover:text-[#f68a09]">
                  Mocanu Andrei
                </span>
              </span>
              <span className="mx-4 ">|</span>
              <span className="flex items-center gap-2 hover:text-[#f68a09]">
                <FaCalendarAlt />
                <span className="text-gray-500 hover:text-[#f68a09]">
                  16 August 2024
                </span>
              </span>
              <span className="mx-4 ">|</span>
              <span className="flex items-center gap-2 hover:text-[#f68a09]">
                <FaTags />
                <span className="text-gray-500 hover:text-[#f68a09]">
                  Copertine
                </span>
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Introducere</h2>
            <p className="text-lg">
              Copertinele sunt o soluție esențială pentru protejarea spațiilor
              exterioare de soare, ploaie și alte condiții meteorologice.
              Indiferent dacă îți dorești să îmbunătățești confortul terasei
              tale sau să adaugi un plus de estetică, alegerea unei copertine
              adecvate este esențială. La SunPro, oferim o gamă variată de
              copertine care nu doar protejează, ci și adaugă valoare estetică
              spațiului tău exterior. Acest ghid te va ajuta să înțelegi
              diferitele tipuri de copertine disponibile și să faci cea mai bună
              alegere pentru nevoile tale.
            </p>
          </div>
        </div>

        {/* Restul conținutului articolului */}
        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            1. Tipuri de Copertine pentru Terase
          </h2>

          <h3 className="text-xl font-semibold mb-2">
            1.1 Copertine cu Brațe Laterale
          </h3>
          <p className="text-lg mb-4">
            Copertinele cu brațe laterale sunt o soluție excelentă pentru
            protecția solară eficientă, oferind și o mare flexibilitate. Acestea
            sunt echipate cu brațe articulate care permit reglarea unghiului și
            extinderea copertinei în funcție de necesități.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Protecție solară:</strong> Blochează eficient razele UV,
              protejând atât spațiul exterior, cât și mobilierul.
            </li>
            <li>
              <strong>Ajustabilitate:</strong> Poți ajusta unghiul și lungimea
              copertinei pentru a obține exact nivelul de umbră dorit.
            </li>
            <li>
              <strong>Durabilitate:</strong> Fabricate din materiale rezistente
              la intemperii, aceste copertine sunt ideale pentru utilizare
              îndelungată.
            </li>
          </ul>
          <p className="text-lg mb-4">
            <strong>Exemple de utilizare:</strong> Terase, Grădini, Spații
            comerciale
          </p>

          <h3 className="text-xl font-semibold mb-2">
            1.2 Copertine cu Casetă
          </h3>
          <p className="text-lg mb-4">
            Copertinele cu casetă sunt apreciate pentru designul lor modern și
            funcționalitatea practică. Aceste copertine sunt echipate cu un
            mecanism care le permite să se închidă complet într-o casetă
            protectoare atunci când nu sunt utilizate, prelungind astfel durata
            de viață a materialului și menținând un aspect curat și modern.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Protecție completă:</strong> Materialul este protejat în
              totalitate de casetă, ceea ce îi prelungește durata de viață.
            </li>
            <li>
              <strong>Design modern:</strong> Ideal pentru cei care caută o
              soluție estetică și funcțională.
            </li>
            <li>
              <strong>Durabilitate:</strong> Rezistența crescută datorită
              protecției oferite de casetă.
            </li>
          </ul>
          <p className="text-lg mb-4">
            <strong>Exemple de utilizare:</strong> Balcoane, Ferestre, Spații
            comerciale
          </p>

          <h3 className="text-xl font-semibold mb-2">
            1.3 Copertine Fixe (Capotine)
          </h3>
          <p className="text-lg mb-4">
            Copertinele fixe, cunoscute și ca capotine, sunt structuri rigide
            care oferă protecție permanentă și sunt ideale pentru zonele care
            necesită o acoperire constantă și durabilă.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Rezistență în condiții meteo extreme:</strong>
              Construcția solidă le permite să reziste vântului puternic și
              ploii.
            </li>
            <li>
              <strong>Întreținere redusă:</strong> Necesită minimă întreținere
              datorită construcției robuste.
            </li>
          </ul>
          <p className="text-lg mb-4">
            <strong>Exemple de utilizare:</strong> Intrări de clădiri, Ferestre
          </p>

          <h3 className="text-xl font-semibold mb-2">
            1.4 Copertine Retractabile
          </h3>
          <p className="text-lg mb-4">
            Copertinele retractabile sunt cele mai versatile, permițând
            extinderea sau retragerea copertinei în funcție de condițiile
            meteorologice. Acestea oferă control total asupra expunerii la soare
            și umbră, fiind ideale pentru orice tip de spațiu exterior.
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Flexibilitate:</strong> Poate fi ajustată rapid în funcție
              de nevoi.
            </li>
            <li>
              <strong>Economie de spațiu:</strong> Retractabilitatea permite
              economisirea spațiului când copertina nu este utilizată.
            </li>
            <li>
              <strong>Control facil:</strong> Manevrarea poate fi realizată
              manual sau automat, în funcție de preferințe.
            </li>
          </ul>
          <p className="text-lg mb-4">
            <strong>Exemple de utilizare:</strong> Terase, Spații comerciale,
            Grădini
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            2. Materialele Utilizate pentru Copertine
          </h2>

          <h3 className="text-xl font-semibold mb-2">2.1 Materiale Textile</h3>
          <p className="text-lg mb-4">
            Materialele textile utilizate în fabricarea copertinelor sunt de
            obicei tratate pentru a rezista la apă și la razele UV. Acestea sunt
            disponibile într-o varietate de culori și texturi, permițând
            personalizarea aspectului terasei tale. La SunPro, utilizăm doar
            materiale de calitate superioară, asigurând o protecție de lungă
            durată și un aspect estetic plăcut.
          </p>

          <h3 className="text-xl font-semibold mb-2">2.2 Aluminiu</h3>
          <p className="text-lg mb-4">
            Aluminiul este un material preferat pentru structurile copertinelor
            datorită rezistenței sale la coroziune și ușurinței cu care poate fi
            modelat. Acesta este durabil și necesită puțină întreținere, fiind
            ideal pentru utilizare pe termen lung în toate tipurile de climă.
          </p>

          <h3 className="text-xl font-semibold mb-2">2.3 Policarbonat</h3>
          <p className="text-lg mb-4">
            Policarbonatul este un material ușor, dar robust, care permite
            luminii să pătrundă, oferind în același timp protecție împotriva
            razelor UV și a intemperiilor. Este o alegere populară pentru
            copertine datorită durabilității și rezistenței sale la impact.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            3. Designuri și Stiluri de Copertine
          </h2>

          <h3 className="text-xl font-semibold mb-2">3.1 Stil Modern</h3>
          <p className="text-lg mb-4">
            Copertinele în stil modern sunt caracterizate prin linii simple,
            culori neutre și materiale inovatoare, precum aluminiul sau
            policarbonatul. Acestea sunt perfecte pentru terasele cu un design
            contemporan, adăugând un aer sofisticat și elegant.
          </p>

          <h3 className="text-xl font-semibold mb-2">3.2 Stil Clasic</h3>
          <p className="text-lg mb-4">
            Pentru un aspect clasic, copertinele pot include detalii ornamentale
            și sunt fabricate din materiale tradiționale, cum ar fi lemnul sau
            fierul forjat. Acestea completează arhitectura tradițională și aduc
            un plus de farmec terasei tale.
          </p>

          <h3 className="text-xl font-semibold mb-2">3.3 Stil Mediteranean</h3>
          <p className="text-lg mb-4">
            Copertinele în stil mediteranean aduc un aer cald și relaxant
            spațiului tău exterior, fiind adesea realizate din materiale
            naturale și culori pământii, precum teracota sau bejul.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            4. Factori de Luat în Considerare la Alegerea unei Copertine
          </h2>

          <h3 className="text-xl font-semibold mb-2">
            4.1 Dimensiunea și Forma Terasei
          </h3>
          <p className="text-lg mb-4">
            Dimensiunea și forma terasei tale vor determina tipul de copertină
            pe care o poți alege. Terasele mari pot beneficia de copertine
            retractabile de mari dimensiuni, în timp ce spațiile mai mici ar
            putea fi mai bine servite de copertine fixe sau de modele mai
            compacte.
          </p>

          <h3 className="text-xl font-semibold mb-2">4.2 Orientarea Terasei</h3>
          <p className="text-lg mb-4">
            Orientarea terasei față de soare este esențială în alegerea
            copertinei. Dacă terasa ta este expusă la soare pe tot parcursul
            zilei, o copertină retractabilă te va ajuta să reglezi nivelul de
            umbră în funcție de nevoi.
          </p>

          <h3 className="text-xl font-semibold mb-2">4.3 Clima Locală</h3>
          <p className="text-lg mb-4">
            Clima din zona ta joacă un rol crucial în alegerea materialului și
            tipului de copertină. În zonele cu vânturi puternice, o copertină cu
            structură solidă, precum cea din aluminiu, este esențială. În
            regiunile ploioase, copertinele din materiale impermeabile sunt de
            preferat.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            5. Întreținerea Copertinelor
          </h2>
          <p className="text-lg mb-4">
            Întreținerea regulată a copertinei este esențială pentru a-i asigura
            o durată de viață lungă. Iată câteva sfaturi esențiale:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Curățare periodică:</strong> Utilizează apă și un
              detergent ușor pentru a curăța materialul textil sau suprafața din
              policarbonat.
            </li>
            <li>
              <strong>Verificarea structurii:</strong> Inspectează cadrul
              copertinei periodic pentru a detecta eventualele semne de uzură.
            </li>
            <li>
              <strong>Protecția pe timp de iarnă:</strong> Dacă ai o copertină
              retractabilă, este recomandat să o retragi în timpul iernii pentru
              a preveni deteriorarea cauzată de zăpadă sau gheață.
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">6. Montajul Copertinelor</h2>
          <p className="text-lg mb-4">
            Montajul corect este crucial pentru a asigura funcționarea optimă și
            siguranța copertinei. La SunPro, oferim servicii profesionale de
            montaj, asigurându-ne că fiecare copertină este instalată conform
            specificațiilor tehnice și cerințelor clientului.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">Concluzie</h2>
          <p className="text-lg">
            Alegerea copertinei perfecte pentru terasa ta implică luarea în
            considerare a mai multor factori, de la tipul de copertină și
            materialele utilizate, până la stilul dorit și clima locală. La
            SunPro, suntem aici pentru a te ajuta să faci cea mai bună alegere,
            oferind o gamă variată de copertine și servicii de montaj
            profesional. Contactează-ne astăzi pentru o consultanță gratuită și
            transformă-ți terasa într-un spațiu confortabil și estetic, ideal
            pentru orice anotimp.
          </p>
        </div>
      </article>

      {/* Bara laterală - Postări Recente */}
      <RecentPosts />
    </div>
  );
}
