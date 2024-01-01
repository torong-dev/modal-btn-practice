import React from "react";

export default function Modal() {
  return (
    <div className="pl-10 pb-10">
      <p className="text-3xl font-bold">Modal</p>
      <div className="flex items-center mt-8">
        <button className="w-24 h-10 text-sm font-bold bg-green-500 hover:bg-green-600 focus:outline-none rounded-lg mr-4">
          Small
        </button>
        <button className="flex justify-center items-center w-52 h-12 text-sm text-red-300 font-bold border-2 border-red-300 hover:bg-red-900 rounded-xl gap-1 mr-4">
          open modal
        </button>
      </div>
    </div>
  );
}
