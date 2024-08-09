import React from 'react';
import {Button} from "../../../stories/Button-I/Button";
import style from "./modal.module.css";
import {ButtonII} from "../../../stories/Button-II/ButtonII";


interface modalProps{
    handleGmail: () => void;
    handleSendAgain: () => void;
    email: string;
}
const Modal = ({handleGmail, handleSendAgain, email}:modalProps) => {
    return (
        <div className={style.container}>
            <div>
                <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1719703652/Reev/email_illustration_kb4gdq.svg" alt="mail illustration"/>
            </div>

            <div className={style.headerText}>
                <h1>Verify your email to continue</h1>
            </div>

            <div className={style.midText}>
                <p>  We just sent an email to the address:</p>
                <p>{email}</p>
                <p>Please check your email and select the link provided <br/> to verify your address.</p>
            </div>

            <div className={style.btnCont}>
                <ButtonII label='Send again' primary={false} hasIcon={false} disabled={false}  isLabelVisible={true} onClick={handleSendAgain}/>
                <ButtonII label='Go to Gmail Inbox' primary={true} hasIcon={false} disabled={false} isLabelVisible={true} onClick={handleGmail}/>
            </div>

            <div className={style.lowerText} onClick={handleSendAgain}>
                <span  className={style.makeYellow}>Didn’t receive email?</span>
            </div>
        </div>
    );
};

export default Modal;