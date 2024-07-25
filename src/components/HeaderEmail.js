import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";

export default function HeaderEmail() {
  return (
    <div className="flex items-center space-x-2">
      <MdOutlineMailOutline className="bg-white rounded-full text-black text-4xl p-1 ml-4 border-2 border-black" />
      <div>
        <p className="text-sm text-black">Email Us:</p>
        <p className="font-bold text-black">sun.pro@gmail.com</p>
      </div>
    </div>
  );
}
