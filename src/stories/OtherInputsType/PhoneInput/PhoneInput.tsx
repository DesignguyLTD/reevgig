import React, {useEffect, useRef, useState} from "react";

import styles from "./PhoneInput.module.css";

interface PhoneInputProps {
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
    size?: "small" | "medium" | "large";

    /**
     * Type of the input field (e.g., 'text', 'password').
     */
    type?: string;

    name?: string;

    value?: string;

    onCountryChange?: (countryCode: string) => void;

    options?: { value: string; label: string }[];
}

const PhoneInput = ({
                        default: defaultProp,
                        focused,
                        error,
                        disabled,
                        label,
                        onChange,
                        errorMessage,
                        placeholder,
                        size = "small",
                        type = "text",
                        name,
                        value,
                        options = [
                            {value: "+234", label: "+234(NG)"},
                            {value: "+1", label: "+1(US)"},
                            {value: "+44", label: "+44(UK)"},
                            {value: "+91", label: "+91(IN)"},
                            {value: "+81", label: "+81(JP)"},
                        ],
                        onCountryChange,
                    }: PhoneInputProps) => {
    const [isFocused, setIsFocused] = useState(focused);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [valueInput, setValueInput] = useState("+234(NG)");

    useEffect(() => {
        setIsFocused(focused);
    }, [focused]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const handleDialogue = () => {
        setOpen(!open);
        handleBlur();
        handleFocus();
    };

    //   const options = [
    //     { value: "+234", label: "+234(NG)" },
    //     { value: "+1", label: "+1(US)" },
    //     { value: "+44", label: "+44(UK)" },
    //     { value: "+91", label: "+91(IN)" },
    //     { value: "+81", label: "+81(JP)" },
    //   ];

    const handleSelect = (option: { label: string; value: string }) => () => {
        const {label, value} = option;
        setValueInput(label);
        setOpen(false);
        localStorage.setItem("countryCode", value);

        if (onCountryChange) {
            onCountryChange(value);
        }
    };

    const labelStyle = error
        ? styles.error
        : disabled
            ? styles.disabled
            : defaultProp
                ? styles.default
                : "";

    return (
        <div style={{textAlign: "left"}}>
            {label && (
                <div
                    className={`${styles.InputLabel} ${labelStyle} ${styles[`InputLabel--${size}`]}`}>
                    {label}
                </div>
            )}

            <div className={styles.container}>
                <input
                    onClick={handleDialogue}
                    className={[
                        styles["storybook-input"],
                        styles[`storybook-input--${size}`],
                        error
                            ? styles["storybook-input--error"]
                            : disabled
                                ? styles["storybook-input--disabled"]
                                : "",
                    ].join(" ")}
                    type="text"
                    value={valueInput}
                    style={{
                        width: "90px",
                        height: "100%",
                        borderRadius: "8px 0px 0px 8px",
                        fontSize: "11px",
                        color: "#6D8494",
                        padding: "0px 10px 0 5px",
                    }}
                    onChange={onChange}
                />

                <input
                    disabled={disabled}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className={[
                        styles["storybook-input"],
                        styles[`storybook-input--${size}`],
                        error
                            ? styles["storybook-input--error"]
                            : disabled
                                ? styles["storybook-input--disabled"]
                                : "",
                    ].join(" ")}
                    value={value}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "0px 8px 8px 0px",
                    }}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <span onClick={handleDialogue}>
          <img
              className={styles.dropicon}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7dtNbtNAGAbgb5wiQVGrIAU1dOVVZSISWekBSJfsumTX3IAj0CP0CMmOJZyA3gCDUPEuYUWgkTC7qlI9eDqqiBAhzvjvG+d9VpGdzDjvG/8sJkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGC7BmXgun6znZjPZxFtGPXdH++3vd2H7asoml2RIYcMeb3+6wc7zk9xz5k87fYnB13/mDbEQffweHvHmWw1nA8qg06SBRkyOgO8bn8oiM4WNjUdEi9b7b3p/PvsI9WY1zs8cUi+SV7eX9g8aO09+Tr/8S2gNRmeAXLwr61COiOv559QTanwhZSjJbufkwGjAoQU0fJ99SxhRfjJ96ZfZMCsgDgeJZegjSlhZfgkI7kVn5EBowIuLoKAbuKjTSghTfjUkEdhEEzJgKAMOh3fp4bzXiY34WXvkSIehp+CMVkobfjJ73Htm++fMTKqawllhK/HyUHdSigrfD1WTupSQpnh6/FyZHsJZYevx8yZrSVUEb4etwC2lVBV+HrsgthSQpXh6/ELxL2EqsPXcxSMawkcwtfzlIBbCVzC13OVhEsJnMLX85Wo6hK4ha/nLFlVJXAMX89bgbJL4Bq+nrsiZZXAOXw9f4WKLoF7+PoYKlZUCTaEr4+DgbxLsCV8fSxM5FWCTeErbApQspZgW/gKqwKUNCUIQafxdTwOQ70SQa3T3N51XklJp0s/wzB8hV0BSpoSbgmpwmwmp4X737cxDV9hWYCSuoQVOIevsC1AyVoC9/AV4+XpZbhbgZfceqe0JhvCVzL9QaMMl5ezWWu//Y4kPRIk/DSfkVKeyy354ksQhMQc60vQ37xn/iB5BBqK26Xgwl3cp37xN1KMBcVvw8/BOVnCqgIWuX7y6HlNrnodxxTdPZICAAAAAAAAAAAAAAAAAAAAAAAAAABU5TdcKzF8ZhtK1gAAAABJRU5ErkJggg=="
              alt="dropdown"
          />
        </span>

                {open && (
                    <div ref={dropdownRef} className={styles.dropdownList}>
                        {options.map((option) => (
                            <li
                                key={option.value}
                                className={styles.listItem}
                                onClick={handleSelect(option)}>
                                {option.label}
                            </li>
                        ))}
                    </div>
                )}
            </div>

            {error && (
                <div
                    className={`${styles.InputError} ${styles[`InputLabel--${size}`]}`}>
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default PhoneInput;
