import React, { useState, useEffect } from "react";
import styles from './input.module.css'; // Import CSS module

interface InputProps {
    /**
     * Sets the input to its default value or state.
     */
    default?: boolean;

    /**
     * Determines if the input field should be focused initially.
     */
    focused?: boolean;

    /**
     * Indicates that the input has an error, displaying an error message and styling accordingly.
     */
    error?: boolean;

    /**
     * Disables the input field if true.
     */
    disabled?: boolean;

    /**
     * Label text for the input field.
     */
    label?: string;

    /**
     * Optional function called when the input value changes.
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

    /**
     * Error message to display when `error` is true.
     */
    errorMessage?: string;

    /**
     * Placeholder text displayed when the input is empty.
     */
    placeholder?: string;

    /**
     * Size of the input field ('small', 'medium', 'large').
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * Type of the input field (e.g., 'text', 'password').
     */
    type?: string;

    /**
     * Indicates whether the input field is a textarea (true) or not (false).
     */
    isTextArea: boolean;

    /**
     * Maximum number of characters allowed in the input field.
     */
    maxContent?: number;
}

/**
 * Input component for user input, styled using CSS modules.
 *
 * Props:
 * - `default`: Sets the input to its default value or state.
 * - `focused`: Determines if the input field should be focused initially.
 * - `error`: Indicates that the input has an error, displaying an error message and styling accordingly.
 * - `disabled`: Disables the input field if true.
 * - `label`: Label text for the input field.
 * - `onChange`: Optional function called when the input value changes.
 * - `errorMessage`: Error message to display when `error` is true.
 * - `placeholder`: Placeholder text displayed when the input is empty.
 * - `size`: Size of the input field ('small', 'medium', 'large').
 * - `type`: Type of the input field (e.g., 'text', 'password').
 * - `isTextArea`: Indicates whether the input field is a textarea (true) or not (false).
 * - `maxContent`: Maximum number of characters allowed in the input field (only applicable if `isTextArea` is true).
 *
 * This component uses CSS modules for scoped styles, ensuring encapsulation and minimizing global CSS conflicts.
 */

const Input: React.FC<InputProps> = ({
                                         default: defaultProp,
                                         focused,
                                         error,
                                         disabled,
                                         label,
                                         onChange,
                                         errorMessage,
                                         placeholder,
                                         size = 'small',
                                         type = 'text',
                                         isTextArea,
                                         maxContent
                                     }: InputProps) => {
    const [isFocused, setIsFocused] = useState(focused);

    useEffect(() => {
        setIsFocused(focused);
    }, [focused]);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const labelStyle = error ? styles.error : disabled ? styles.disabled :  defaultProp ? styles.default : '';

    return (
        <>
            {label && <div className={`${styles.InputLabel} ${labelStyle} ${styles[`InputLabel--${size}`]}`}>{label}</div>}

            {isTextArea ?
                <textarea
                    cols={30}
                    rows={10}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={[
                        styles['storybook-input'],
                        styles[`storybook-input--${size}`],
                        error ? styles['storybook-input--error'] : disabled ? styles['storybook-input--disabled'] : ''
                        ].join(' ')}
                    style={{ resize: 'vertical',maxHeight: '100%',  maxWidth: '100%', minWidth: '100%', padding: '10px', height: '106px' }}
                    onChange={onChange}
                    maxLength={maxContent}
                ></textarea>
                :
                <input
                    disabled={disabled}
                    type={type}
                    placeholder={placeholder}
                    className={[
                        styles['storybook-input'],
                        styles[`storybook-input--${size}`],
                        error ? styles['storybook-input--error'] : disabled ? styles['storybook-input--disabled'] : ''
                    ].join(' ')}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            }

            {error && <div className={`${styles.InputError} ${styles[`InputLabel--${size}`]}`}>{errorMessage}</div>}
        </>
    );
};

export default Input;
