import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { VscBellDot } from "react-icons/vsc";

export default function Button() {
  const [input, setInput] = useState("");

  const handlePrimaryBtnClick = () => {
    alert("버튼을 만들어보세요");
  };

  const handleNegativeBtnClick = () => {
    const userInput = prompt("어렵나요?", input);
    if (userInput !== null) {
      setInput(userInput);
      setInput("");
    }
  };

  return (
    <div className="p-10">
      <p className="text-3xl font-bold">Button</p>
      <div className="flex items-center mt-8">
        <button
          onClick={handlePrimaryBtnClick}
          className="flex justify-center items-center w-52 h-12 text-sm font-bold border-2 border-green-300 hover:bg-green-900 rounded-xl gap-1 mr-4"
        >
          Large Primary Button
          <FaAngleRight />
        </button>
        <button className="w-32 h-11 text-sm font-bold bg-green-500 hover:bg-green-600 focus:outline-none rounded-lg mr-4">
          Medium
        </button>
        <button className="w-24 h-10 text-sm font-bold bg-green-500 hover:bg-green-600 focus:outline-none rounded-lg">
          Small
        </button>
      </div>
      <div className="mt-4 flex items-center">
        <button
          onClick={handleNegativeBtnClick}
          className="flex justify-center items-center w-52 h-12 text-sm text-red-300 font-bold border-2 border-red-300 hover:bg-red-900 rounded-xl gap-1 mr-4"
        >
          Large Negative Button
          <VscBellDot />
        </button>
        <button className="w-32 h-11 text-sm font-bold bg-red-500 hover:bg-red-600 focus:outline-none rounded-lg mr-4">
          Medium
        </button>
        <button className="w-24 h-10 text-sm font-bold bg-red-500 hover:bg-red-600 focus:outline-none rounded-lg">
          Small
        </button>
      </div>
    </div>
  );
}
