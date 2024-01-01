import React from "react";
import { FaCaretDown } from "react-icons/fa";

export default function Select() {
  return (
    <div className="pl-10 pr-10">
      <div className="pt-4 pb-20 border-solid border-4 border-gray-500">
        <p className="text-3xl font-bold">Select</p>
        <div className="flex">
          <button className="flex justify-between items-center pl-6 pr-6 mt-8 mr-4 w-72 h-10 border-solid border-2 border-gray-500 rounded-xl">
            React <FaCaretDown />
          </button>
          <button className="flex justify-between items-center pl-6 pr-6 mt-8 w-72 h-10 border-solid border-2 border-gray-500 rounded-xl">
            React <FaCaretDown />
          </button>
        </div>
      </div>
    </div>
  );
}
