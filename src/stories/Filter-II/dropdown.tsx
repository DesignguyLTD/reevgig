import CheckBox from "../CheckBox/checkbox";
import React from "react";
import styling from "./dropdown.module.css";
import { useState } from "react";

export interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  headings: string;
  style?: object;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, headings }) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    // setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styling.container}>
      <div onClick={toggleDown}>
        <div className={styling.heading}>
          <label htmlFor="headings">{headings}</label>

          <img
            className={isOpen ? styling.default : styling.arrow}
            src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727734636/arrow-down_gxkukg.svg"
            alt=""
          />
        </div>
      </div>
      {isOpen && (
        <div>
          {options.map((option) => (
            <div
              className={styling.items}
              key={option}
              onClick={() => handleOptionClick}>
              <CheckBox size="small" /> <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
