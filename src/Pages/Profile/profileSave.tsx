import { City, Country, State } from "country-state-city";
import React, { useEffect, useState } from "react";

import { Button } from "../../stories/Button-I/Button";
import Dropdown from "../../stories/OtherInputsType/dropdown/dropdown";
import Input from "../../stories/FieldInput-I/input";
import PhoneInput from "../../stories/OtherInputsType/PhoneInput/PhoneInput";
import style from "./profile.module.css";

export default function ProfileSave() {
  interface FormValues {
    DisplayName: string;
    Firstname: string;
    Lastname: string;
    email: string;
    Country: string;
    State: string;
    City: string;
    contactNumber: string;
    countryCode: string;
    avatar: string;
  }

  interface OptionType {
    value: string;
    label: string;
  }
  const imageList: string[] = [
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611444/Group_9_Copy_2_iqlh3i.svg",
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611443/Group_10_Copy_zb5g37.svg",
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611444/Group_9_Copy_3_a0angn.svg",
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611444/Group_14_Copy_2_ptmvcg.svg",
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611444/Group_11_Copy_fqx4li.svg",
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611444/Group_12_Copy_s734yr.svg",
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611445/Group_15_Copy_2_baatsp.svg",
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611445/Group_13_Copy_2_cuoesx.svg",
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_19_Copy_2_css4cp.svg",
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_18_Copy_2_yv5gkb.svg",
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg",
    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_17_Copy_2_efwsao.svg",
  ];

  const [selectImages, setSelectImages] = useState<string>(imageList[6]);

  const [formValues, setFormValues] = useState<FormValues>({
    DisplayName: "",
    Firstname: "",
    Lastname: "",
    email: "",
    Country: "",
    State: "",
    City: "",
    contactNumber: "",
    countryCode: "",
    avatar: "",
  });

  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [stateCode, setStateCode] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [countries, setCountries] = useState<OptionType[]>([]);
  const [states, setStates] = useState<OptionType[]>([]);
  const [cities, setCities] = useState<OptionType[]>([]);

  const [phoneCode, setPhoneCode] = useState<OptionType[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData) as FormValues;
      setFormValues(parsedData);
      setCountryCode(parsedData.Country);
      setStateCode(parsedData.State);
      setPhoneNumber(parsedData.email);
      setPhoneNumber(parsedData.contactNumber);
    }

    const countryList = Country.getAllCountries().map((country) => ({
      label: country.name,
      value: country.isoCode,
    }));
    setCountries(countryList);

    const phoneCodeList = Country.getAllCountries().map((country) => {
      const phonecode = country.phonecode.startsWith("+")
        ? country.phonecode
        : `+${country.phonecode}`;

      return {
        label: `${phonecode} (${country.isoCode})`,
        value: phonecode,
      };
    });
    setPhoneCode(phoneCodeList);
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formValues));
  }, [formValues]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCountry = (options: OptionType) => {
    const countryCode = options.value;
    setCountryCode(countryCode);
    setStateCode(null);
    setCities([]);

    if (countryCode) {
      const stateList = State.getStatesOfCountry(countryCode).map((state) => ({
        label: state.name,
        value: state.isoCode,
      }));
      setStates(stateList);

      const selectedPhoneCode = phoneCode.find(
        (code) =>
          code.value === Country.getCountryByCode(countryCode)?.phonecode
      );
      setPhoneNumber(selectedPhoneCode?.label || "");
    } else {
      setStates([]);
    }
  };

  const handleState = (option: OptionType) => {
    const stateCodes = option.value;
    setStateCode(stateCodes);

    if (countryCode && stateCodes) {
      const cityList = City.getCitiesOfState(countryCode, stateCodes).map(
        (city) => ({
          label: city.name,
          value: city.countryCode,
        })
      );
      setCities(cityList);
    } else {
      setCities([]);
    }
  };

  const handlePhoneCodeChange = (selectedPhoneCode: string) => {
    setPhoneCode((prevState) => ({ ...prevState, value: selectedPhoneCode }));
  };

  const handleAvatarChange = (image: string) => {
    setSelectImages(image);
    setFormValues((prevValues) => ({
      ...prevValues,
      avatar: image,
    }));
  };

  return (
    <>
      <section className={style.container}>
        <div className={style.holder}>
          <div className={style.avatar_container}>
            <p className={style.avatar}>Display Avatar</p>
            <p className={style.secondary} style={{ paddingTop: "-10px" }}>
              Select to change
            </p>
            <div className={style.avatar_selection}>
              <div className={style.main_container}>
                <img src={selectImages} alt="Avatar" />
              </div>
              <div
                className={style.thumbnail}
                onClick={() => handleAvatarChange(selectImages)}>
                {imageList.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`avatar ${index + 1}`}
                    onClick={() => handleAvatarChange(image)}
                  />
                ))}
              </div>
            </div>
          </div>
          <form className={style.contain}>
            <div>
              <Input
                label="Display Name"
                size="small"
                isTextArea={false}
                name="DisplayName"
                value={formValues.DisplayName}
                placeholder="Others will see this name"
                onChange={handleInputChange}
              />
            </div>
            <div className={style.names}>
              <div>
                <Input
                  value={formValues.Firstname}
                  label="First Name"
                  size="small"
                  isTextArea={false}
                  name="Firstname"
                  placeholder="First name"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Input
                  value={formValues.Lastname}
                  label="Last Name"
                  size="small"
                  isTextArea={false}
                  name="Lastname"
                  placeholder="Last name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <Input
                value={formValues.email}
                label="Work email address"
                size="small"
                type="email"
                isTextArea={false}
                name="email"
                onChange={handleInputChange}
              />
            </div>

            {/* this is the code for the country */}

            <div className="dropdown">
              <Dropdown
                label="Country"
                onChange={(option: OptionType) => handleCountry(option)}
                options={countries}
                defaultText={"Choose Country"}
              />
            </div>

            {/* ------------------------------------------------------------ */}

            {states.length > 0 && (
              <div className="dropdown">
                <Dropdown
                  label="State"
                  onChange={(option: OptionType) => handleState(option)}
                  options={states}
                  defaultText={"Choose State"}
                />
              </div>
            )}

            {/* 
              -------------------------------------------------------
            ---------------------------------------------------------- */}
            {cities.length > 0 && (
              <div className="dropdown">
                <Dropdown
                  label="City"
                  onChange={(option: OptionType) => null}
                  options={cities}
                  defaultText={"Choose City"}
                />
              </div>
            )}

            {/* ----------------------------------------------------- */}

            {/* This is for the phone number */}

            {/* ----------------------------------------------------- */}

            <div>
              <PhoneInput
                label="Office/Work Contact Number"
                options={phoneCode}
                onCountryChange={handlePhoneCodeChange}
                value={phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhoneNumber(e.target.value)
                }
              />
            </div>
          </form>
          <div className={style.edit_holder}>
            <Button
              primary={true}
              size="large"
              label={"Save and Continue"}
              icon={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}
