import React, { useState, useRef } from 'react';
import Input from "../../../../stories/FieldInput-I/input";
import Dropdown from "../../../../stories/OtherInputsType/dropdown/dropdown";
import { Button } from "../../../../stories/Button-I/Button";

import { Link } from 'react-router-dom';
import { backArrow, fwdArrow, upload } from "../../../../assets/index";
import styles from "./accountSettings.module.css";

const AccountSettings: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>("no file");
    const [displayName, setDisplayName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [phoneCode, setPhoneCode] = useState<string>("");
    const [telephone, setTelephone] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className={styles.ctn}>
            <div className={styles.settingPages}>
                <Link to="/settings" className={styles.backToSettings}>
                    <img src={backArrow} alt="Back Arrow" />
                    <p>Settings</p>
                </Link>
                <div className={styles.currentPage}>
                    <img src={fwdArrow} alt="Forward Arrow" />
                    <p>Account Settings</p>
                </div>
            </div>
            <div className={styles.settingFormCtn}>
                <form action="#" className={styles.formCtn}>
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
                                <img src={upload} alt="Upload" onClick={handleImageClick} />
                            </span>
                        </div>
                    </div>
                    <div className={styles.ProfileDetails}>
                        <div className={styles.displayName}>
                            <p>Display Name</p>
                            <Input
                                value={displayName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)}
                                isTextArea={false}
                                disabled={true}
                                placeholder='others will see this name'
                            />
                        </div>
                        <div className={styles.names}>
                            <span className={styles.firstName}>
                                <p>First Name</p>
                                <Input
                                    value={firstName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                                    isTextArea={false}
                                    size={'small'}
                                    type={"text"}
                                />
                            </span>
                            <span className={styles.lastName}>
                                <p>Last Name</p>
                                <Input
                                    value={lastName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                                    isTextArea={false}
                                    type={"text"}
                                />
                            </span>
                        </div>
                        <div className={styles.mail}>
                            <p>Work email address</p>
                            <Input
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                isTextArea={false}
                                type={"email"}
                            />
                        </div>
                        <div className={styles.password}>
                            <p>Password</p>
                            <Input
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                placeholder="Password 15 or more characters"
                                isTextArea={false}
                                type={"password"}
                            />
                        </div>
                        <div className={styles.dropdown}>
                            <Dropdown
                                label='Country'
                                onChange={({ value }) => setCountry(value)}
                                errorMessage="Country must be selected"
                                placeholder={country === "" ? "Select a country" : country}
                                options={[{ value: "Nigeria", label: "Nigeria" }]}
                                defaultText={country}
                            />
                        </div>
                        <div className={styles.state}>
                            <Dropdown
                                label='State'
                                onChange={({ value }) => setState(value)}
                                errorMessage="State must be selected"
                                placeholder={state === "" ? "Select a state" : state}
                                options={[{ value: "Lagos", label: "Lagos" }]}
                                defaultText={state}
                            />
                        </div>
                        <div className={styles.city}>
                            <Dropdown
                                label='City'
                                onChange={({ value }) => setCity(value)}
                                errorMessage="City must be selected"
                                placeholder={city === "" ? "Select a city" : city}
                                options={[{ value: "Ikeja", label: "Ikeja" }]}
                                defaultText={city}
                            />
                        </div>
                        <div className={styles.phone}>
                            <p>Office/Work Contact Number*</p>
                            <Dropdown
                                label='+234'
                                onChange={({ value }) => setPhoneCode(value)}
                                placeholder={phoneCode === "" ? "+234" : phoneCode}
                                options={[{ value: "+234", label: "+234" }]}
                                defaultText={phoneCode}
                            />
                            <Input
                                value={telephone}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTelephone(e.target.value)}
                                placeholder="Phone Number"
                                isTextArea={false}
                                type={"tel"}
                            />
                        </div>
                        <div className={styles.btnCtn}>
                            <Button
                                label='Save Changes'
                                BorderColor='black'
                                icon={false}
                                onClick={() => setDisplayName(`${firstName} ${lastName}`)}
                            />
                        </div>
                    </div>
                </form>
                <div className={styles.passwordChange}>
                    <h4>Change password</h4>
                    <div className={styles.crtPassword}>
                        <p>Current password</p>
                        <Input
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            isTextArea={false}
                            type={"password"}
                        />
                    </div>
                    <div className={styles.newPassword}>
                        <p>New password</p>
                        <Input
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            isTextArea={false}
                            type={"password"}
                        />
                    </div>
                    <div className={styles.cfmPassword}>
                        <p>Confirm password</p>
                        <Input
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            isTextArea={false}
                            type={"password"}
                        />
                    </div>
                    <div className={styles.btnCtn}>
                        <Button
                            label='Save Changes'
                            BorderColor='black'
                            icon={false}
                            onClick={() => setDisplayName(`${firstName} ${lastName}`)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
