import React from "react";

interface CounterInputProps {
  maxLength: number;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CounterInput: React.FC<CounterInputProps> = ({
  maxLength,
  label,
  value,
  onChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= maxLength) {
      onChange(e);
    }
  };

  return (
    <>
      <label>{label}</label>

      <input type="text" value={value} onChange={handleInputChange} />
      <div>
        {value.length}/{maxLength}
      </div>
    </>
  );
};

export default CounterInput;
