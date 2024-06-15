import React, { useState, useEffect } from "react";
import './input.css';

interface InputProps {
    /**
     * Set the input to its default state
     */
    default?: boolean;

    /**
     * Make the input field focused initially
     */
    focused?: boolean;

    /**
     * Display an error message and style the input as an error
     */
    error?: boolean;

    /**
     * Disable the input field
     */
    disabled?: boolean;

    /**
     * Label text for the input field
     */
    label?: string;

    /**
     * Optional change handler for the input field
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Error message to display when there is an error
     */
    errorMessage?: string;

    /**
     * Placeholder text for the input field
     */
    placeholder?: string;

    /**
     * Set the size of the input field
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * Background color of the input field
     */
    backgroundColor?: string;

    /**
     * Type of the input field (e.g., text, password)
     */
    type?: string;
}


const errorStyle: React.CSSProperties = {
    color: 'red'
};

const disabledStyle: React.CSSProperties = {
    color: 'rgb(217, 217, 217)',
    cursor: 'not-allowed'
};

const defaultStyle: React.CSSProperties = {
    color: 'rgb(24, 24, 24)'
};

const focusedStyle: React.CSSProperties = {
    color: 'rgb(254, 194, 0)'
};

export const Input: React.FC<InputProps> = ({
                                                default: defaultProp,
                                                focused,
                                                error,
                                                disabled,
                                                label,
                                                onChange,
                                                errorMessage,
                                                placeholder,
                                                size = 'small',
                                                backgroundColor,
                                                type = 'text'
                                            }: InputProps) => {
    const [isFocused, setIsFocused] = useState(focused);

    useEffect(() => {
        setIsFocused(focused);
    }, [focused]);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const labelStyle = error ? errorStyle : disabled ? disabledStyle : isFocused ? focusedStyle : defaultProp ? defaultStyle : {};

    return (
        <>
            {label && <div style={labelStyle} className={`InputLabel InputLabel--${size}`} >{label}</div>}
            <input
                disabled={disabled}
                type={type}
                placeholder={placeholder}
                className={[
                    'storybook-input',
                    `storybook-input--${size}`,
                    error ? 'storybook-input--error' : disabled ? 'storybook-input--disabled' : ''
                ].join(' ')}
                style={{ backgroundColor }}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {error && <div style={errorStyle} className={`InputError InputLabel--${size}`}>{errorMessage}</div>}
        </>
    );
};
