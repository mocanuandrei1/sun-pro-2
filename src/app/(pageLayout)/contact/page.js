import ContactInformation from "@/components/ContactInformation";

import React from "react";

export const metadata = {
  title: "Contact",
  description:
    "Contactează-ne pentru a afla mai multe despre produsele noastre.",
};

export default function page() {
  return (
    <div>
      <ContactInformation />
    </div>
  );
}
