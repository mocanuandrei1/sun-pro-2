import { blogs } from "@/lib/variables";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function RecentPosts({ exclude }) {
  const filteredPosts = blogs.filter((post) => post.id !== exclude);

  return (
    <div className="w-full lg:w-1/4 lg:block hidden">
      <div className="sticky top-20 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Alte Postări</h3>
        <ul>
          {filteredPosts.map((post, index) => (
            <li key={index} className="mb-6 flex items-center">
              <div className="w-20 h-20 flex-shrink-0">
                <div className="relative w-full h-full rounded-lg group overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-20 h-20 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="vertical-rect"></div>
                </div>
              </div>
              <div className="ml-4">
                <span className="flex items-center text-gray-600 text-sm mb-1">
                  <FaCalendarAlt className="text-orange-500 mr-2" />
                  {post.date}
                </span>
                <Link
                  href={post.link}
                  className="text-gray-800 hover:text-orange-500 font-medium"
                >
                  {post.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
