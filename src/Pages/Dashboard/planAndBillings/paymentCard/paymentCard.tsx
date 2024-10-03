import CheckBox from "../../../../stories/CheckBox/checkbox";
import Dropdown from "../../../../stories/OtherInputsType/dropdown/dropdown";
import Input from "../../../../stories/FieldInput-I/input";
import Radio from "../../../../stories/Radio/radio";
import React, {ChangeEvent, useState} from "react";
import cloudImages from "../../../../assets";
import styles from "./paymentCard.module.css";
import {Country} from "country-state-city";
import {Button} from "../../../../stories/Button-I/Button";
import { ButtonII } from "../../../../stories/Button-II/ButtonII";


interface PaymentTransProps{
    getActivePage: (x: string) => string;

}

const Payment = ({getActivePage} :PaymentTransProps) => {

    const [country, setCountry] = useState<string>("");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        city: '',
        postalCode: ''
    });


    const countryOptions = Country.getAllCountries().map((country) => ({
        value: country.isoCode,
        label: country.name
    }));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // const handleSubmit = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', formData);
    // };

    return (
        <div className={styles.Ctn}>
            <div className={styles.topCtn}>
                <div className={styles.topText}>
                    <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859248/Reev/2nd%20oct/Frame_1171275861_nmiuz8.svg" alt="BillIcon"/>
                    Card
                </div>
                <div className={styles.topCard}>
                    <div className={styles.Details}>
                        <div>Odediran Philip Oluseyi</div>
                        <div>4556 - 5642 - 06** - ****</div>
                    </div>
                    <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859250/Reev/2nd%20oct/Group_1171275882_wwx9zq.svg" alt="Card"/>
                </div>
                <div className={styles.topCardEdit}>
                    <div className={styles.topText2}>Seyifunmi`s Visa Card <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859248/Reev/2nd%20oct/Button_xxzerp.svg" alt="edit"/></div>
                    <div className={styles.PaymentTopOneAddCard}><img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859248/Reev/2nd%20oct/Add_wpc6ce.svg" alt="Add"/> Add another Card</div>
                </div>
            </div>

            <div className={styles.btmCtn}>
                <div className={styles.paymentH4Ctn}>
                    <div className={styles.paymentH4}>Payment</div>
                    <img src={cloudImages.exit} style={{cursor: 'pointer'}} onClick={() => getActivePage ? getActivePage('back') : ''} alt="cancel icon"/>
                </div>
                <form className={styles.paymentForm}>
                    {/*<div className={styles.radioCtn}>*/}
                    {/*    <div>Pay With:</div>*/}
                    {/*</div>*/}
                    <div>
                        <div className={styles.names}>
                            <div className={styles.firstNameCtn}>
                                <Input
                                    label="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    isTextArea={false}
                                    type="text"
                                    size='small'
                                />
                            </div>
                            <div className={styles.lastNameCtn}>
                                <Input
                                    label="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    isTextArea={false}
                                    type="text"
                                    size='small'
                                />
                            </div>
                        </div>
                        <div className={styles.cardInput}>
                            <div className={styles.cardNoCtn}>
                                <Input
                                    label="Card Number"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    isTextArea={false}
                                    type="tel"
                                    placeholder="1234 5678 9101 1121"
                                    size='small'
                                />
                            </div>
                            <div className={styles.expDateCtn}>
                                <Input
                                    label="Expiration Date"
                                    name="expiryDate"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    isTextArea={false}
                                    type="tel"
                                    placeholder="MM/YY"
                                    size='small'
                                />
                            </div>
                            <div className={styles.cvvCtn}>

                                <Input
                                    label="CVV"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    isTextArea={false}
                                    type="tel"
                                    placeholder="123"
                                    size='small'
                                />
                            </div>
                        </div>
                        <div className={styles.location}>
                            <div className={styles.countryCtn}>
                                <Dropdown
                                    label='Billing Address'
                                    onChange={({value}) => setCountry(value)}
                                    errorMessage="Country must be selected"
                                    options={countryOptions}
                                    defaultText={country === "" ? "Nigeria" : country}
                                />
                            </div>

                            <div className={styles.cityCtn}>
                                <Input
                                    label="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange} isTextArea={false}
                                    type="text"
                                    size='small'
                                />
                            </div>
                            <div className={styles.postalCtn}>
                                <Input
                                    label="Postal Code (Optional)"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    isTextArea={false}
                                    type="tel"
                                    size='small'
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.checkboxCtn}>
                        <CheckBox size="small" checked={false}/>
                        <label>Save Card details</label>
                    </div>
                    <div className={styles.BtnCtn}>
                        <ButtonII
                            hasIcon={false}
                            isLabelVisible={true}
                            label="Add Card"
                            primary={true}
                            size="medium"
                        />
                        <p>Your personal data will be used to process your order, support your experience throughout the
                            website and for other purposes described in our privacy policy.</p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Payment