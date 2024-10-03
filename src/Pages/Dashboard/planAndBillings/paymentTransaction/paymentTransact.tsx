import React from "react";
import ResponsiveTable from "../../playGround";
import stylesOne from './paymentTransact.module.css';

interface PaymentTransProps{
    getActivePage: (x: string) => string;

}

const PaymentTransact = ({getActivePage} :PaymentTransProps) => {
    return (
        <div className={stylesOne.PaymentTransact}>
           <div className={stylesOne.PaymentTopCtn}>
               <div className={stylesOne.PaymentTopOne}>
                   <div className={stylesOne.PaymentTopOneHeaderCtn}>
                       <div>
                           <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859248/Reev/2nd%20oct/Frame_1171275861_nmiuz8.svg" alt="BillIcon"/>
                       </div>
                       <div className={stylesOne.PaymentTopOneAdd}><img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859248/Reev/2nd%20oct/Add_wpc6ce.svg" alt="Add"/> Add Money</div>
                   </div>
                   <div  className={stylesOne.PaymentTopOneText}>Wallet Balance</div>
                   <div className={stylesOne.PaymentTopOneAmount}>$53,009.89</div>
               </div>
               <div className={stylesOne.PaymentTopTwo}>
                   <div className={stylesOne.PaymentTopOneHeaderCtn}>
                       <div>
                           <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725752189/Reev/Frame_1171275861_qbbiiv.svg" alt="BillIcon"/>
                       </div>
                       <div className={stylesOne.PaymentTopOneAdd}><img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859248/Reev/2nd%20oct/Add_wpc6ce.svg" alt="Add"/> Withdraw</div>
                   </div>
                   <div  className={stylesOne.PaymentTopOneText}>Billing Method</div>
                   <div className={stylesOne.PaymentTopOneHeaderCtn}>
                       <div className={stylesOne.PaymentTopOneAmount}>1234 **** **** ****</div>
                       <img style={{cursor: 'pointer'}} src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859249/Reev/2nd%20oct/Frame_1171275875_j08xwj.svg" alt="Delete"/>
                   </div>
               </div>
           </div>

            <div className={stylesOne.PaymentMiddleCtn}>
                <div className={stylesOne.PaymentMiddleBtn}    onClick={() => getActivePage ? getActivePage('withdraw') : ''}>
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725752188/Reev/Add_kzvi5c.svg" alt="Add"/>
                   Withdraw
                </div>
                <div className={stylesOne.PaymentMiddleToast}>
                    <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859250/Reev/2nd%20oct/material-symbols_info-outline_xxnsls.svg" alt="info"/>
                    Be rest assured that your payment is safe in your wallet till the project is completed
                    <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859248/Reev/2nd%20oct/Cross_ar9qqh.svg" alt="close"/>
                </div>
            </div>

            <div className={stylesOne.PaymentBottomCtn}>
                <br/>
                <div className={stylesOne.PaymentBottomTransaction}>
                    <div className={stylesOne.PaymentBottomTransactionText}>Transactions</div>
                    <div className={stylesOne.PaymentBottomDaysText}>Last 30 days<img
                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725753843/Reev/Icon_Stroke_d2hmut.svg"
                        alt="arrowDown"/>
                    </div>
                </div>
                <ResponsiveTable/>
            </div>
        </div>
    )
}

export default PaymentTransact;