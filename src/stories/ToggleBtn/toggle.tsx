import React from "react";
import styles from "./toggle.module.css";

interface ToggleBtnProps {
    toggleValue: boolean;
    onClick: (value: boolean) => void;
    backgroundColor: string;
    activebackgroundColor: string;
    borderColor: string;
    toggleColor?: string;
    size: "small" | "medium" | "large";
}

const Toggle: React.FC<ToggleBtnProps> = ({
    onClick,
    toggleValue,
    backgroundColor,
    activebackgroundColor,
    borderColor,
    toggleColor = "grey",
    size
}) => {
    return (
        <div
            className={`${styles.toggleCtn} ${styles[`toggleCtn--${size}`]} ${toggleValue ? styles.activeToggleCtn : ""}`}
            onClick={() => onClick(!toggleValue)}
            style={{ backgroundColor: toggleValue ? activebackgroundColor : backgroundColor, borderColor }}>
            <div
                className={`${styles.toggle} ${toggleValue ? styles.active : ''}`}
                style={{ backgroundColor: toggleValue ? toggleColor : "grey" }} />
        </div>
    );
}

export default Toggle;
