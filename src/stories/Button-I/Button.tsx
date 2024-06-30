import React from 'react';
import styles from './button.module.css'; // Import CSS module

interface ButtonProps {
    /**
     * Determines if the button should render as the primary call-to-action button.
     */
    primary?: boolean;

    /**
     * Disables the button interaction and changes its appearance.
     */
    disabled?: boolean;

    /**
     * Specifies the background color of the button.
     */
    BorderColor?: string;

    /**
     * Sets the size of the button.
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * The text displayed on the button.
     */
    label: string;

    /**
     * The text displayed on the button.
     */
    icon: boolean;

    /**
     * Optional click handler for the button.
     */
    onClick?: () => void;

    imgLink?: string;
}

/**
 * Primary UI component for user interaction, styled using CSS modules.
 *
 * This component supports customization through props:
 * - `primary`: If true, renders the button as the primary call-to-action.
 * - `disabled`: If true, disables the button interaction and changes its appearance.
 * - `backgroundColor`: Sets the background color of the button.
 * - `size`: Determines the size of the button ('small', 'medium', 'large').
 * - `label`: The text displayed on the button.
 * - `onClick`: Optional click handler function.
 *
 * The styling is managed using CSS modules to ensure scoped styles and prevent global CSS conflicts.
 */
export const Button = ({
                           primary = false,
                           size = 'medium',
                           BorderColor,
                           label,
                           disabled = false,
                            icon,
                            imgLink,
                           ...props
                       }: ButtonProps) => {
    const mode = primary ? styles['storybook-button--primary'] : styles['storybook-button--secondary'];
    const disable = disabled ? styles['storybook-button--disabled'] : '';

    // Join all classes using CSS modules
    const buttonClasses = [
        styles['storybook-button'],
        styles[`storybook-button--${size}`],
        mode,
        disable
    ].join(' ');

    return (
        <button
            disabled={disabled}
            type="button"
            className={buttonClasses}
            style={{borderColor: BorderColor}}
            {...props}
        >
            {icon && <span className={styles['icon']}><img src={imgLink} alt="btn icon"/></span>}
            {label}
        </button>
    );
};
