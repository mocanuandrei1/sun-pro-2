import React from "react";
import { TbPhoneCall } from "react-icons/tb";

export default function HeaderCall() {
  return (
    <div className="flex items-center space-x-2">
      <TbPhoneCall className="bg-white rounded-full text-black text-4xl p-1 ml-2 border-2 border-black" />
      <div>
        <p className="text-sm text-black">Call Us Any Time:</p>
        <p className="font-bold text-black">0725585985</p>
      </div>
    </div>
  );
}
