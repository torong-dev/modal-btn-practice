import { useState } from "react";

export function useModal(initialState = "") {
  const [modalState, setModalState] = useState(initialState);

  const openModal = (modalType) => {
    setModalState(modalType);
  };

  const closeModal = () => {
    setModalState("");
  };

  const handleModalClick = (e) => {
    if (modalState && e.target === e.currentTarget) {
      closeModal();
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return {
    modalState,
    openModal,
    closeModal,
    handleModalClick,
    stopPropagation,
  };
}
