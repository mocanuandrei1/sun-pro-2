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
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70">
          <div className="max-w-7xl w-full px-10 lg:px-0">
            <h1 className="text-4xl font-bold text-white">Servicii</h1>
            <p className="text-md text-[#f68a09] mt-2">Acasa / Servicii</p>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </main>
  );
}
