import React from "react";

export const metadata = {
  title: "Politica de Cookie-uri",
  robots: {
    follow: true,
    index: false,
  },
};

const page = () => {
  return (
    <div className="max-w-screen-xl xl:mx-auto mx-10 my-10">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">
        Politica de Cookie-uri
      </h1>
      <p class="text-gray-600 mb-4">
        Data intrării în vigoare: 11-Sep-2024 <br></br>
        Ultima actualizare: 11-Sep-2024
      </p>

      <h5 class="text-2xl font-semibold text-gray-800 mb-4">
        Ce sunt cookie-urile?
      </h5>
      <p class="text-gray-600 mb-4">
        Această Politică de Cookie-uri explică ce sunt cookie-urile și cum le
        folosim, tipurile de cookie-uri pe care le folosim, adică informațiile
        pe care le colectăm folosind cookie-uri și cum sunt folosite aceste
        informații, precum și cum să gestionezi setările cookie-urilor.
      </p>
      <p class="text-gray-600 mb-4">
        Cookie-urile sunt fișiere mici de text care sunt utilizate pentru a
        stoca mici fragmente de informații. Acestea sunt stocate pe dispozitivul
        tău atunci când website-ul este încărcat în browser. Aceste cookie-uri
        ne ajută să facem ca website-ul să funcționeze corect, să fie mai sigur,
        să oferim o experiență mai bună utilizatorului și să înțelegem cum
        funcționează website-ul, analizând ce funcționează și unde este nevoie
        de îmbunătățiri.
      </p>

      <h5 class="text-2xl font-semibold text-gray-800 mb-4">
        Cum folosim cookie-urile?
      </h5>
      <p class="text-gray-600 mb-4">
        La fel ca majoritatea serviciilor online, website-ul nostru utilizează
        cookie-uri de primă și terță parte pentru diverse scopuri. Cookie-urile
        de primă parte sunt în mare parte necesare pentru ca website-ul să
        funcționeze corect și nu colectează date personale identificabile despre
        tine.
      </p>
      <p class="text-gray-600 mb-4">
        Cookie-urile terțelor părți utilizate pe website-ul nostru sunt în
        principal pentru a înțelege cum funcționează website-ul, cum
        interacționezi cu acesta, pentru a menține serviciile noastre
        securizate, pentru a furniza reclame relevante pentru tine și, în
        general, pentru a oferi o experiență de utilizare mai bună și
        îmbunătățită, contribuind la accelerarea interacțiunilor viitoare cu
        website-ul nostru.
      </p>

      <h5 class="text-2xl font-semibold text-gray-800 mb-4">
        Tipuri de Cookie-uri pe care le folosim
      </h5>
      <div class="cky-audit-table-element bg-white border border-gray-200 p-4 mb-4 rounded-lg"></div>

      <h5 class="text-2xl font-semibold text-gray-800 mb-4">
        Gestionarea preferințelor cookie-urilor
      </h5>
      <a class="inline-block px-4 py-2 bg-gray-200 text-gray-600 border border-gray-300 rounded cursor-pointer hover:bg-gray-300">
        Setări cookie-uri
      </a>
      <br />
      <p class="text-gray-600 mt-4">
        Poți modifica preferințele tale de cookie-uri oricând făcând clic pe
        butonul de mai sus. Aceasta îți va permite să revizitezi banner-ul de
        consimțământ pentru cookie-uri și să schimbi preferințele sau să îți
        retragi consimțământul imediat.
      </p>
      <p class="text-gray-600 mb-4">
        În plus, diferite browsere oferă metode diferite pentru a bloca și a
        șterge cookie-urile utilizate de site-uri web. Poți schimba setările
        browser-ului tău pentru a bloca/șterge cookie-urile. Mai jos sunt
        listate linkurile către documentele de suport pentru gestionarea și
        ștergerea cookie-urilor din principalele browsere web:
      </p>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        <li>
          Chrome:{" "}
          <a
            href="https://support.google.com/accounts/answer/32050"
            target="_blank"
            class="text-blue-500 underline"
          >
            https://support.google.com/accounts/answer/32050
          </a>
        </li>
        <li>
          Safari:{" "}
          <a
            href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
            target="_blank"
            class="text-blue-500 underline"
          >
            https://support.apple.com/en-in/guide/safari/sfri11471/mac
          </a>
        </li>
        <li>
          Firefox:{" "}
          <a
            href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
            target="_blank"
            class="text-blue-500 underline"
          >
            https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
          </a>
        </li>
        <li>
          Internet Explorer:{" "}
          <a
            href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
            target="_blank"
            class="text-blue-500 underline"
          >
            https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer
          </a>
        </li>
      </ul>

      <p class="text-gray-600">
        Dacă folosești un alt browser web, te rugăm să consulți documentele
        oficiale de suport ale browser-ului tău.
      </p>

      <p class="text-gray-600 mt-4">
        Politica de Cookie-uri generată de{" "}
        <a
          href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW"
          target="_blank"
          class="text-blue-500 underline"
        >
          CookieYes - Generator de Politici de Cookie-uri
        </a>
        .
      </p>
    </div>
  );
};

export default page;
