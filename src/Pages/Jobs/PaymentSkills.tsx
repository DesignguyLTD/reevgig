import React, {ChangeEvent, useState} from 'react';
import styles from './PaymentSkills.module.css'
import cloudImages from "../../assets";
import style from "./jobs.module.css";
import RadioButton from "../../stories/RadioButton/RadioButton";
import Radio from "../../stories/Radio/radio";
import Input from "../../stories/FieldInput-I/input";
import Dropdown from "../../stories/OtherInputsType/dropdown/dropdown";
import CheckBox from "../../stories/CheckBox/checkbox";
import {Button} from "../../stories/Button-I/Button";
import {Country} from "country-state-city";
import {ButtonII} from "../../stories/Button-II/ButtonII";

interface givenProps {
    setActiveComponent: (x: string) => void
}

const PaymentSkills = ({setActiveComponent}: givenProps) => {

    const [selectedValue1, setSelectedValue1] = useState<string>("Card");

    const handleRadioChange1 = (value: string) => {
        setSelectedValue1(value);
    };

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


    return (
        <div className={styles.PaymentSkillsCtn}>
            <div style={{cursor: 'pointer'}} className={styles.PaymentSkillsTop} onClick={() => setActiveComponent('jobs_skills')}>
                <img  src={cloudImages.backArrow} alt=""/>
                Payment
            </div>

            <hr className={styles.hr}/>
            <div className={styles.PaymentSkillsRadio}>
                <br/>
                <div className={style.Budget}>Pay with:</div>
                <br/>

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
                        styleP={true}
                        name={"Local Bank Deposit"}
                        value={'Local Bank Deposit'}
                        selectedValue={selectedValue1}
                        onChange={handleRadioChange1}
                    />

                    {/*<div style={{visibility: 'hidden'}}>*/}
                    {/*    <RadioButton*/}
                    {/*        id={'rate'}*/}
                    {/*        name={"Fixed Price"}*/}
                    {/*        value={"Fixed Price"}*/}
                    {/*        selectedValue={selectedValue1}*/}
                    {/*        onChange={handleRadioChange1}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>

            <br/>
            <div className={styles.paymentInputCtn}>
                {selectedValue1 === 'Card' ?
                    <div className={styles.paymentInputCtn}>
                        <form className={styles.paymentFormCtn} >
                            <div className={styles.paymentInputCtn}>
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
                                Save card details
                            </div>
                            <div className={styles.BtnCtn}>
                                <ButtonII
                                    hasIcon={false}
                                    isLabelVisible={true}
                                    label="Pay $50"
                                    primary={true}
                                    size="medium"
                                />
                                <br/>
                                <p>Your personal data will be used to process your order, support your experience throughout the
                                    website and for other purposes described in our privacy policy.</p>
                            </div>
                        </form>

                    </div>
                    :
                    <div className={styles.LocalDepoCtn}>
                      <div className={styles.LocalDepo}>
                          <div className={styles.LocalDepo1}>
                              <div className={styles.LocalDepoInfoCtn}>
                                  <div className={styles.LocalDepoInfo1}>Bank: </div>
                                  <div className={styles.LocalDepoInfo2}>Name of Bank</div>
                              </div>
                              <div className={styles.LocalDepoInfoCtn}>
                                  <div className={styles.LocalDepoInfo1}>Account Name: </div>
                                  <div className={styles.LocalDepoInfo2}>Account name here</div>
                              </div>
                              <div className={styles.LocalDepoInfoCtn}>
                                  <div className={styles.LocalDepoInfo1}>Account Number: </div>
                                  <div className={styles.LocalDepoInfo2}>1234567890</div>
                                  <div className={styles.LocalDepoInfo3}>
                                      <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727455543/Reev/27th%20Sept%202024/Button_jlb6ek.svg" alt="copyIcon"/>
                                  </div>
                              </div>
                              <div className={styles.LocalDepoInfoCtn}>
                                  <div className={styles.LocalDepoInfo1}>Payment ID: </div>
                                  <div className={styles.LocalDepoInfo2}>1234567890</div>
                                  <div className={styles.LocalDepoInfo3}>
                                      <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727455543/Reev/27th%20Sept%202024/Button_jlb6ek.svg" alt="copyIcon"/>
                                  </div>
                              </div>
                              <div className={styles.LocalDepoInfoCtn}>
                                  <div className={styles.total1}>Total: </div>
                                  <div className={styles.total2}>$50</div>
                              </div>
                          </div>

                          <div className={styles.LocalDepo2}>
                                <div className={styles.LocalDepo2Text}>
                                    Use this account for this transaction only
                                </div>
                              
                              <div>
                                  <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727455543/Reev/27th%20Sept%202024/Group_1171275883_pzbwki.svg" alt="Ban"/>
                              </div>
                              <div className={styles.LocalDepo2Text}>Expires in <strong>30:00</strong></div>

                              <ButtonII
                                  hasIcon={false}
                                  isLabelVisible={true}
                                  label="Click here after making payment"
                                  primary={true}
                                  size="medium"
                              />

                              <div  className={styles.LocalDepo2Text2}>
                                  <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993475/Reev/material-symbols-light_download_s4i16q.svg" alt="download"/>
                                  Download Payment Invoice
                              </div>
                          </div>

                            <div className={styles.LocalDepo3Ctn}>
                                <div className={styles.LocalDepo3}>
                                    <strong className={styles.LocalDepo3Text1}>Instructions</strong>
                                    <div className={styles.LocalDepo3Text2}>
                                        <strong className={styles.LocalDepo3Text1}>For bank payment </strong>
                                        always included your payment ID as Depositor’s Name
                                    </div>
                                    <div className={styles.LocalDepo3Text2}>
                                        <strong className={styles.LocalDepo3Text1}>For Mobile Transfer </strong>
                                        always included your payment ID as Depositor’s Name
                                    </div>

                                </div>

                            </div>

                      </div>
                    </div>

                }
            </div>

        </div>
    );
};

export default PaymentSkills;