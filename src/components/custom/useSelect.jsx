import { useState } from "react";

export function useSelect(defaultOption) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return { isOpen, selectedOption, handleSelectClick, handleOptionClick };
}
