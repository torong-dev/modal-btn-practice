import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function Select() {
  const [leftSelect, setLeftSelect] = useState(false);
  const [rightSelect, setRightSelect] = useState(false);
  const [selectedOptionLeft, setSelectedOptionLeft] = useState("React");
  const [selectedOptionRight, setSelectedOptionRight] = useState("React");

  const handleLeftSelectClick = () => {
    setLeftSelect(!leftSelect);
  };

  const handleLeftOptionClick = (value) => {
    setSelectedOptionLeft(value);
    setLeftSelect(false);
  };

  const handleRightSelectClick = () => {
    setRightSelect(!rightSelect);
  };

  const handleRightOptionClick = (value) => {
    setSelectedOptionRight(value);
    setRightSelect(false);
  };

  return (
    <div className="pl-10 pr-10">
      <div className="relative overflow-hidden pt-4 pb-20 border-solid border-4 border-gray-500">
        <p className="text-3xl font-bold">Select</p>
        <div className="flex">
          <div>
            <button
              onClick={handleLeftSelectClick}
              className="relative flex justify-between items-center pl-6 pr-6 mt-8 mr-4 w-72 h-10 border-solid border-2 border-gray-500 rounded-xl"
            >
              {selectedOptionLeft} <FaCaretDown />
              {leftSelect && (
                <div
                  className="absolute z-10 text-left top-full -left-0.5 w-72 mt-2 bg-zinc-900 border-solid border-2 border-gray-500 rounded-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700 rounded-t-xl"
                    onClick={() => handleLeftOptionClick("React")}
                  >
                    React
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700"
                    onClick={() => handleLeftOptionClick("Java")}
                  >
                    Java
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700"
                    onClick={() => handleLeftOptionClick("Spring")}
                  >
                    Spring
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700 rounded-b-xl"
                    onClick={() => handleLeftOptionClick("React Native")}
                  >
                    React Native
                  </div>
                </div>
              )}
            </button>
          </div>
          <div>
            <button
              onClick={handleRightSelectClick}
              className="flex justify-between items-center pl-6 pr-6 mt-8 w-72 h-10 border-solid border-2 border-gray-500 rounded-xl relative"
            >
              {selectedOptionRight} <FaCaretDown />
              {rightSelect && (
                <div
                  className="absolute text-left top-full -left-0.5 w-72 mt-2 bg-zinc-900 border-solid border-2 border-gray-500 rounded-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700 rounded-t-xl"
                    onClick={() => handleRightOptionClick("React")}
                  >
                    React
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700"
                    onClick={() => handleRightOptionClick("Java")}
                  >
                    Java
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700"
                    onClick={() => handleRightOptionClick("Spring")}
                  >
                    Spring
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700 rounded-b-xl"
                    onClick={() => handleRightOptionClick("React Native")}
                  >
                    React Native
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
