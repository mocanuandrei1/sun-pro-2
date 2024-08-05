import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesCards = ({ title, description, url }) => {
  return (
    <Link href={url}>
      <div className="border-2 relative border-black rounded-xl group flex flex-col overflow-hidden">
        <Image
          src="/Hero1.jpg"
          alt={title}
          width={500}
          height={300}
          className="group-hover:scale-110 transition-all bg-gray-500"
        />
        <div className="bg-black text-white text-center p-4 absolute left-0 bottom-0 w-full">
          <h3 className="group-hover:text-primary transition-all font-montserrat text-xl">
            {title}
          </h3>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] delay-200 group-hover:grid-rows-[1fr]">
            <p className="overflow-hidden">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServicesCards;
