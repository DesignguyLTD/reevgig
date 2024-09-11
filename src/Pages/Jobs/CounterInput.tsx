import React from "react";
import style from "./counterInput.module.css";

interface CounterInputProps {
    maxLength: number;
    label: string;
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

const CounterInput: React.FC<CounterInputProps> = ({
                                                       maxLength,
                                                       label,
                                                       value,
                                                       placeholder,
                                                       onChange,
                                                   }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (inputValue.length <= maxLength) {
            onChange(inputValue);
        }
    };

    return (
        <>
            <p className={style.label}>{label}</p>
            <div className={style.container}>
                <input
                    type="text"
                    className={style.input}
                    value={value}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                />
                <div className={style.numbers}>
                    {value.length}/{maxLength}
                </div>
            </div>
        </>
    );
};

export default CounterInput;
