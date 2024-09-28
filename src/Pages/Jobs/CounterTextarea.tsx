import React from "react";
import style from "./counterTextarea.module.css";

interface CounterTextareaProps {
    maxLength: number;
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}

const CounterTextarea: React.FC<CounterTextareaProps> = ({
                                                             maxLength,
                                                             label,
                                                             value,
                                                             placeholder,
                                                             onChange,
                                                         }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;

        if (inputValue.length <= maxLength) {
            onChange(inputValue);
        }
    };

    return (
        <>
            <div className={style.label}>{label}</div>
            <div className={style.container}>
            <textarea
                className={` ${style.textarea}`}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <div className={style.numbers}>
                {value.length}/{maxLength}
            </div>
            </div>
        </>
    );
};

export default CounterTextarea;
