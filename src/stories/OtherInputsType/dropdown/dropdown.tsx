import React, { useState, useEffect, useCallback, memo } from 'react';
import styles from './dropdown.module.css';

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
  size?: 'small' | 'medium' | 'large'
  options: OptionType[];
  defaultText: string;
}

const CustomDropdown = memo(({ options, onChange, defaultText, error, focused, size}: { options: OptionType[]; onChange: (option: OptionType) => void;  defaultText: string, error?: boolean, focused?: boolean; size?: 'small' | 'medium' | 'large'; }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [isFocused, setIsFocused] = useState(focused);

  const handleSelectOption = useCallback((option: OptionType) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  }, [onChange]);

  const dropdownHeaderClass = `${styles.dropdownHeader} ${isFocused ? styles.focused : ''} ${error ? styles.error : ''}`;

  return (
    <div className={styles.dropdown} tabIndex={0} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
      <div className={`${dropdownHeaderClass}  ${styles[`Dropdown--${size}`]}`} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption?.label || defaultText}
        <span>
          <img style={{width: '25px', height: '25px', marginTop: '8px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7dtNbtNAGAbgb5wiQVGrIAU1dOVVZSISWekBSJfsumTX3IAj0CP0CMmOJZyA3gCDUPEuYUWgkTC7qlI9eDqqiBAhzvjvG+d9VpGdzDjvG/8sJkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGC7BmXgun6znZjPZxFtGPXdH++3vd2H7asoml2RIYcMeb3+6wc7zk9xz5k87fYnB13/mDbEQffweHvHmWw1nA8qg06SBRkyOgO8bn8oiM4WNjUdEi9b7b3p/PvsI9WY1zs8cUi+SV7eX9g8aO09+Tr/8S2gNRmeAXLwr61COiOv559QTanwhZSjJbufkwGjAoQU0fJ99SxhRfjJ96ZfZMCsgDgeJZegjSlhZfgkI7kVn5EBowIuLoKAbuKjTSghTfjUkEdhEEzJgKAMOh3fp4bzXiY34WXvkSIehp+CMVkobfjJ73Htm++fMTKqawllhK/HyUHdSigrfD1WTupSQpnh6/FyZHsJZYevx8yZrSVUEb4etwC2lVBV+HrsgthSQpXh6/ELxL2EqsPXcxSMawkcwtfzlIBbCVzC13OVhEsJnMLX85Wo6hK4ha/nLFlVJXAMX89bgbJL4Bq+nrsiZZXAOXw9f4WKLoF7+PoYKlZUCTaEr4+DgbxLsCV8fSxM5FWCTeErbApQspZgW/gKqwKUNCUIQafxdTwOQ70SQa3T3N51XklJp0s/wzB8hV0BSpoSbgmpwmwmp4X737cxDV9hWYCSuoQVOIevsC1AyVoC9/AV4+XpZbhbgZfceqe0JhvCVzL9QaMMl5ezWWu//Y4kPRIk/DSfkVKeyy354ksQhMQc60vQ37xn/iB5BBqK26Xgwl3cp37xN1KMBcVvw8/BOVnCqgIWuX7y6HlNrnodxxTdPZICAAAAAAAAAAAAAAAAAAAAAAAAAABU5TdcKzF8ZhtK1gAAAABJRU5ErkJggg==" alt="dropdown"/>
        </span>
      </div>
      {isOpen && (
        <div className={`${styles.dropdownList}  ${styles[`Dropdown--${size}`]}`}>
          {options.map((option: OptionType) => (
            <div
              key={option.value}
              className={styles.dropdownItem}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

const Dropdown: React.FC<DropdownProps> = ({
  default: defaultProp,
  focused,
  error,
  disabled,
  label,
  onChange,
  errorMessage,
  placeholder,
  size = 'small',
  options,
  defaultText
}: DropdownProps) => {
  const labelStyle = error ? styles.error : disabled ? styles.disabled : defaultProp ? styles.default : '';

  return (
    <>
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
      />

      {error && <div className={`${styles.DropdownError} ${styles[`DropdownLabel--${size}`]}`}>{errorMessage}</div>}
    </>
  );
};

export default Dropdown;