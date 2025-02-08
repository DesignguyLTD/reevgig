import { City, Country, State } from "country-state-city";
import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import {
  recommendedIntrests,
  recommendedLanguages,
} from "../Onboarding/onboarding/dataset";

import { ButtonII } from "../../stories/Button-II/ButtonII";
import Dropdown from "../../stories/OtherInputsType/dropdown/dropdown";
import FileUpload from "../../Components/FileUpload/fileUpload";
import { Helmet } from "react-helmet-async";
import Input from "../../stories/FieldInput-I/input";
import PhoneInput from "../../stories/OtherInputsType/PhoneInput/PhoneInput";
import TagInput from "../../Components/TagInput/tagInput";
import style from "./profile.module.css";
import styles from "../OverView/OverviewPage.module.css";
import stylesOn from '../Onboarding/onboarding/onBoarding.module.css';
import {PatchData, patchProfileData} from "../../api/Services/Auth";
import {toast} from "react-toastify";
import {uploadToCloudinary} from "../../api/UploadToCloudinary";
import useAuthStore from "../../store/AuthStore";

interface Props {
  page: number;
  setPage: (page: number) => void;
  userType: string;
}

const ProfileSave = ({ page, setPage, userType }: Props) => {
  interface FormValues {
    display_name: string;
    first_name: string;
    last_name: string;
    email: string;
    country: string;
    state: string;
    city: string;
    contact_number: string;
    countryCode: string;
    avatar: string;
    bio: string;
    interests: string[];
    skills: string[];
    language_spoken: string[];
    identity: any[];
    resume: any[];
    portfolio: any[];
  }

  interface OptionType {
    value: string;
    label: string;
  }

  // const navigate = useNavigate();





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

  const defaultFormValues: FormValues = {
    display_name: "",
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    state: "",
    city: "",
    contact_number: "",
    countryCode: "",
    avatar: imageList[6],
    bio: '',
    interests: [],
    skills: [],
    language_spoken: [],
    identity: [],
    resume: [],
    portfolio: [],
  };

  const [formValues, setFormValues] = useState<FormValues>(defaultFormValues);

  let formValuesCopy: Partial<typeof formValues> = { ...formValues };
  localStorage.setItem("profileForm", JSON.stringify(formValuesCopy));

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
      setCountryCode(parsedData.country);
      setStateCode(parsedData.state);
      setPhoneNumber(parsedData.email);
      setPhoneNumber(parsedData.contact_number);
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
    setFormValues((prevValues) => {
      if (name === "portfolio1" || name === "portfolio2") {
        const portfolioIndex = name === "portfolio1" ? 0 : 1;
        const updatedPortfolio = [...prevValues.portfolio];
        updatedPortfolio[portfolioIndex] = value;
        return {
          ...prevValues,
          portfolio: updatedPortfolio,
        };
      }
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleCountry = (options: OptionType) => {
    const countryCode = options.value;
    setFormValues((prevValues) => ({
      ...prevValues,
      country: options.label,
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
      state: option.label,
      city: "",
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
        city: cityList[0].label,
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
      contact_number: phoneNumber,
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

  // console.log(formValues)

  const [header, setHeader] = React.useState("Public");

  const handleHeader = (value: string) => {
    setHeader(value);
  };

  const [profileLang, setprofileLang] = useState<string[]>(() => {
    const savedFormValues2 = localStorage.getItem("ProfileForm");
    return savedFormValues2 ? JSON.parse(savedFormValues2).language_spoken : [];
  });

  const [profileIntrest, setprofileIntrest] = useState<string[]>(() => {
    const savedFormValues2 = localStorage.getItem("ProfileForm");
    return savedFormValues2 ? JSON.parse(savedFormValues2).interests : [];
  });

  const [profileSkills, setprofileSkills] = useState<string[]>(() => {
    const savedFormValues2 = localStorage.getItem("ProfileForm");
    return savedFormValues2 ? JSON.parse(savedFormValues2).skills : [];
  });

  const [first, setFirst] = useState<string | null>(() => {
    const savedFormValues2 = localStorage.getItem("ProfileForm");
    return savedFormValues2
      ? JSON.parse(savedFormValues2).UserVerification
      : "";
  });

  const [second, setSecond] = useState<string | null>(() => {
    const savedFormValues2 = localStorage.getItem("ProfileForm");
    return savedFormValues2
        ? JSON.parse(savedFormValues2).CVFIle
        : "";
  });

  const targetDivRef3 = useRef<HTMLDivElement>(null);

  const VibrateDiv3 = () => {
    if (targetDivRef3.current) {
      targetDivRef3.current.classList.add(styles.shake);
      setTimeout(() => {
        targetDivRef3.current?.classList.remove(styles.shake);
      }, 500); // Duration of the shake animation
    }
  };

  // VibrateDiv3()

  useEffect(() => {
    setFormValues(prevValues => ({
      ...prevValues,
      language_spoken: profileLang
    }));
  }, [profileLang]);

  useEffect(() => {
    setFormValues(prevValues => ({
      ...prevValues,
      skills: profileSkills
    }));
  }, [profileSkills]);

  useEffect(() => {
    setFormValues(prevValues => ({
      ...prevValues,
      interests: profileIntrest
    }));
  }, [profileIntrest]);

  // const handlePublicSubmit =()=>{
  //
  // }


  const [loadingCloud, setLoadingCloud] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);


  const getUploadURL = (fileURL: string | null, fileName: string): Promise<string> => {
    setLoadingCloud(true);
    return new Promise((resolve, reject) => {
      if (fileURL) {
        setUploadStatus('Uploading...');
        uploadToCloudinary(fileURL, fileName)
            .then((url: string) => {
              setLoadingCloud(false);
              setUploadStatus('Upload successful');
              resolve(url);
            })
            .catch((error: unknown) => {
              console.error('Error uploading file:', error);
              setUploadStatus('Upload failed');
              setLoadingCloud(false);
              reject(error);
            });
      } else {
        console.log('File undefined');
        reject('File undefined');
      }
    });
  };

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [imageLoading, setImageLoading] = useState<boolean>(false);

  const[uploadImage, setUploadImage] = useState('');

  const handleSubmitedit = async () => {
    setLoadingSubmit(true);

    try {
      let ValidId;
      let ValidCV;
      const fileDataURI = localStorage.getItem('fileLabelurleditID');
      const fileName = localStorage.getItem('filenameeditID');
      if (fileDataURI && fileName) {
        ValidId = await getUploadURL(fileDataURI, fileName);
      }

      const fileDataURIBith = localStorage.getItem('fileLabelurleditCV');
      const fileNameBirth = localStorage.getItem('filenameeditCV');
      if (fileDataURIBith && fileNameBirth) {
        ValidCV = await getUploadURL(fileDataURIBith, fileNameBirth);
      }

      const updatedFormData: Partial<FormValues> = {};

      Object.keys(formValues).forEach(key => {
        if (formValues[key as keyof FormValues] !== defaultFormValues[key as keyof FormValues] &&
            !(
                (key === 'interests' || key === 'language_spoken' || key === 'skills' || key === 'portfolio') &&
                Array.isArray(formValues[key as keyof FormValues]) &&
                formValues[key as keyof FormValues]?.length === 0
            ) &&
            key !== 'identity' && key !== 'resume' &&
            formValues[key as keyof FormValues] !== null) {
          (updatedFormData as any)[key as keyof FormValues] = formValues[key as keyof FormValues];
        }
      });

      if (ValidId) {
        updatedFormData.identity = [ValidId];
      }

      if (ValidCV) {
        updatedFormData.resume = [ValidCV];
      }


      console.log(updatedFormData);

      try {
        const isSuccess = await patchProfileData(updatedFormData); // Call PatchData and check for success
        if (isSuccess) {
          toast.success('Image Uploaded successfully!');
          setImageLoading(false);
          setLoadingSubmit(false);
          setUploadImage('');
          setPage(1);
        } else {
          toast.error('Failed to Upload Image'); // Handle failure case
          setImageLoading(false);
          setUploadImage('');
          setLoadingSubmit(false);
        }
      } catch (error) {
        setImageLoading(false);
        setUploadImage('');
        setLoadingSubmit(false);

        console.error('Error submitting data:', error);
        toast.error((error as { message?: string })?.message || 'Error submitting image');
      }
    } catch (error) {
      setLoadingSubmit(false);

      console.error('An error occurred:', error);
      toast.error('An error occurred during submission');
    }
  };


  const handleSubmit = () => {
    handleSubmitedit();
  };

  const [avatar, setAvatar] = useState<string>("https://res.cloudinary.com/do5wu6ikf/image/upload/v1721847923/Reev/Avatar09fff_wn6wgf.svg");
  const [compressedSize, setCompressedSize] = useState<number | null>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      const maxSize = (1024 * 1024) / 2; // 0.5 MB
      if (file.size > maxSize) {
        compressImage(file).then(({ compressedImage, size }) => {
          setAvatar(compressedImage);
          setCompressedSize(size);
          const fileDataURI = compressedImage;
          const fileName = file.name;
          const localURLName = 'DPName';
          const localFileName = 'DPfilename';

          // Save file data URI to localStorage
          localStorage.setItem(localURLName, fileDataURI);
          localStorage.setItem(localFileName, fileName);
          localStorage.setItem('AvatarImage', compressedImage);
          console.log(compressedSize ? compressedSize / 1024 / 1024 : 'n', file.size / 1024 / 1024);
          setUploadImage(compressedImage);
        });
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            setAvatar(reader.result as string);
            setCompressedSize(file.size);
            const fileDataURI = reader.result as string;
            const fileName = file.name;
            const localURLName = 'DPName';
            const localFileName = 'DPfilename';

            // Save file data URI to localStorage
            localStorage.setItem(localURLName, fileDataURI);
            localStorage.setItem(localFileName, fileName);
            setUploadImage(reader.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    } else {
      console.log('Please upload a PNG or JPG image.');
      setUploadImage('failed');
    }
    localStorage.setItem('AvatarImage', avatar);
    setUploadImage('failed');
  };
  const compressImage = (file: File): Promise<{ compressedImage: string; size: number }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const img = new Image();
        img.src = e.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (ctx) {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // Compress image
            const quality = 0.4; // Adjust quality (0.0 to 1.0)
            const compressedDataURL = canvas.toDataURL('image/jpeg', quality);
            console.log(compressedDataURL, 'compressedDataURL')

            // Convert data URL to Blob to get the size
            fetch(compressedDataURL)
                .then(res => res.blob())
                .then(blob => {
                  resolve({compressedImage: compressedDataURL, size: blob.size});
                  // console.log(blob.size/1024/1024, 'mb',compressedDataURL.length/1024, 'kb')
                });
          } else {
            reject(new Error('Failed to get canvas context'));
          }
        };
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDPSubmit = async () => {
    setImageLoading(true);
    try {
      let DP;
      const fileDataURI = localStorage.getItem('DPName');
      const fileName = localStorage.getItem('DPfilename');
      if (fileDataURI && fileName) {
        DP = await getUploadURL(fileDataURI, fileName);
      }

      const updatedFormData = {
        image: DP,
      };

      console.log(updatedFormData);

      try {
        const isSuccess = await PatchData(updatedFormData); // Call PatchData and check for success
        if (isSuccess) {
          toast.success('Image Uploaded successfully!');
          setImageLoading(false);
          // setLoadingSubmit(false);
          setUploadImage('');
        } else {
          toast.error('Failed to Upload Image'); // Handle failure case
          setImageLoading(false);
          setUploadImage('');
          // setLoadingSubmit(false);
        }
      } catch (error) {
        setImageLoading(false);
        setUploadImage('');
        console.error('Error submitting data:', error);
        toast.error((error as { message?: string })?.message || 'Error submitting image');
      }
    } catch (error) {
      // setLoadingSubmit(false);
      setImageLoading(false);
      setUploadImage('');
      console.error('An error occurred:', error);
      toast.error('An error occurred during submission');
    }
  };

  const { userData, fetchData } = useAuthStore() as {
    userData: any;
    loading: boolean;
    error: any;
    fetchData: () => void;
    fetchProfileData: () => void;
  };

  useEffect(() => {
    fetchData();
    localStorage.setItem('userType', userData?.user_type || '');
  }, [fetchData]);

  return (
    <>
      <Helmet>
        <title>Profile</title>
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

      <section className={style.container_two}>
        <div className={styles.headerBtn}>
          <div style={{ width: "100%" }} className={styles.Btn}>
            <div
              className={styles.header}
              style={{
                color: header === "Public" ? "black" : "",
                borderBottom: header === "Public" ? "solid 2px black" : "",
              }}
              onClick={() => handleHeader("Public")}>
              Public Profile
            </div>
            <div
              className={styles.header}
              style={{
                color: header === "Personal" ? "black" : "",
                borderBottom: header === "Personal" ? "solid 2px black" : "",
              }}
              onClick={() => handleHeader("Personal")}>
              Personal Profile
            </div>
          </div>
          {/*<div className={styles.timeFrame}>*/}
          {/*    Last 30 days <img*/}
          {/*    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725753843/Reev/Icon_Stroke_d2hmut.svg"*/}
          {/*    alt="arrowDown"/>*/}
          {/*</div>*/}
        </div>
        <div className={style.holder_two}>
          {header === "Public" ? (
              <div>
                <div className={stylesOn.avaterCont}>

                  <div>
                    <img src={userData?.image || avatar} alt="avater" className={stylesOn.avaterimg}/>
                  </div>

                  <div className={stylesOn.camera}>
                    {uploadImage === '' ? (
                        <input type="file" style={{opacity: '0', width: '100%', height: '100%'}}
                               onChange={handleImageChange} accept="image/png, image/jpeg"/>
                    ) : (
                        <button className={stylesOn.ProfileImgsaveBtn} onClick={handleDPSubmit}
                                disabled={imageLoading}>
                          {imageLoading ? 'Loading...' : 'Save'}
                        </button>
                    )}
                  </div>

                </div>
                <div className={style.contain}>
                  <Input
                      label="Display Name"
                      size="small"
                      isTextArea={false}
                      name="display_name"
                      value={formValues.display_name}
                      placeholder="Others will see this name"
                      onChange={handleInputChange}
                  />
                  <br/>
                  <Input
                      size="small"
                      value={formValues.bio}
                      onChange={handleInputChange}
                      name='bio'
                      isTextArea={true}
                      placeholder="I am a"
                      label="About me (professional info only)"
                      labelSub="Do not share any information that would show your race or personal location"
                  />
                  <br/>

                  <div>
                    <TagInput
                        subLabel2={"Popular Languages spoken"}
                        label="Language"
                        recommendedTags={recommendedLanguages}
                        placeholder={"Enter preferred Languages"}
                        maxTags={3}
                        setTags={setprofileLang}
                        tags={profileLang}
                    />
                  </div>
                  {userType === "Freelancer" && (
                      <div>
                        <TagInput
                            label="Skills"
                            recommendedTags={recommendedIntrests}
                            placeholder={"Enter Skills"}
                            maxTags={2}
                            setTags={setprofileSkills}
                            tags={profileSkills}
                        />
                      </div>
                  )}

                  {userType === "Client" && (
                      <div>
                        <TagInput
                            label="Intrests"
                            recommendedTags={recommendedIntrests}
                            placeholder={"Enter Intrests"}
                            maxTags={2}
                            setTags={setprofileIntrest}
                            tags={profileIntrest}
                        />
                      </div>
                  )}


                </div>

                {userType === "Freelancer" && (
                    <div>
                      <Input
                          isTextArea={false}
                          type={"text"}
                          label="CV/Resume Name"
                          placeholder="Circuit Design CV"
                          size="small"
                          value={formValues?.resume?.[0] || ""}
                          onChange={handleInputChange}
                          name={"CVName"}
                      />
                      <br/>
                      <FileUpload
                          vibrate={targetDivRef3}
                          file={first}
                          setFile={setFirst}
                          id={"editCV"}
                          label={'Drag and Drop to Upload your CV/Resume'}
                          allowedTypes={['application/pdf']}
                      />

                      <br/>
                      <br/>
                      <Input
                          isTextArea={false}
                          type={"text"}
                          label="Portfolio Link 1"
                          placeholder="pinterest.com/portfoliolink"
                          size="small"
                          onChange={handleInputChange}
                          name={"portfolio1"}
                          value={formValues?.portfolio?.[0]}

                      />
                      <br/>
                      <Input
                          isTextArea={false}
                          type={"text"}
                          label="Portfolio Link 2"
                          placeholder="pinterest.com/portfoliolink"
                          size="small"
                          onChange={handleInputChange}
                          name={"portfolio2"}
                          value={formValues?.portfolio?.[1]}

                      />
                    </div>
                )}
              </div>
          ) : (
              // personal
              <div>
                <div className={style.contain}>
                  <div className={style.name}>
                    <div>
                      <Input
                          value={formValues.first_name}
                          label="First Name"
                          isTextArea={false}
                          name="first_name"
                          placeholder="First name"
                          onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Input
                          value={formValues.last_name}
                          label="Last Name"
                          size="small"
                          isTextArea={false}
                          name="last_name"
                          placeholder="Last name"
                          onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                  {/*<Input*/}
                  {/*  value={formValues.email}*/}
                  {/*  label="Work email address"*/}
                  {/*  size="small"*/}
                  {/*  type="email"*/}
                  {/*  isTextArea={false}*/}
                  {/*  name="email"*/}
                  {/*  onChange={handleInputChange}*/}
                  {/*/>*/}
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
                      onChange={(option: OptionType) => setFormValues((prevValues) => ({
                        ...prevValues,
                        city: option.label,
                      }))}
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
                        contact_number: e.target.value,
                      }));
                    }}
                  />
                </div>

                {/*<div className={styles.fileHeader}>Valid Identification</div>*/}
                <br />
                <FileUpload
                  vibrate={targetDivRef3}
                  file={second}
                  setFile={setSecond}
                  id={"editID"}
                  label={
                    "Drag and Drop to Upload your Valid ID card (National ID, Driver’s license, International Passport)"
                  }
                  allowedTypes={["image/png", "image/jpeg"]}
                />
              </div>
            </div>
          )}

          <div className={style.edit_holder_two}>
            <ButtonII
              hasIcon={false}
              isLabelVisible={true}
              label=  {loadingCloud? 'Saving Files...' : loadingSubmit ? 'Uploading...' : "Save and Continue" }
              onClick={handleSubmit}
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
