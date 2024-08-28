import React, { useState, useRef } from 'react';
import Input from "../../../../stories/FieldInput-I/input";
import Dropdown from "../../../../stories/OtherInputsType/dropdown/dropdown";
import { Button } from "../../../../stories/Button-I/Button";
import { Country, State, City } from 'country-state-city';
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
	const [oldPassword, setOldPassword] = useState<string>("");
	const [newPassword, setNewPassword] = useState<string>("")
	const [confirmPassword, setConfirmPassword] = useState<string>("")

	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleImageClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handlePasswordChange = () => {
		if (password === oldPassword && newPassword === confirmPassword) {
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

			<form action="#">
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

				<div className={styles.displayName}>
					<label>Display Name</label>
					<Input
						value={displayName}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)}
						isTextArea={false}
						disabled={true}
						placeholder='others will see this name'
					/>
				</div>
				<div className={styles.names}>
					<div className={styles.firstName}>
						<label>First Name</label>
						<Input
							value={firstName}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
							isTextArea={false}
							size='small'
							type="text"
						/>
					</div>
					<div className={styles.lastName}>
						<label>Last Name</label>
						<Input
							value={lastName}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
							isTextArea={false}
							type= "text"
							size='small'
						/>
					</div>
				</div>
				<div className={styles.mail}>
					<label>Work email address</label>
					<Input
						value={email}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
						isTextArea={false}
						type="email"
						// size="small"
					/>
				</div>
				<div className={styles.password}>
					<label>Password</label>
					<Input
						value={password}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
			</form>
			<div className={styles.passwordCtn}>
				<h2>Change password</h2>
				<div className={styles.passwordChange}>
					<div className={styles.crtPassword}>
						<label>Current password</label>
						<Input
							value={oldPassword}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)}
							isTextArea={false}
							type={"password"}
						/>
					</div>
					<div className={styles.newPassword}>
						<label>New password</label>
						<Input
							value={newPassword}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
							isTextArea={false}
							type={"password"}
						/>
					</div>
					<div className={styles.cfmPassword}>
						<label>Confirm password</label>
						<Input
							value={confirmPassword}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
							isTextArea={false}
							type={"password"}
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
	);
};

export default AccountSettings;
