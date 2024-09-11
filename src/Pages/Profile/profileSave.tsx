import { City, Country, State } from "country-state-city";
import React, { useEffect, useState,  } from "react";

import { ButtonII } from "../../stories/Button-II/ButtonII";
import Dropdown from "../../stories/OtherInputsType/dropdown/dropdown";
import { Helmet } from "react-helmet";
import Input from "../../stories/FieldInput-I/input";
import PhoneInput from "../../stories/OtherInputsType/PhoneInput/PhoneInput";
import style from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../stories/Header/header";
import Sidebar from "../../stories/SideBar/sideBar";

const ProfileSave: React.FC = () => {
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

  const navigate = useNavigate();

  const handleNavigate = () => {

    navigate("/saved", { state: formValues });

  };

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

  const [selectImages, setSelectImages] = useState<string>(imageList[2]);

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
    avatar: imageList[6],
  });

  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [stateCode, setStateCode] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [countries, setCountries] = useState<OptionType[]>([]);
  const [states, setStates] = useState<OptionType[]>([]);
  const [cities, setCities] = useState<OptionType[]>([]);

  const [phoneCode, setPhoneCode] = useState<OptionType[]>([
    {
      label: "+234 (NG)",
      value: "+234",
    },
  ]);

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
    setFormValues((prevValues) => ({
      ...prevValues,
      Country: options.label,
    }));
    setCountryCode(countryCode);
    setStateCode(null);
    setCities([]);

    if (countryCode) {
      const stateList = State.getStatesOfCountry(countryCode).map((state) => ({
        label: state.name,
        value: state.isoCode,
      }));

      setStates(stateList);

      const allPhoneCodes = Country.getAllCountries().map((country) => ({
        label: `+${country.phonecode} (${country.isoCode})`,
        value: `+${country.phonecode}`,
      }));

      const selectedCountry = Country.getCountryByCode(countryCode);
      if (selectedCountry) {
        const selectedPhoneCode = {
          label: `+${selectedCountry.phonecode} (${selectedCountry.isoCode})`,
          value: `+${selectedCountry.phonecode}`,
        };

        const updatedPhoneCode = [
          selectedPhoneCode,
          ...allPhoneCodes.filter(
            (phoneCode) => phoneCode.value !== selectedPhoneCode.value
          ),
        ];
        setPhoneCode(updatedPhoneCode);
      } else {
        setPhoneCode(allPhoneCodes);
      }
    } else {
      setStates([]);
      setPhoneCode([]);
    }
  };

  const handleState = (option: OptionType) => {
    const stateCodes = option.value;

    setFormValues((prevValues) => ({
      ...prevValues,
      State: option.label,
      City: "",
    }));

    setStateCode(stateCodes);

    if (countryCode && stateCodes) {
      const cityList = City.getCitiesOfState(countryCode, stateCodes).map(
        (city) => ({
          label: city.name,
          value: city.countryCode,
        })
      );

      setFormValues((prevValues) => ({
        ...prevValues,
        City: cityList[0].label,
      }));

      setCities(cityList);
    } else {
      setCities([]);
    }
  };

  const handlePhoneCodeChange = (selectedPhoneCode: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      countryCode: selectedPhoneCode,
      contactNumber: phoneNumber,
    }));

    setPhoneCode((prevState) =>
      prevState.map((code) =>
        code.value === selectedPhoneCode
          ? { ...code, value: selectedPhoneCode }
          : code
      )
    );

    if (selectedPhoneCode === "") {
      const defaultCode = "+234";
      setFormValues((prevValues) => ({
        ...prevValues,
        countryCode: defaultCode,
      }));
    }

    setPhoneCode((prevState) => ({
      ...prevState,
      countryCode: selectedPhoneCode,
    }));
  };

  const handleAvatarChange = (image: string) => {
    setSelectImages(image);
    setFormValues((prevValues) => ({
      ...prevValues,
      avatar: image,
    }));
    setSelectImages(image);
    console.log(selectImages);
  };

  return (
    <>

      <Helmet>
        <title>Profile Editor</title>
        <meta
          name="description"
          content="This content of the profile from the onboarding that can be edited"
        />
        <link
          rel="canonical"
          href="https://DesignguyLTD.github.io/reevgig/#/edit"
        />
        <meta property="og:title" content="Profile Editor" />
        <meta
          property="og:description"
          content="This is the editable part of the profile"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png"
        />
      </Helmet>
      <Sidebar logo={'/'}  />


      <section className={style.container_two}>
        <div className={style.holder_two}>
          <div className={style.avatar_container}>
            <p className={style.avatar}>Display Avatar</p>
            <p className={style.secondary} style={{ paddingTop: "-10px" }}>
              Select to change
            </p>
            <div className={style.avatar_selection}>
              <div className={style.main_container}>
                <img src={selectImages} alt="Avatar" />
              </div>
              <div className={style.thumbnail}>
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
            <div className={style.name}>
              <div>
                <Input
                  value={formValues.Firstname}
                  label="First Name"
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
                size="small"
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
                  size="small"
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
                  size="small"
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPhoneNumber(e.target.value);
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    contactNumber: e.target.value,
                  }));
                }}
              />
            </div>
          </form>
          <div className={style.edit_holder_two}>
            <ButtonII
              hasIcon={false}
              isLabelVisible={true}
              label={"Save and Continue"}
              onClick={handleNavigate}
              primary={true}
              size="medium"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileSave;
