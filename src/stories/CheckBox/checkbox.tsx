import React, { useEffect, useState } from "react";
import styles from "./checkbox.module.css";


interface CheckBoxProps {
    /**
     * If true, the checkbox is disabled and cannot be interacted with.
     */
    disabled?: boolean;

    /**
     * Specifies the size of the checkbox. Can be 'small', 'medium', or 'large'.
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * Event handler called when the checkbox value changes.
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * If true, the checkbox is checked by default.
     */
    checked?: boolean;
}

/**
 * CheckBoxProps interface represents the properties required to render a customizable checkbox component.
 * - `disabled`: If true, disables the checkbox and prevents interaction.
 * - `size`: Specifies the size of the checkbox ('small', 'medium', 'large'). Default is 'medium'.
 * - `onChange`: Event handler function called when the checkbox value changes.
 * - `checked`: Specifies whether the checkbox is checked by default.
 */
const CheckBox = ({
                      size = 'medium',
                      disabled,
                      onChange,
                      checked = false,
                      ...props
                  }: CheckBoxProps) => {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        if (onChange) {
            onChange(e);
        }
    };

    const disableClass = disabled ? styles['storybook-radio--disabledcheckBox'] : '';

    return (
        <input
            type="checkbox"
            className={`${styles.storybookcheckBox} ${styles[`storybook-checkBox--${size}`]} ${disableClass}`}
            onChange={handleChange}
            checked={isChecked}
            disabled={disabled}
            {...props}
        />
    );
};

export default CheckBox;
