import CheckBox from "../../../../stories/CheckBox/checkbox";
import Dropdown from "../../../../stories/OtherInputsType/dropdown/dropdown";
import Input from "../../../../stories/FieldInput-I/input";
import Radio from "../../../../stories/Radio/radio";
import React, { ChangeEvent, useState } from "react";
import cloudImages from "../../../../assets";
import styles from "./payment.module.css";
import { Country } from "country-state-city";
import { Button } from "../../../../stories/Button-I/Button";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Payment = () => {

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
        const { name, value } = e.target;
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
                <div className={styles.addMoneyCtn}>
                    <div className={styles.levelUpIcon}>
                        <img src={cloudImages.levelUp} alt="level up icon" />
                    </div>
                    <div>
                        <a href="#">+ Add Money</a>
                    </div>
                </div>
                <div className={styles.billingMethod}>
                    <h5>Billing Method</h5>
                    <p>You haven't set up any billing methods yet. Add a method so you can hire when you're ready.</p>
                </div>
            </div>

            <div className={styles.btmCtn}>
                <img src={cloudImages.exit} alt="cancel icon" />
                <form className={styles.paymentForm}>
                    <h4 className={styles.paymentH4}>Payment Card</h4>
                    <div className={styles.radioCtn}>
                        <p>Pay With:</p>
                        <div className={styles.radios}>
                            <Radio label="card" id="card" />
                            <Radio label="local bank deposit" id="local bank" />
                        </div>
                    </div>
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
                        <Button label="Pay $50" size="large" icon={false} />
                        <p>Your personal data will be used to process your order, support your experience throughout the website and for other purposes described in our privacy policy.</p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Payment