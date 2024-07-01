import React, { useState, useRef, ChangeEvent } from 'react';
import styles from './OTPinput.module.css'; // Import CSS module

interface OTPInputProps {
    /**
     * The length of the OTP. This determines how many digits the OTP should contain.
     */
    length: number;

    /**
     * Callback function that is called when the OTP is complete. This function is triggered when all digits of the OTP have been entered.
     */
    onComplete: (otp: string) => void;

    /**
     * Optional boolean that indicates if there's an error. If true, the OTP input fields will be styled to indicate an error.
     */
    error? : boolean;

    errorMessage? : string;

    onChange?: (otp: string) => void;

}

/**
 * OTPInput component for user input of OTP, styled using CSS modules.
 *
 * Props:
 * - `length`: The length of the OTP.
 * - `onComplete`: Callback function that is called when the OTP is complete.
 *
 * This component uses CSS modules for scoped styles, ensuring encapsulation and minimizing global CSS conflicts.
 */

const OTPInput: React.FC<OTPInputProps> = ({ length, onComplete , error, errorMessage, onChange}) => {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>(new Array(length).fill(null));

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (/^\d$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Call the onChange callback with the new OTP
            if (onChange) {
                onChange(newOtp.join(''));
            }

            if (index < length - 1) {
                inputRefs.current[index + 1]?.focus();
            }

            if (newOtp.every(v => v !== '')) {
                onComplete(newOtp.join(''));
            }
        }
    };



  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
        if (otp[index] === '' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);

        // Call the onChange callback with the new OTP
        if (onChange) {
            onChange(newOtp.join(''));
        }
    }
};

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain');
        if (!isNaN(Number(pastedData))) {
            const pastedArray = pastedData.split('');
            if (pastedArray.length === length) {
                setOtp(pastedArray);
                onComplete(pastedArray.join(''));
            }
        }
    };

   return (
       <div className={styles.container}>
           <div className={styles.otpContainer}>
               {otp.map((_, index) => (
                   <input
                       key={index}
                       type="text"
                       value={otp[index]}
                       onChange={(e) => handleChange(e, index)}
                       onKeyDown={(e) => handleKeyDown(e, index)}
                       onPaste={handlePaste}
                       maxLength={1}
                       ref={(el) => (inputRefs.current[index] = el)}
                       className={`${styles.otpInput} ${otp[index] === '' ? '' : styles.otpInput} ${error ? styles.error : ''}`}
                   />
               ))}

           </div>
           {error && <div className={`${styles.InputError} ${styles[`InputLabel`]}`}>{errorMessage}</div>}
       </div>

);
};

export default OTPInput;