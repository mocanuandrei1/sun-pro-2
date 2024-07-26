import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="md:col-span-1">
          <Image
            src="/Logo.png"
            alt="Loading..."
            width={100}
            height={100}
            className="mb-4 w-32"
          />
          <p>
            Construction services offer tailored solutions to meet the unique
            needs and specifications of each project.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 bg-gray-800 rounded">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded">
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Useful Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#">Our Gallery</a>
            </li>
            <li className="mb-2">
              <a href="#">Our Services</a>
            </li>
            <li className="mb-2">
              <a href="#">Our Team</a>
            </li>
            <li className="mb-2">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Our Services</h3>
          <ul>
            <li className="mb-2">
              <a href="#">Renovation</a>
            </li>
            <li className="mb-2">
              <a href="#">Construction</a>
            </li>
            <li className="mb-2">
              <a href="#">Architectural</a>
            </li>
            <li className="mb-2">
              <a href="#">Development</a>
            </li>
            <li className="mb-2">
              <a href="#">Building</a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Quick Info</h3>
          <ul>
            <li className="mb-2">
              <a href="#">Our Story</a>
            </li>
            <li className="mb-2">
              <a href="#">Appointment</a>
            </li>
            <li className="mb-2">
              <a href="#">Terms & Condition</a>
            </li>
            <li className="mb-2">
              <a href="#">Get In Touch</a>
            </li>
            <li className="mb-2">
              <a href="#">Project Showcase</a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <p className="mb-2">Address Location</p>
          <p className="mb-4">138 MacArthur Ave 2, United States</p>
          <p className="mb-2">Contact Number</p>
          <p className="mb-4">+1 952-435-7106</p>
          <p>info@kotar.com</p>
        </div>
      </div>
      <div className="container mx-auto mt-10 border-t border-gray-800 pt-4">
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="bg-gray-800 p-2 w-1/3 rounded"
          />
        </div>
      </div>
    </footer>
  );
}
