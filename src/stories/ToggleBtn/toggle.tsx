import React, { useState } from 'react';
import styles from "./toggle.module.css";

const Toggle = () => {
    const [toggleBtn, setToggleBtn] = useState(true);

    const handleToggleClick = () => {
        setToggleBtn((prevState) => !prevState);
    }

    return (
        <div className={`${styles.toggleCtn} ${toggleBtn ? styles.activeToggleCtn : ""}`} onClick={handleToggleClick}>
            <div className={`${styles.toggle} ${toggleBtn ? styles.active : ''}`}  />
        </div>
    )
}

export default Toggle