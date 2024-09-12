import Breadcrumb from "@/components/custom ui/Breadcrumb";
import { blogs } from "@/lib/variables";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export const metadata = {
  title: "Blog",
  description:
    "Articole despre inchideri terase, copertine, pergole, rulouri si prelate PVC.",
};

export default function page() {
  return (
    <main>
      <div className="relative w-full h-64">
        <Image
          src="/Hero1.jpg"
          alt="Construction workers"
          width={1200}
          height={800}
          className="object-cover w-full relative h-full"
        />
        <Breadcrumb />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8 lg:mx-auto mx-10 max-w-7xl py-20">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={blog.link}
            className="bg-white rounded-lg shadow-lg flex flex-col group "
          >
            <div className="relative overflow-hidden">
              {/* Imaginea principală */}
              <Image
                src={blog.image}
                alt={blog.title}
                width={960}
                height={320}
                className="w-full h-56 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105"
              />
              <div className="vertical-rect"></div>
            </div>
            <div className="flex flex-col justify-between p-6 flex-grow">
              <div className="flex items-center gap-5 text-sm text-gray-600 mb-2">
                <span className="flex items-center gap-2 hover:text-[#f68a09]">
                  <FaUser className="text-[#f68a09]" />
                  {blog.author}
                </span>

                <span className="flex items-center gap-2 hover:text-[#f68a09]">
                  <FaCalendarAlt className="text-[#f68a09]" />
                  {blog.date}
                </span>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {blog.title}
                </h3>
                <div className="mt-auto flex justify-between">
                  <span className="text-[#f68a09] text-sm font-bold flex items-center group">
                    Citeste mai mult
                    <FiArrowUpRight className="pl-2 text-2xl transition-transform duration-500 group-hover:rotate-45" />
                  </span>

                  <span className="flex items-center gap-2 hover:text-[#f68a09]">
                    <FaClock className="text-[#f68a09]" />
                    {blog.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
