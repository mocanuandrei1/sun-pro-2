import React from "react";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import ServicesGetInTouchWithoutPhoto from "./Services/ServicesGetInTouchWithoutPhoto";

export default function ContactInformation() {
  return (
    <div className="lg:max-w-7xl lg:mx-auto mx-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-6 py-10">
      <ServicesGetInTouchWithoutPhoto />
      <div>
        <div className="space-y-0 mb-4">
          <p className="flex text-lg items-center justify-center text-[#f68a09] font-semibold lg:mb-6">
            <LuCrown className="pr-2 text-3xl" />
            Informatii de contact
          </p>
          <h2 className="lg:text-3xl text-2xl font-bold text-center">
            Ai nevoie de ajutor? Contacteaza-ne acum!
          </h2>
        </div>

        <div className="p-3 bg-gray-100 rounded-md grid grid-cols-12 items-center my-4 w-full border-2 border-gray-200">
          <FaPhone className="text-[#f68a09] text-2xl mr-4 col-span-2 sm:col-span-1" />
          <div className="col-span-10 sm:col-span-11">
            <p>Telefon: 0725585985</p>
          </div>
        </div>

        <div className="p-3 bg-gray-100 rounded-md grid grid-cols-12 items-center my-4 w-full border-2 border-gray-200">
          <MdOutlineMailOutline className="text-[#f68a09] text-2xl mr-4 col-span-2 sm:col-span-1" />
          <div className="col-span-10 sm:col-span-11">
            <p>E-mail: sun.pro@gmail.com</p>
          </div>
        </div>

        <div className="p-3 bg-gray-100 rounded-lg grid grid-cols-12 items-center my-4 border-2 border-gray-200">
          <FaMapMarkerAlt className="text-[#f68a09] text-3xl mr-4 col-span-2 sm:col-span-1" />
          <div className="col-span-10 sm:col-span-11">
            <h2 className="text-lg">Locatie</h2>
            <p>Crevedia, Darza, Dambovita</p>
          </div>
        </div>

        <div className="p-3 bg-gray-100 rounded-lg grid grid-cols-12 items-center border-2 border-gray-200">
          <FaClock className="text-[#f68a09] text-3xl mr-4 col-span-2 sm:col-span-1" />
          <div className="col-span-10 sm:col-span-11">
            <h2 className="text-lg">Orele de lucru</h2>
            <div className="lg:flex hidden">
              <p>Luni - Sambata: 8:00 - 16:00</p> / Duminica:{" "}
              <span className="text-red-600">Inchis</span>
            </div>
            <div className="block lg:hidden">
              <p>Luni - Sambata: 8:00 - 16:00</p>
              <p>
                Duminica: <span className="text-red-600">Inchis</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.5854053398634!2d25.946798515524073!3d44.59974837910061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b206a7ba2ca731%3A0xc6e68d9e3b2f7e3a!2sCrevedia%2C%20Romania!5e0!3m2!1sen!2sus!4v1626874932012!5m2!1sen!2sus"
        width="100%"
        height="450"
        loading="lazy"
        className="w-full rounded-lg col-span-1 lg:col-span-2 mt-6 lg:mt-0"
      ></iframe>
    </div>
  );
}
