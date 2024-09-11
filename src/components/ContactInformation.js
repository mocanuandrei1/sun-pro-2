import React from "react";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import ServicesGetInTouchWithoutPhoto from "./Services/ServicesGetInTouchWithoutPhoto";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import HomeHeading from "./custom ui/HomeHeading";

export default function ContactInformation() {
  return (
    <div className="lg:max-w-7xl lg:mx-auto mx-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 py-10">
      <ServicesGetInTouchWithoutPhoto />
      <div>
        <HomeHeading
          smallTitle="Informații de Contact"
          smallTitleCSS="justify-start"
          bigTitle="Ai nevoie de ajutor?"
          bigTitleSecond="Contactează-ne acum!"
          bigTitleCSS="justify-center text-left mb-6"
        />

        <div className="p-3 bg-gray-100 rounded-md grid grid-cols-12 items-center my-4 w-full border-2 border-gray-200">
          <FaPhone className="text-[#f68a09] text-2xl mr-4 col-span-2 sm:col-span-1" />
          <div className="col-span-10 sm:col-span-11">
            <h2 className="text-lg">Telefon</h2>
            <p>0771097050</p>
            <p>0771097669</p>
          </div>
        </div>

        <div className="p-3 bg-gray-100 rounded-md grid grid-cols-12 items-center my-4 w-full border-2 border-gray-200">
          <MdOutlineMailOutline className="text-[#f68a09] text-2xl mr-4 col-span-2 sm:col-span-1" />
          <div className="col-span-10 sm:col-span-11">
            <h2 className="text-lg">E-mail</h2>
            <p>info@sunpro.ro</p>
          </div>
        </div>

        <div className="p-3 bg-gray-100 rounded-lg grid grid-cols-12 items-center my-4 border-2 border-gray-200">
          <FaMapMarkerAlt className="text-[#f68a09] text-3xl mr-4 col-span-2 sm:col-span-1" />
          <div className="col-span-10 sm:col-span-11">
            <h2 className="text-lg">Locatie</h2>
            <p>DN1A nr. 697C, Crevedia 137180</p>
          </div>
        </div>

        <div className="p-3 bg-gray-100 rounded-lg grid grid-cols-12 items-center border-2 border-gray-200">
          <FaClock className="text-[#f68a09] text-3xl mr-4 col-span-2 sm:col-span-1" />
          <div className="col-span-10 sm:col-span-11">
            <h2 className="text-lg">Orele de lucru</h2>
            <div className="lg:flex flex-col hidden">
              <p>Luni - Sambata: 8:00 - 16:00 </p>
              <p>
                Duminica: <span className="text-red-600">Inchis</span>{" "}
              </p>
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

      <div className="w-full rounded-lg col-span-1 lg:col-span-2 mt-6 lg:mt-0">
        <GoogleMapsEmbed
          apiKey={process.env.GOOGLE_API_KEY}
          height={500}
          style="width: 100%; height: 100%;"
          width="100%"
          mode="place"
          q="Sun+Pro,Șoseaua+București+Târgoviște,Crevedia"
        />
      </div>
    </div>
  );
}
