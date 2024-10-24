import CheckBox from "../../../../stories/CheckBox/checkbox";
import Dropdown from "../../../../stories/OtherInputsType/dropdown/dropdown";
import Input from "../../../../stories/FieldInput-I/input";
import Radio from "../../../../stories/Radio/radio";
import React, { ChangeEvent, useState } from "react";
import cloudImages from "../../../../assets";
import styles from "./paymentCard.module.css";
import { Country } from "country-state-city";
import { Button } from "../../../../stories/Button-I/Button";

/* eslint-disable jsx-a11y/anchor-is-valid */


const PaymentCard = () => {

    const [country, setCountry] = useState<string>("");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        verveName: 'Matthew Vincent',
        verveNumber: '4566 - 5642 - 8695 - 5168',
        verveId: "Matthew",
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
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddCard = () => {
        const fullName = `${formData.firstName} ${formData.lastName}`;

        //formatting the verve card number to have an hiphen
        const formatCardNumber = (number: string) => {
            return number.replace(/(\d{4})(?=\d)/g, "$1 - ");
        };

        setFormData((prevState) => ({
            ...prevState,
            verveName: fullName,
            verveNumber: formatCardNumber(formData.cardNumber),
            verveId: formData.firstName,
            expiryDate: formData.expiryDate,
            cvv: formData.cvv,
            city: formData.city,
            postalCode: formData.postalCode,
        }));
    };

    return (
        <div className={styles.Ctn}>
            <div className={styles.topCtn}>
                <div className={styles.logoAndTitle}>
                    <div className={styles.walletCtn}>
                        <img src={cloudImages.wallet} alt="wallet icon" />
                    </div>
                    <p>My cards</p>
                </div>
                <div className={styles.creditCard}>
                    <div className={styles.cardDetails}>
                        <div className={styles.cardType}>
                            <p>Credit</p>
                            <p>VISA</p>
                        </div>
                        <div className={styles.cardInfo}>
                            <p>{formData.verveName}</p>
                            <p>{formData.verveNumber}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.nameAndCardEdit}>
                    <div className={styles.editName}>
                        <p>{formData.verveId} card</p>
                        <div className={styles.editIconCtn}>
                            <img src={cloudImages.edit} alt="edit icon" />
                        </div>
                    </div>
                    <div className={styles.addCard}>
                        <img src="https://res.cloudinary.com/doijevrqo/image/upload/v1726439720/Add_rxdhxk.svg" alt="upload icon" />
                        <p>Add another Card</p>
                    </div>
                </div>
            </div>

            <div className={styles.btmCtn}>
                <img src={cloudImages.exit} alt="cancel icon" />
                <form className={styles.paymentForm}>
                    <h4 className={styles.paymentH4}>Payment Card</h4>
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
                                    onChange={({ value }) => setCountry(value)}
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
                        <CheckBox size="small" checked={false} />
                        <label>save card details</label>
                    </div>
                    <div className={styles.BtnCtn}>
                        <Button label="Add Card" size="large" icon={false} onClick={handleAddCard} />
                        <p>Your personal data will be used to process your order, support your experience throughout the
                            website and for other purposes described in our privacy policy.</p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default PaymentCard