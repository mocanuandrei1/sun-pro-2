import React from "react";
import { IoLocationOutline } from "react-icons/io5";

export default function HeaderLocation() {
  return (
    <div className="flex items-center space-x-2">
      <IoLocationOutline className="bg-white rounded-full text-black text-4xl p-1 ml-6 border-2 border-black" />
      <div>
        <p className="text-sm text-black">Location Address:</p>
        <p className="font-bold text-black">Crevedia, Darza, Dambovita</p>
      </div>
    </div>
  );
}
