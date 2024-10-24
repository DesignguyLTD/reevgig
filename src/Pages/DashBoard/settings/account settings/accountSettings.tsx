import Dropdown from "../../../../stories/OtherInputsType/dropdown/dropdown";
import Input from "../../../../stories/FieldInput-I/input";
import React, { ChangeEvent, useRef, useState } from "react";
import Sidebar from "../../../../stories/SideBar/sideBar";
import cloudImages from "../../../../assets";
import style from "../../../OverView/OverviewPage.module.css";
import styles from "./accountSettings.module.css";
import { City, Country, State } from "country-state-city";
import { Link } from "react-router-dom";
import { Button } from "../../../../stories/Button-I/Button";

const AccountSettings: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>("no file");
    const [country, setCountry] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [phoneCode, setPhoneCode] = useState<string>("");

    const [accountData, setAccountData] = useState({
        displayName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        telephone: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAccountData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // const handleBtnChange = () => {
    // 	setAccountData((prev) => ({
    // 		...prev,
    // 		[]
    // 	}))
    // }

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handlePasswordChange = () => {
        if (accountData.password === accountData.oldPassword && accountData.newPassword === accountData.confirmPassword) {
            console.log("Password change submitted successfully.");
        } else {
            console.log("Password does not match");
        }
    };


    const countryOptions = Country.getAllCountries().map((country) => ({
        value: country.isoCode,
        label: country.name
    }));

    const stateOptions = country ? State.getStatesOfCountry(country).map((state) => ({
        value: state.isoCode,
        label: state.name
    })) : [];

    const cityOptions = country && state ? City.getCitiesOfState(country, state).map((city) => ({
        value: city.name,
        label: city.name
    })) : [];

    const phoneOptions = Country.getAllCountries().map((country) => ({
        value: `+ ${country.phonecode.replace(/\+/g, "")}`,
        label: `+ ${country.phonecode.replace(/\+/g, "")}`
    }));

    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<string>(
        localStorage.getItem('currentPage') || 'Overview'
    );


    const getSidebarState = (x: boolean): boolean => {
        setIsSidebarOpen(x);
        return x;
    }

    const getPage = (x: string): string => {
        setCurrentPage(x);
        localStorage.setItem('currentPage', x);
        return x;
    }

    return (
        <div>
            <Sidebar logo={'/'} getSidebarState={getSidebarState} getPage={getPage} />
            <div className={`${style.container} ${isSidebarOpen ? style.shifted : ''}`}>
                <div className={styles.ctn}>
                    <div className={styles.settingPages}>
                        <Link to="/dashboard" className={styles.backToSettings}>
                            <img src={cloudImages.backArrow} alt="Back Arrow" />
                            <p>Settings</p>
                        </Link>
                        <div className={styles.currentPage}>
                            <img src={cloudImages.fwdArrow} alt="Forward Arrow" />
                            <p>Account Settings</p>
                        </div>
                    </div>

                    <form className={styles.profileForm} action="#">
                        <div className={styles.imageSection}>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={({ target: { files } }) => {
                                    if (files && files[0]) {
                                        setFileName(files[0].name);
                                        setImage(URL.createObjectURL(files[0]));
                                    }
                                }}
                            />
                            <div className={styles.imageborder}>
                                {image && <img src={image} alt={fileName} className={styles.image} />}
                                <span className={styles.imageUploaderCtn}>
                                    <img src={cloudImages.upload} alt="Upload" onClick={handleImageClick} />
                                </span>
                            </div>
                        </div>
                        <div className={styles.displayName}>
                            <label className={styles.labelName}>Display Name</label>
                            <Input
                                name="displayName"
                                size="small"
                                value={accountData.displayName}
                                onChange={handleChange}
                                isTextArea={false}
                                disabled={true}
                                placeholder='others will see this name'
                            />
                        </div>
                        <div className={styles.names}>
                            <div className={styles.firstName}>
                                <Input
                                    label="First Name"
                                    name="firstName"
                                    value={accountData.firstName}
                                    onChange={handleChange}
                                    isTextArea={false}
                                    size='small'
                                    type="text"
                                />
                            </div>
                            <div className={styles.lastName}>
                                <Input
                                    label="Last Name"
                                    name="lastName"
                                    value={accountData.lastName}
                                    onChange={handleChange}
                                    isTextArea={false}
                                    type="text"
                                    size='small'
                                />
                            </div>
                        </div>
                        <div className={styles.mail}>
                            <Input
                                label="Work email address"
                                name="email"
                                value={accountData.email}
                                onChange={handleChange}
                                isTextArea={false}
                                type="email"
                                size="small"
                            />
                        </div>
                        <div className={styles.password}>
                            <Input
                                label="Password"
                                name="password"
                                value={accountData.password}
                                onChange={handleChange}
                                placeholder="Password 15 or more characters"
                                isTextArea={false}
                                type="password"
                            />
                        </div>
                        <div className={styles.country}>
                            <Dropdown
                                label='Country'
                                onChange={({ value }) => setCountry(value)}
                                errorMessage="Country must be selected"
                                options={countryOptions}
                                defaultText={country === "" ? "Select a country" : country}
                            />
                        </div>

                        <div className={styles.stateCity}>
                            <div className={styles.state}>
                                <Dropdown
                                    label='State'
                                    onChange={({ value }) => setState(value)}
                                    errorMessage="State must be selected"
                                    options={stateOptions}
                                    size="small"
                                    defaultText={state === "" ? "Select a state" : state}
                                />
                            </div>
                            <div className={styles.city}>
                                <Dropdown
                                    label='City'
                                    onChange={({ value }) => setCity(value)}
                                    errorMessage="City must be selected"
                                    options={cityOptions}
                                    size="small"
                                    defaultText={city === "" ? "Select a city" : city}
                                />
                            </div>
                        </div>

                        <div className={styles.phone}>
                            <Dropdown
                                label='Office/Work Contact Number*'
                                onChange={({ value }) => setPhoneCode(value)}
                                options={phoneOptions}
                                defaultText={country ? `+ ${Country.getAllCountries().filter((fetchedCountry) => fetchedCountry.isoCode === country)[0].phonecode.replace(/\+/g, "")}` : phoneCode === "" ? "+234" : phoneCode}
                            />
                            <Input
                                value={accountData.telephone}
                                name="telephone"
                                onChange={handleChange}
                                placeholder="Phone Number"
                                isTextArea={false}
                                type="tel"
                            />
                        </div>
                        <div className={styles.btnCtn}>
                            <Button
                                label='Save Changes'
                                BorderColor='black'
                                icon={false}
                            // onClick={handleSaveChange(`${accountData.firstName}`)}
                            // onClick={() => setDisplayName(`${accountData.firstName} ${accountData.lastName}`)}
                            />
                        </div>
                    </form>
                    <div className={styles.passwordCtn}>
                        <h3>Change password</h3>
                        <div className={styles.passwordChange}>
                            <div className={styles.crtPassword}>
                                <Input
                                    label="Current password"
                                    name="oldPassword"
                                    value={accountData.oldPassword}
                                    onChange={handleChange}
                                    isTextArea={false}
                                    type="password"
                                    size='small'
                                />
                            </div>
                            <div className={styles.newPassword}>
                                <Input
                                    label="New password"
                                    name="newPassword"
                                    value={accountData.newPassword}
                                    onChange={handleChange}
                                    isTextArea={false}
                                    type="password"
                                    size='small'
                                />
                            </div>
                            <div className={styles.cfmPassword}>
                                <Input
                                    label="Confirm password"
                                    name="confirmPassword"
                                    value={accountData.confirmPassword}
                                    onChange={handleChange}
                                    isTextArea={false}
                                    type="password"
                                    size='small'
                                />
                            </div>
                        </div>
                        <div className={styles.btnCtn}>
                            <Button
                                label='Save Changes'
                                BorderColor='black'
                                icon={false}
                                onClick={() => handlePasswordChange()}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AccountSettings;
