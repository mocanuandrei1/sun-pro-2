import Breadcrumb from "@/components/custom ui/Breadcrumb";
import Image from "next/image";
import React from "react";

export default function PageLayout({ children }) {
  return (
    <main>
      <div className="relative w-full h-64">
        <Image
          src="/Hero1.jpg"
          alt="Construction workers"
          width={1200}
          height={800}
          className=" object-cover w-full relative h-full"
        />
        <Breadcrumb />
      </div>
      {children}
    </main>
  );
}
