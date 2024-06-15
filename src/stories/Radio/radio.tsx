import React from 'react';
import './radio.css';

interface RadioProps {
    /**
     * Disable Radio
     */
    disabled?: boolean;
    /**
     * How large should the Radio be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Radio contents
     */
    label: string;
    /**
     * Optional change handler
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Checked state
     */
    checked?: boolean;
    /**
     * ID for the radio button
     */
    id: string;/**
     * ID for the radio button
     */
    labelColour?: string;
}

export const Radio = ({ disabled , size = 'small', label, onChange, checked, id, labelColour }: RadioProps) => {
    const disableClass :string = disabled ? 'storybook-radio--disabled' : '';
    const labelClass :string = disabled ? 'disabled' : '';

    return (
        <label style={{ color: disabled ? '' : labelColour }} className={`storybook-radio-container radio-label radio-label--${size} ${labelClass}`} htmlFor={id}>
            <span className={`storybook-radio storybook-radio--${size} ${disableClass}`}>
                <input
                    type="radio"
                    id={id}
                    disabled={disabled}
                    onChange={onChange}
                    checked={checked}
                />
                <span className="checkmark"></span>
            </span>
            {label}
        </label>
    );
};
