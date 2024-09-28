import React, {useState} from 'react';
import styles from './PaymentSkills.module.css'
import cloudImages from "../../assets";
import style from "./jobs.module.css";
import RadioButton from "../../stories/RadioButton/RadioButton";

interface givenProps {
    setActiveComponent: (x: string) => void
}

const PaymentSkills = ({setActiveComponent}: givenProps) => {

    const [selectedValue1, setSelectedValue1] = useState<string>("");

    const handleRadioChange1 = (value: string) => {
        setSelectedValue1(value);
    };

    return (
        <div className={styles.PaymentSkillsCtn}>
            <div className={styles.PaymentSkillsTop} onClick={() => setActiveComponent('jobs_skills')}>
                <img src={cloudImages.backArrow} alt=""/>
                Payment
            </div>

            <hr className={styles.hr}/>
            <div className={styles.PaymentSkillsRadio}>
                <br/>
                <div className={style.Budget}>Pay with:</div>
                <div className={style.rate}>
                    <RadioButton
                        id={'paymenttype'}

                        name={"Card"}
                        value={"Card"}
                        selectedValue={selectedValue1}
                        onChange={handleRadioChange1}
                    />

                    <RadioButton
                        id={'paymenttype'}
                        name={"Local Bank Deposit"}
                        value={'Local Bank Deposit'}
                        selectedValue={selectedValue1}
                        onChange={handleRadioChange1}
                    />

                    <div style={{visibility: 'hidden'}}>
                        <RadioButton
                            id={'rate'}
                            name={"Fixed Price"}
                            value={"Fixed Price"}
                            selectedValue={selectedValue1}
                            onChange={handleRadioChange1}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.PaymentSkillsForm}>

            </div>

        </div>
    );
};

export default PaymentSkills;