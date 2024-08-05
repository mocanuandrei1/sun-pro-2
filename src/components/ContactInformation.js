import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";

export default function ContactInformation() {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <p className="flex text-lg items-center justify-center md:justify-start text-[#f68a09] font-semibold grid-about-2 mb-4">
          <LuCrown className="pr-2 text-3xl" />
          Contact Information
        </p>
        <div className="p-6 bg-white shadow-lg rounded-lg flex items-center">
          <FaMapMarkerAlt className="text-[#f68a09] text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Locatie:</h2>
            <p>Crevedia, Darza, Dambovita</p>
          </div>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg flex items-center">
          <FaPhone className="text-[#f68a09] text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Informatii de contact</h2>
            <p>Telefon: 0725585985</p>
            <p>E-mail: sun.pro@gmail.com</p>
          </div>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg flex items-center">
          <FaClock className="text-[#f68a09] text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Orele de lucru</h2>
            <p>Luni - Sambata: 8:00 - 16:00</p>
            <p>
              Duminica: <span className="text-red-600">Inchis</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.5854053398634!2d25.946798515524073!3d44.59974837910061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b206a7ba2ca731%3A0xc6e68d9e3b2f7e3a!2sCrevedia%2C%20Romania!5e0!3m2!1sen!2sus!4v1626874932012!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
