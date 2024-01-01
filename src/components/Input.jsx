import React, { useState } from "react";

export default function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    const removeCommaNum = e.target.value.replace(/,/g, "");
    const commaNum = Number(removeCommaNum).toLocaleString();
    setPrice(commaNum);
  };

  const handleSaveBtnClick = () => {
    alert(`{ name: ${name}, price: ${price} }`);
  };

  return (
    <div className="pl-10 pb-10">
      <p className="text-3xl font-bold">Input</p>
      <div className="flex items-center mt-8">
        <form className="font-semibold mr-8">
          이름 &nbsp;
          <input
            onChange={handleNameChange}
            type="text"
            value={name}
            className="w-56 h-10 text-black rounded-lg px-1"
          />
        </form>
        <form className="font-semibold mr-8">
          가격 &nbsp;
          <input
            onChange={handlePriceChange}
            type="text"
            value={price}
            className="w-56 h-10 text-black rounded-lg px-1"
          />
        </form>
        <button
          onClick={handleSaveBtnClick}
          className="w-24 h-10 text-sm font-bold bg-green-500 hover:bg-green-600 focus:outline-none rounded-lg"
        >
          저장
        </button>
      </div>
    </div>
  );
}
