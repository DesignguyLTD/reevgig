import React from 'react';
import styles from './ButtonII.module.css';

interface ButtonIIProps {
    /**
     * Determines if this button is the primary call to action on the page.
     */
    primary?: boolean;

    /**
     * If true, the button will be disabled and unclickable.
     */
    disabled?: boolean;

    /**
     * Indicates whether the button includes an icon.
     */
    hasIcon: boolean;

    /**
     * Indicates the state of the button's label.
     */
    isLabelVisible: boolean;

    /**
     * Specifies the size of the button. Can be 'small', 'medium', or 'large'.
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * The text to be displayed inside the button.
     */
    label: string;

    /**
     * Optional click handler function to be executed when the button is clicked.
     */
    onClick?: () => void;

    icon?: string;
    invert?: string;
}

/**
 * ButtonIIProps interface represents the properties required to render a customizable button component.
 * - `primary`: If true, the button is styled as the primary call to action.
 * - `disabled`: If true, the button is disabled and not clickable.
 * - `hasIcon`: Indicates if the button includes an icon.
 * - `isLabelVisible`: Controls the visibility of the button's label.
 * - `size`: Specifies the size of the button, with 'small', 'medium', and 'large' options.
 * - `label`: The text displayed on the button.
 * - `onClick`: An optional function to handle click events.
 */

export const ButtonII = ({
                             isLabelVisible,
                             hasIcon,
                             primary,
                             size = 'medium',
                             label,
                                invert,
                             disabled,
                             icon,
                             ...props
                         }: ButtonIIProps) => {
    const mode = primary ? styles.storybookButtonPrimary : styles.storybookButtonSecondary;
    const modeNoLabel = primary ? styles.noLabelButtonPrimary : styles.noLabelButtonSecondary;
    const disabledClass = primary ? styles.storybookButtonDisabled : styles.storybookButtonSecondaryDisabled;
    const disabledClassNoLabel = primary ? styles.noLabelButtonDisabled : styles.noLabelButtonSecondaryDisabled;

    return (
        <button
            disabled={disabled}
            type="button"
            className={isLabelVisible ? [
                disabled ? disabledClass : '',
                styles.storybookButton,
                styles[`storybookButton${size.charAt(0).toUpperCase() + size.slice(1)}`],
                mode,
            ].join(' ') : [styles.noLabel, styles[`noLabel${size.charAt(0).toUpperCase() + size.slice(1)}`], modeNoLabel, disabled ? disabledClassNoLabel : ''].join(' ')}
            {...props}
        >
            {isLabelVisible && <div>{label}</div>}
            {hasIcon && <img className={ styles[`Button${invert}`]} src={icon} alt="icon"/>}
        </button>
    );
};
