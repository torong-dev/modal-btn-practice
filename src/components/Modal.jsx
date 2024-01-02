import React from "react";
import { Portal } from "react-portal";
import { useModal } from "./custom/useModal";

export default function Modal() {
  const {
    modalState,
    openModal,
    closeModal,
    handleModalClick,
    stopPropagation,
  } = useModal();

  return (
    <div className="pl-10 pb-10">
      <p className="text-3xl font-bold">Modal</p>
      <div className="flex items-center mt-8">
        <button
          onClick={() => openModal("green")}
          className="w-24 h-10 text-sm font-bold bg-green-500 hover:bg-green-600 focus:outline-none rounded-lg mr-4"
        >
          open modal
        </button>
        <button
          onClick={() => openModal("red")}
          className="flex justify-center items-center w-52 h-12 text-sm text-red-300 font-bold border-2 border-red-300 hover:bg-red-900 rounded-xl gap-1 mr-4"
        >
          open modal
        </button>
        <Portal>
          {modalState === "green" && (
            <div
              onClick={stopPropagation}
              className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center"
            >
              <div className="bg-white p-4 w-auto h-80 rounded-lg shadow-md">
                <p className="text-black">
                  닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                  않아요.
                </p>
                <div className="mt-56 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="w-24 h-10 text-sm text-red-200 font-bold bg-red-500 hover:bg-red-600 focus:outline-none rounded-lg mr-4"
                  >
                    닫기
                  </button>
                  <button className="w-24 h-10 text-sm font-bold bg-green-500 hover:bg-green-600 focus:outline-none rounded-lg">
                    확인
                  </button>
                </div>
              </div>
            </div>
          )}
          {modalState === "red" && (
            <div
              onClick={handleModalClick}
              className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center"
            >
              <div className="bg-white flex p-4 w-auto h-52 rounded-lg shadow-md">
                <p className="mr-4 text-black">
                  닫기 버튼 1개가 있고,
                  <br /> 외부 영역을 누르면 모달이 닫혀요
                </p>
                <div
                  onClick={closeModal}
                  className="flex justify-center items-center w-10 h-10 text-black text-sm bg-gray-200 border border-gray-300 focus:outline-1 outline-black rounded-full cursor-pointer hover:border-black"
                >
                  X
                </div>
              </div>
            </div>
          )}
        </Portal>
      </div>
    </div>
  );
}
