import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl xl:mx-auto mx-10 my-10">
      <p class="text-gray-600 mb-4">
        Folosirea acestui site implică acceptarea termenilor și condițiilor de
        mai jos. Recomandăm citirea cu atenție a acestora.{" "}
        <span class="font-bold">SunPro</span> își asumă dreptul de a modifica
        aceste prevederi fără o altă notificare. Cea mai recentă versiune poate
        fi accesată în această pagină.
      </p>
      <p class="text-gray-600 mb-4">
        Accesul/vizitarea acestui website de către dumneavoastră se supune
        Termenilor și condițiilor de utilizare, și implică acceptul explicit al
        dumneavoastră cu privire la acestea și reprezintă înțelegerea dintre
        părți.
      </p>
      <h3 class="text-2xl font-semibold text-gray-800 mb-4">
        Acte normative aplicabile
      </h3>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        <li>OG nr. 21/1992 privind protecția consumatorilor</li>
        <li>
          OUG nr. 34/2014 privind drepturile consumatorilor în cadrul
          contractelor încheiate cu profesioniștii
        </li>
        <li>
          Legea nr. 363/2007 privind combaterea practicilor incorecte ale
          comercianților în relația cu consumatorii
        </li>
        <li>Legea 365/2002 privind comerțul electronic</li>
      </ul>
      <p class="text-gray-600 mb-4">
        SunPro garantează utilizatorului acces limitat, în interes personal
        (efectuarea de comenzi online, informare), pe site-ul www.sunpro.ro și
        nu îi conferă dreptul de a descărca sau de a modifica parțial sau
        integral site-ul, de a reproduce parțial sau integral site-ul, de a
        copia, de a vinde/revinde sau de a exploata site-ul în orice altă
        manieră, în scopuri comerciale sau fără acordul prealabil scris al
        companiei.
      </p>
      <p class="text-gray-600 mb-4">
        Întregul conținut al site-ului www.sunpro.ro - imagini, texte, grafice,
        simboluri, elemente de grafică web, email-uri, scripturi, programe și
        alte date - este proprietatea SunPro și a furnizorilor săi și este
        apărat de Legea pentru protecția drepturilor de autor (legea nr. 8/1996)
        și de legile privind proprietatea intelectuală și industrială. Folosirea
        fără acordul SunPro a oricăror elemente enumerate mai sus se pedepsește
        conform legislației în vigoare.
      </p>
      <p class="text-gray-600 mb-4">
        Domeniul www.sunpro.ro este deținut de către{" "}
        <span class="font-bold">SUN PRO SRL</span>. Utilizarea acestei mărci, a
        domeniului sau a numelor de comercializare, siglelor și emblemelor, în
        formă directă sau "ascunsă" (de tipul, dar nu limitat la, meta taguri
        sau alte tehnici de indexare, căutare web) fără permisiunea prealabilă
        scrisă este interzisă și se pedepsește conform legii.
      </p>
      <p class="text-gray-600 mb-4">
        Produsele prezentate pe{" "}
        <a className="underline text-custom-blue" href="https://sunpro.ro/">
          www.sunpro.ro
        </a>{" "}
        sunt produse și comercializate de SunPro. Prețurile produselor pot fi
        schimbate oricând. Verificați prețul final de vânzare înainte de a
        achiziționa un produs.
      </p>
    </div>
  );
};

export default page;
