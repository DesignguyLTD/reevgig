import { City, Country, ICity, IState, State } from "country-state-city";
import React, { useEffect, useState } from "react";

import { Button } from "../../stories/Button-I/Button";
import Input from "../../stories/FieldInput-I/input";
import ScrollableComponent from "../../Components/RadioTextIcon/Scrollable";
import style from "./profile.module.css";

export default function ProfileSave() {
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

  const [selectImages, setSelectImages] = useState<string>(imageList[0]);

  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [countryDropdown, setCountryDropdown] = useState<boolean>(false);
  const [selectCountry, setSelectCountry] = useState<string | null>(null);

  const [selectState, setSelectState] = useState<string | null>(null);
  const [stateDropdown, setStateDropdown] = useState<boolean>(false);

  const [selectCity, setSelectCity] = useState<string | null>(null);
  const [cityDropdown, setCityDropdown] = useState<boolean>(false);

  const [numberDropdown, setNumberDropdown] = useState<boolean>(false);
  const [selectNumber, setSelectNumber] = useState<string | null>(null);
  const [isCountryActive, setIsCountryActive] = useState<boolean>(false);
  const [isStateActive, setIsStateActive] = useState<boolean>(false);
  const [isCityActive, setIsCityActive] = useState<boolean>(false);

  const [states, setState] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  useEffect(() => {
    if (selectNumber && !selectNumber.startsWith("+")) {
      setSelectNumber(`+${selectNumber}`);
    }
  }, [selectNumber]);

  const handleCountrySelected = (countryCode: string) => {
    const country = Country.getCountryByCode(countryCode);
    if (country) {
      setSelectCountry(country.name);
      setCountryCode(country.isoCode);
      const statesOfCountry = State.getStatesOfCountry(countryCode);
      setState(statesOfCountry);
      setSelectState(null);
      setSelectCity(null);
      setCities([]);
      setSelectNumber(country.phonecode);
    }
    setCountryDropdown(false);
    setIsCountryActive(false);
  };

  const handleStateSelected = (stateCode: string) => {
    const stateChosen = State.getStateByCodeAndCountry(stateCode, countryCode!);

    if (stateChosen) {
      setSelectState(stateChosen.name);
      const citiesOfState = City.getCitiesOfState(countryCode!, stateCode);
      setCities(citiesOfState);
      setSelectCity(null);
    }
    setStateDropdown(false);
  };

  const handleCitySelected = (cityName: string) => {
    setSelectCity(cityName);
    setCityDropdown(false);
  };

  const handleNumbers = (phoneCode: string) => {
    setSelectNumber(phoneCode);
    setNumberDropdown(false);
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
              <div className={style.thumbnail}>
                {imageList.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`thumbnail ${index + 1}`}
                    onClick={() => setSelectImages(image)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="Display Name">Display Name</label>
              <Input
                size="medium"
                isTextArea={false}
                name="Display name"
                placeholder="Others will see this name"
              />
            </div>
            <div className={style.names}>
              <div>
                <label htmlFor="First Name"> First Name</label>
                <Input
                  size="small"
                  isTextArea={false}
                  name="Display name"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="Last Name"> Last Name</label>
                <Input
                  size="medium"
                  isTextArea={false}
                  name="Display name"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="Email">Work email address</label>
              <Input
                size="medium"
                type="email"
                isTextArea={false}
                name="email"
              />
            </div>

            {/* 
            --------------------------------------------------------
          ----------------------------------------------------------- */}

            {/* this is the code for the country */}

            {/* 
            --------------------------------------------------------
          ----------------------------------------------------------- */}

            <div className={style.scroll_container}>
              <label htmlFor="Country">Country</label>
              <div
                className={style.inner_container}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCountryDropdown(!countryDropdown);
                  setIsCountryActive(!isCountryActive);
                }}>
                {selectCountry ? (
                  <div
                    className={`${style.data} ${
                      isCountryActive ? style.data_active : ""
                    }`}>
                    <p className={style.specified_data}> {selectCountry}</p>
                  </div>
                ) : (
                  <p className={style.data}>Select Country</p>
                )}
                <div>
                  <img
                    className={style.img1}
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722871923/Vector_tees7j.svg"
                    alt=""
                  />
                </div>
              </div>
              {countryDropdown && (
                <ScrollableComponent
                  direction="vertical"
                  height={200}
                  widthProp="100%"
                  style={{
                    zIndex: "10",
                    backgroundColor: "white",
                    // position: "absolute",
                  }}>
                  {Country.getAllCountries().map((country, index) => (
                    <div
                      style={{
                        cursor: "pointer",
                        width: "30rem",
                      }}
                      className={style.lists}
                      key={index}
                      onClick={() => handleCountrySelected(country.isoCode)}>
                      <p className={style.lists}>{country.name}</p>
                    </div>
                  ))}
                </ScrollableComponent>
              )}
            </div>

            {/* 
            --------------------------------------------------------
          ---------------------------------------------------------
          -- */}

            {/* This part of the code is for the state */}

            {/* 
            --------------------------------------------------------
          ----------------------------------------------------------- */}

            <div className={style.scroll_container}>
              <div>
                <label htmlFor="State">State</label>
                <div
                  className={style.inner_container}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setStateDropdown(!stateDropdown);
                    setIsStateActive(!isStateActive);
                  }}>
                  {selectState ? (
                    <div
                      className={`${style.data} ${
                        isStateActive ? style.data_active : ""
                      }`}>
                      <p className={style.specified_data}> {selectState}</p>
                    </div>
                  ) : (
                    <p className={style.data}>Select State</p>
                  )}
                  <div>
                    <img
                      className={style.img2}
                      src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722871923/Vector_tees7j.svg"
                      alt=""
                    />
                  </div>
                </div>
                {stateDropdown && (
                  <ScrollableComponent
                    direction="vertical"
                    height={200}
                    widthProp="100%"
                    style={{ zIndex: "10", backgroundColor: "white" }}>
                    {states.map((state, index) => (
                      <div
                        style={{ cursor: "pointer", width: "30rem" }}
                        key={index}
                        className={style.lists}
                        onClick={() => handleStateSelected(state.isoCode)}>
                        <p
                          style={{ border: "1px solid ash" }}
                          className={style.lists}>
                          {state.name}
                        </p>
                      </div>
                    ))}
                  </ScrollableComponent>
                )}
              </div>
              {/* 
              -------------------------------------------------------
            ---------------------------------------------------------- */}

              {/* This is the part for the City */}

              {/* 
              -------------------------------------------------------
            ---------------------------------------------------------- */}

              <div className={style.scroll_container}>
                <label htmlFor="City">City</label>
                <div
                  className={style.inner_container}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setCityDropdown(!cityDropdown);
                    setIsCityActive(!isCityActive);
                  }}>
                  {selectCity ? (
                    <div
                      className={`${style.data} ${
                        isCityActive ? style.data_active : ""
                      }`}>
                      <p className={style.specified_data}> {selectCity}</p>
                    </div>
                  ) : (
                    <p className={style.data}>Select City</p>
                  )}
                  <div>
                    <img
                      className={style.img3}
                      src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722871923/Vector_tees7j.svg"
                      alt=""
                    />
                  </div>
                </div>
                {cityDropdown && (
                  <ScrollableComponent
                    direction="vertical"
                    height={200}
                    widthProp="100%"
                    style={{ zIndex: "10", backgroundColor: "white" }}>
                    {cities.map((city, index) => (
                      <div
                        style={{ cursor: "pointer" }}
                        key={index}
                        className={style.lists}
                        onClick={() => handleCitySelected(city.name)}>
                        <p className={style.lists}>{city.name}</p>
                      </div>
                    ))}
                  </ScrollableComponent>
                )}
              </div>
            </div>

            {/* ----------------------------------------------------- */}

            {/* This is for the phone number */}

            {/* ----------------------------------------------------- */}

            <div>
              <label htmlFor="Number">Office/Work Contact Number</label>
              <div className={style.phone_cover}>
                <div
                  className={style.phone}
                  onClick={() => setNumberDropdown(!numberDropdown)}>
                  <p className={style.phone_number}>
                    {`${selectNumber} (${countryCode})`}
                  </p>
                  <img
                    className={style.img4}
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722871923/Vector_tees7j.svg"
                    alt=""
                  />
                </div>
                {numberDropdown && (
                  <ScrollableComponent
                    direction="vertical"
                    height={120}
                    widthProp="100%"
                    style={{
                      zIndex: "10",
                      border: "2px solid #d1d1d1",
                      position: "absolute",
                      top: "3.3rem",
                      width: "5rem",
                      backgroundColor: "white",
                    }}>
                    {Country.getAllCountries().map((number, index) => (
                      <div
                        style={{ cursor: "pointer" }}
                        key={index}
                        className={style.phone_number}
                        onClick={() => handleNumbers(number.phonecode)}>
                        <p>{`${number.phonecode} (${number.isoCode})`}</p>
                      </div>
                    ))}
                  </ScrollableComponent>
                )}

                <div>
                  <input
                    type="text"
                    className={style.number_input}
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
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
