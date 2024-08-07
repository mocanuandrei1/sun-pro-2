import Breadcrumb from "@/components/custom ui/Breadcrumb";
import Image from "next/image";
import React from "react";

export default function PageLayout({ children }) {
  return (
    <main>
      <div className="relative w-full h-64">
        <Image
          src={"/Hero1.jpg"}
          alt="About us"
          layout="fill"
          objectFit="cover"
        />
        <Breadcrumb />
      </div>
      {children}
    </main>
  );
}
