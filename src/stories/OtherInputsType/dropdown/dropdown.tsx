import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import styles from "./dropdown.module.css";

interface OptionType {
    value: string;
    label: string;
}

interface DropdownProps {
    default?: boolean;
    focused?: boolean;
    error?: boolean;
    disabled?: boolean;
    label?: string;
    onChange: (option: OptionType) => void;
    errorMessage?: string;
    placeholder?: string;
    size?: "small" | "medium" | "large";
    options: OptionType[];
    defaultText: string;
    width?: string;
}

const CustomDropdown = memo(
    ({
         options,
         onChange,
         defaultText,
         error,
         focused,
         size,
         width
     }: {
        options: OptionType[];
        onChange: (option: OptionType) => void;
        defaultText: string;
        width?: string;
        error?: boolean;
        focused?: boolean;
        size?: "small" | "medium" | "large";
    }) => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
        const [isFocused, setIsFocused] = useState(focused);
        const [searchTerm, setSearchTerm] = useState("");
        const dropdownRef = useRef<HTMLDivElement>(null);

        const handleSelectOption = useCallback(
            (option: OptionType) => {
                setSelectedOption(option);
                setIsOpen(false);
                onChange(option);
            },
            [onChange]
        );

        // Function to handle keyboard input for filtering
        const handleKeyDown = useCallback(
            (event: KeyboardEvent) => {
                if (isOpen && event.key.length === 1) { // Only process character keys
                    const newSearchTerm = searchTerm + event.key.toLowerCase();
                    setSearchTerm(newSearchTerm);
                }
                if (isOpen && event.key === "Backspace") {
                    setSearchTerm(prev => prev.slice(0, -1));
                }
            },
            [isOpen, searchTerm]
        );

        const dropdownHeaderClass = `${styles.dropdownHeader} ${isFocused ? styles.focused : ""} ${error ? styles.error : ""}`;

        // Filter the options based on the current search term
        const filteredOptions = options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );

        useEffect(() => {
            // Handle clicks outside the dropdown
            const handleClickOutside = (event: MouseEvent) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            };

            // Listen for click and keydown events
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
                document.removeEventListener("keydown", handleKeyDown);
            };
        }, [dropdownRef, handleKeyDown]);

        return (
            <div
                className={styles.dropdown}
                tabIndex={0}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                <div
                    style={{ width }}
                    className={`${dropdownHeaderClass}  ${styles[`Dropdown--${size}`]}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedOption?.label || defaultText}
                    <span>
            <img
                style={{
                    width: "25px",
                    height: "25px",
                    marginTop: "8px",
                }}
                src={"https://res.cloudinary.com/do5wu6ikf/image/upload/v1727455544/Reev/27th%20Sept%202024/vuesax_bold_arrow-down_lbstcw.svg"}
                alt="dropdown"
            />
          </span>
                </div>
                <div
                    style={{ width }}
                    ref={dropdownRef}
                    className={`${styles.dropdownList} ${isOpen ? styles.dropdownListOpen : styles.dropdownListClose} ${styles[`Dropdown--${size}`]}`}
                >
                    {isOpen && (
                        filteredOptions.length > 0 ? (
                            filteredOptions.map((option: OptionType) => (
                                <div
                                    key={option.value}
                                    className={styles.dropdownItem}
                                    onClick={() => handleSelectOption(option)}
                                >
                                    {option.label}
                                </div>
                            ))
                        ) : (
                            <div className={styles.dropdownItem}>No results found</div>
                        )
                    )}
                </div>
            </div>
        );
    }
);

const Dropdown: React.FC<DropdownProps> = ({
                                               default: defaultProp,
                                               focused,
                                               error,
                                               disabled,
                                               label,
                                               onChange,
                                               errorMessage,
                                               placeholder,
                                               size = "small",
                                               options,
                                               defaultText,
                                               width
                                           }: DropdownProps) => {
    const labelStyle = error
        ? styles.error
        : disabled
            ? styles.disabled
            : defaultProp
                ? styles.default
                : "";

    return (
        <div className={styles.container}>
            {label && (
                <div className={`${styles.DropdownLabel} ${labelStyle} ${styles[`DropdownLabel--${size}`]}`}>
                    {label}
                </div>
            )}

            <CustomDropdown
                options={options}
                onChange={onChange}
                defaultText={defaultText}
                error={error}
                focused={focused}
                size={size}
                width={width}
            />

            {error && (
                <div className={`${styles.DropdownError} ${styles[`DropdownLabel--${size}`]}`}>
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
