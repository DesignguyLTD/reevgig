import React from 'react';
import Payment from '../DashBoard/planAndBillings/paymentCard/paymentCard';
import PaymentTransact from '../DashBoard/planAndBillings/paymentTransaction/paymentTransact';

const PaymentPage = () => {
    const [currentPage, setCurrentPage] = React.useState<string>(
        localStorage.getItem('currentPage') || 'Overview'
    );
    const getActivePage = (x: string): string => {
        setCurrentPage(x);
        localStorage.setItem('currentPage', x);
        return x;
    }
    return (
        <div>
            {currentPage === 'withdraw' ?
                <><Payment getActivePage={getActivePage}/></>
                :
                <PaymentTransact getActivePage={getActivePage}/>

            }

        </div>
    );
};

export default PaymentPage;