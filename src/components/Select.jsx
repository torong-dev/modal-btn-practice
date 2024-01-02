import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { useSelect } from "./custom/useSelect";

export default function Select() {
  const leftSelect = useSelect("React");
  const rightSelect = useSelect("React");

  const handleLeftSelectClick = () => {
    if (rightSelect.isOpen) {
      rightSelect.handleSelectClick();
    }
    leftSelect.handleSelectClick();
  };

  const handleRightSelectClick = () => {
    if (leftSelect.isOpen) {
      leftSelect.handleSelectClick();
    }
    rightSelect.handleSelectClick();
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
              {leftSelect.selectedOption} <FaCaretDown />
              {leftSelect.isOpen && (
                <div
                  className="fixed top-[690px] left-[44px] text-left w-72 mt-2 bg-zinc-900 border-solid border-2 border-gray-500 rounded-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700 rounded-t-xl"
                    onClick={() => leftSelect.handleOptionClick("React")}
                  >
                    React
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700"
                    onClick={() => leftSelect.handleOptionClick("Java")}
                  >
                    Java
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700"
                    onClick={() => leftSelect.handleOptionClick("Spring")}
                  >
                    Spring
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700 rounded-b-xl"
                    onClick={() => leftSelect.handleOptionClick("React Native")}
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
              {rightSelect.selectedOption} <FaCaretDown />
              {rightSelect.isOpen && (
                <div
                  className="absolute text-left top-full -left-0.5 w-72 mt-2 bg-zinc-900 border-solid border-2 border-gray-500 rounded-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700 rounded-t-xl"
                    onClick={() => rightSelect.handleOptionClick("React")}
                  >
                    React
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700"
                    onClick={() => rightSelect.handleOptionClick("Java")}
                  >
                    Java
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700"
                    onClick={() => rightSelect.handleOptionClick("Spring")}
                  >
                    Spring
                  </div>
                  <div
                    className="pl-4 pr-4 pt-2 pb-2 cursor-pointer hover:bg-zinc-700 rounded-b-xl"
                    onClick={() =>
                      rightSelect.handleOptionClick("React Native")
                    }
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
