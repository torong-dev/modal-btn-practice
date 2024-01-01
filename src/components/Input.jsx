import React from "react";

export default function Input() {
  return (
    <div className="pl-10 pb-10">
      <p className="text-3xl font-bold">Input</p>
      <div className="flex items-center mt-8">
        <form action="" className="font-semibold mr-8">
          이름 &nbsp;
          <input type="text" className="w-56 h-10 text-black rounded-lg px-1" />
        </form>
        <form action="" className="font-semibold mr-8">
          가격 &nbsp;
          <input type="text" className="w-56 h-10 text-black rounded-lg px-1" />
        </form>
        <button className="w-24 h-10 text-sm font-bold bg-green-500 hover:bg-green-600 focus:outline-none rounded-lg">
          저장
        </button>
      </div>
    </div>
  );
}
