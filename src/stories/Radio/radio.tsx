import React from 'react';
import styles from './radio.module.css';

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
    id: string;
    /**
     * Color for the label (if not disabled)
     */
    labelColour?: string;
}

/**
 * Radio component for user selection, styled using CSS modules.
 *
 * Props:
 * - `disabled`: If true, disables the radio button.
 * - `size`: Size of the radio button ('small', 'medium', 'large').
 * - `label`: Label text for the radio button.
 * - `onChange`: Optional change handler for when the radio button state changes.
 * - `checked`: If true, marks the radio button as checked.
 * - `id`: Unique ID for the radio button.
 * - `labelColour`: Color of the label text (if not disabled).
 *
 * This component uses CSS modules for scoped styles, ensuring encapsulation and minimizing global CSS conflicts.
 */
export const Radio = ({
                          disabled,
                          size = 'small',
                          label,
                          onChange,
                          checked,
                          id,
                          labelColour
                      }: RadioProps) => {
    const disableClass = disabled ? styles['storybook-radio--disabled'] : '';
    const labelClass = disabled ? styles.disabled : '';

    return (
        <label
            style={{color: disabled ? '' : labelColour}}
            className={`${styles['storybook-radio-container']} ${styles['radio-label']} ${styles[`radio-label--${size}`]} ${labelClass}`}
            htmlFor={id}
        >
      <span className={`${styles['storybook-radio']} ${styles[`storybook-radio--${size}`]} ${disableClass}`}>
        <input
            type="radio"
            id={id}
            disabled={disabled}
            onChange={onChange}
            checked={checked}
        />
        <span className={styles.checkmark}></span>
      </span>
            {label}
        </label>
    );
};

export default Radio;
