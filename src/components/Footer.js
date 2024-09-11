import {
  companyData,
  legalLinks,
  navBarLinks,
  servicii,
} from "@/lib/variables";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdInfoOutline,
  MdOutlineLocationOn,
  MdOutlineMailOutline,
} from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-screen-xl xl:mx-auto mx-10 py-10">
        <div className="md:col-span-1">
          <Image
            src="/logo-black.webp"
            alt="Loading..."
            width={70}
            height={70}
            className="mb-4"
          />
          <p>
            SunPro oferă soluții personalizate pentru a satisface nevoile unice
            și specificațiile fiecărui proiect.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/p/Sun-Pro-100064291921110/"
              target="_blank"
              className="p-2 bg-custom-orange rounded hover:text-black"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://wa.me/+40771097050"
              target="_blank"
              className="p-2 bg-custom-orange rounded hover:text-black"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Link-uri Utile</h3>
          <ul>
            {navBarLinks.map((link, index) => (
              <li className="mb-2" key={index}>
                <Link href={link.path} className="hover:text-custom-orange">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Link-uri Legale</h3>
          <ul>
            {legalLinks.map((link, index) => (
              <li className="mb-2" key={index}>
                <Link href={link.path} className="hover:text-custom-orange">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Servicii</h3>
          <ul>
            {servicii.map((link, index) => (
              <li className="mb-2" key={index}>
                <Link href={link.href} className="hover:text-custom-orange">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Contact</h3>
          <div className="flex flex-col gap-2">
            <a
              href={`tel:${companyData.phone}`}
              className="hover:text-custom-orange"
            >
              <div className="flex gap-1">
                <TbPhoneCall className="text-2xl" />
                <p>{companyData.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${companyData.email}`}
              className="hover:text-custom-orange"
            >
              <div className="flex gap-1">
                <MdOutlineMailOutline className="text-2xl" />
                <p>{companyData.email}</p>
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Sun+Pro/@44.5925009,25.9296391,17z/data=!4m6!3m5!1s0x40b2103815ad743b:0x2e8657d965e8abff!8m2!3d44.5925009!4d25.9296391!16s%2Fg%2F11c52yjtc5?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
              className="hover:text-custom-orange"
            >
              <div className="flex gap-1">
                <MdOutlineLocationOn className="text-2xl" />
                <p>{companyData.location}</p>
              </div>
            </a>
            <div className="flex gap-1">
              <MdInfoOutline className="text-2xl" />
              <p>{`Reg. Com: ${companyData.regCom}`}</p>
            </div>
            <div className="flex gap-1">
              <MdInfoOutline className="text-2xl" />
              <p>{`CUI: ${companyData.cui}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between items-center border-gray-800 max-w-screen-xl xl:mx-auto mx-10 py-4">
        <p>Copyright © SunPro 2024. Toate drepturile rezervate.</p>
        <div className="flex gap-6 flex-col md:flex-row">
          <a href="https://anpc.ro/ce-este-sal/">
            <Image
              src="/anpc-sal.webp"
              alt="ANPC"
              width={250}
              height={130}
              className="w-auto h-auto"
            />
          </a>
          <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">
            <Image
              src="/anpc-sol.webp"
              alt="ANPC"
              width={250}
              height={130}
              className="w-auto h-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
