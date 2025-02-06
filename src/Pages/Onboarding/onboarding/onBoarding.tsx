import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import styles from './onBoarding.module.css';
import {useNavigate} from "react-router-dom";
import Input from "../../../stories/FieldInput-I/input";
import Dropdown from "../../../stories/OtherInputsType/dropdown/dropdown";
import PhoneInput from "../../../stories/OtherInputsType/PhoneInput/PhoneInput";
import {ButtonII} from "../../../stories/Button-II/ButtonII";
import TagUi from "../../../Components/TagUI/tagUI";
import SuccessModal from "../../../Components/modals/successModal/successModal";
import TagInput from "../../../Components/TagInput/tagInput";
import {Experience, recommendedLanguages, recommendedSkills, tagData} from "./dataset";
import FileUpload from "../../../Components/FileUpload/fileUpload";
import {uploadToCloudinary} from "../../../api/UploadToCloudinary";
import {toast} from "react-toastify";
import {PatchData, postProfileData} from "../../../api/Services/Auth";


// {
//     "display_name": "string",
//     "state": "string",
//     "city": "string",
//     "contact_number": "string",
//     "professional_role": "string",
//     "experience_level": "Beginner",
//     "language_spoken": {
//     "additionalProp1": "string",
//         "additionalProp2": "string",
//         "additionalProp3": "string"
// },
//     "skills": {
//     "additionalProp1": "string",
//         "additionalProp2": "string",
//         "additionalProp3": "string"
// },
//     "interests": {
//     "additionalProp1": "string",
//         "additionalProp2": "string",
//         "additionalProp3": "string"
// },
//     "company_name": "string"
// }

const OnBoarding = () => {
    interface FormValues {
        display_name: string;
        state: string;
        city: string;
        contact_number: string;
        countryCode: string;
        avatar: string;
    }

    interface FormValues2 {
        professional_role: string;
        experience_level: string;
        language_spoken: string[];
        skills: string[];
        PortfolioLink_1: string;
        PortfolioLink_2: string;
    }

    interface FormValues3 {
        UserVerification: string | null;
        CVName: string;
        CV_PDF: string | null;
    }


    let navigate = useNavigate();
    const ut = localStorage.getItem('userType') ??  'Client';
   const UserType = ut.charAt(0).toUpperCase() + ut.slice(1).toLowerCase();
    const [stage, setStage] = React.useState(1);
    const [doneStage, setDoneStage] = React.useState({stage1: false, stage2: false, stage3: false});
    const [avatar, setAvatar] = useState<string>("https://res.cloudinary.com/do5wu6ikf/image/upload/v1721847923/Reev/Avatar09fff_wn6wgf.svg");
    const [langtags, setLangTags] = useState<string[]>(() => {
        const savedFormValues2 = localStorage.getItem('onboardingForm2');
        return savedFormValues2 ? JSON.parse(savedFormValues2).language_spoken : [];
    });
    const [skilltags, setSkilltags] = useState<string[]>(() => {
            const savedFormValues2 = localStorage.getItem('onboardingForm2');
            return savedFormValues2 ? JSON.parse(savedFormValues2).skills : [];
        }
    );
    const [tags, setTags] = useState(() => {
        const savedTags = localStorage.getItem('ClientSkillTags');
        return savedTags ? JSON.parse(savedTags) : tagData;
    });
    const [countryCode, setCountryCode] = useState('+234');
    const [first, setFirst] = useState<string | null>(() => {
        const savedFormValues2 = localStorage.getItem('onboardingForm3');
        return savedFormValues2 ? JSON.parse(savedFormValues2).UserVerification : '';
    });
    const [second, setSecond] = useState<string | null>(
        () => {
            const savedFormValues2 = localStorage.getItem('onboardingForm3');
            return savedFormValues2 ? JSON.parse(savedFormValues2).CV_PDF : '';
        }
    );

    const defaultFormValues2: FormValues2 = {
        professional_role: '',
        experience_level: '',
        language_spoken: [],
        skills: [],
        PortfolioLink_1: '',
        PortfolioLink_2: '',
    };


    const defaultFormValues: FormValues = {
        display_name: '',
        state: '',
        city: '',
        contact_number: '',
        countryCode: '',
        avatar: '',
    };

    const defaultFormValues3: FormValues3 = {
        UserVerification: '',
        CVName: '',
        CV_PDF: '',
    };
    const [formValues, setFormValues] = useState<FormValues>(() => {
        const savedFormValues = localStorage.getItem('onboardingForm');
        return savedFormValues ? JSON.parse(savedFormValues) : defaultFormValues;
    });


    const [formErrors, setFormErrors] = useState({
        display_name: '',
        state: '',
        city: '',
        contact_number: '',
    });


    const [formValues2, setFormValues2] = useState<FormValues2>(() => {
        const savedFormValues2 = localStorage.getItem('onboardingForm2');
        return savedFormValues2 ? JSON.parse(savedFormValues2) : defaultFormValues2;
    });
    const [formErrors2, setFormErrors2] = useState({
        professional_role: '',
        experience_level: '',
        language_spoken: '',
        skills: '',
        PortfolioLink_1: '',
        PortfolioLink_2: '',
    });

    const [formValues3, setFormValues3] = useState<FormValues3>(() => {
        const savedFormValues3 = localStorage.getItem('onboardingForm3');
        return savedFormValues3 ? JSON.parse(savedFormValues3) : defaultFormValues3;
    });
    const [formErrors3, setFormErrors3] = useState({
        UserVerification: '',
        CVName: '',
        CV_PDF: '',
    });

    const [compressedSize, setCompressedSize] = useState<number | null>(null);

    useEffect(() => {
        setFormValues2(prevValues => ({
            ...prevValues,
            language_spoken: langtags
        }));
    }, [langtags]);

    useEffect(() => {
        setFormValues2(prevValues => ({
            ...prevValues,
            skills: skilltags
        }));
    }, [skilltags]);

    useEffect(() => {
        setFormValues3(prevValues => ({
            ...prevValues,
            UserVerification: first,
            CV_PDF: second
        }));
    }, [first, second]);


    useEffect(() => {
        setFormValues(prevValues => ({
            ...prevValues,
            countryCode: countryCode
        }));
    }, [countryCode]);

    useEffect(() => {
        setFormValues(prevValues => ({
            ...prevValues,
            avatar: avatar
        }));
    }, [avatar]);

    const targetDivRef = useRef<HTMLDivElement>(null);
    const targetDivRef2 = useRef<HTMLDivElement>(null);
    const targetDivRef3 = useRef<HTMLDivElement>(null);
    const targetDivRef4 = useRef<HTMLDivElement>(null);
    const VibrateDiv = () => {
        if (targetDivRef.current) {
            targetDivRef.current.classList.add(styles.shake);
            setTimeout(() => {
                targetDivRef.current?.classList.remove(styles.shake);
            }, 500); // Duration of the shake animation
        }
    };

    const VibrateDiv2 = () => {
        if (targetDivRef2.current) {
            targetDivRef2.current.classList.add(styles.shake);
            setTimeout(() => {
                targetDivRef2.current?.classList.remove(styles.shake);
            }, 500); // Duration of the shake animation
        }
    };

    const VibrateDiv3 = () => {
        if (targetDivRef3.current) {
            targetDivRef3.current.classList.add(styles.shake);
            setTimeout(() => {
                targetDivRef3.current?.classList.remove(styles.shake);
            }, 500); // Duration of the shake animation
        }
    };

    const VibrateDiv4 = () => {
        if (targetDivRef4.current) {
            targetDivRef4.current.classList.add(styles.shake);
            setTimeout(() => {
                targetDivRef4.current?.classList.remove(styles.shake);
            }, 500); // Duration of the shake animation
        }
    };

    function areAtLeastThreeTagsActive(tags: { isActive: boolean, content: string }[]): boolean {
        let activeCount = 0;

        for (const tag of tags) {
            if (tag.isActive) {
                activeCount++;
            }
            if (activeCount >= 3) {
                return true;
            }
        }

        return false;
    }

    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [loadingClientSubmit, setLoadingClientSubmit] = useState(false);

    const handleForm3Submit = async () => {
        try {
            let ValidId;
            let ValidCV;
            const fileDataURI = localStorage.getItem('fileLabelurlvalidID');
            const fileName = localStorage.getItem('filenamevalidID');
            if (fileDataURI && fileName) {
                ValidId = await getUploadURL(fileDataURI, fileName);
            }

            const fileDataURIBith = localStorage.getItem('fileLabelurlvalidCV');
            const fileNameBirth = localStorage.getItem('filenamevalidCV');
            if (fileDataURIBith && fileNameBirth) {
                ValidCV = await getUploadURL(fileDataURIBith, fileNameBirth);
            }

            const updatedFormData = {
                ...formValues,
                ...formValues2,
                ...formValues3,
                UserVerification: ValidId,
                CV_PDF: ValidCV,
            };


            console.log(updatedFormData);

            try {
                const isSuccess = await postProfileData(updatedFormData); // Call PatchData and check for success
                if (isSuccess) {
                    setStage(stage + 1);
                    handleDone();
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
            setLoadingSubmit(false);
            console.error('An error occurred:', error);
            toast.error('An error occurred during submission');
        }
    };

    const handleClientsSubmit = async () => {
        setLoadingClientSubmit(true);
        try {


            const updatedFormData = {
                ...formValues,
                interests: tags,
            };


            console.log(updatedFormData);

            try {
                const isSuccess = await postProfileData(updatedFormData); // Call PatchData and check for success
                if (isSuccess) {
                    setStage(stage + 1);
                    handleDone();
                    toast.success('profile successfully!');
                    setLoadingClientSubmit(false);
                    // setLoadingSubmit(false);
                    setUploadImage('');
                } else {
                    toast.error('Failed to Upload profile Data'); // Handle failure case
                    setLoadingClientSubmit(false);
                    setUploadImage('');
                    // setLoadingSubmit(false);
                }
            } catch (error) {
                setLoadingClientSubmit(false);
                setUploadImage('');
                console.error('Error submitting data:', error);
                toast.error((error as { message?: string })?.message || 'Error submitting data');
            }
        } catch (error) {
            setLoadingClientSubmit(false);
            console.error('An error occurred:', error);
            toast.error('An error occurred during submission');
        }
    };

    const handleNext = () => {
        if (stage !== 4) {
            if (stage === 2) {
                if (UserType === 'Freelancer') {
                    const formValues2 = validateForm2();
                    if (formValues2) {
                        setStage(stage + 1);
                        handleDone();
                    }
                } else {
                    const isTagValid = areAtLeastThreeTagsActive(tags);
                    if (!isTagValid) {
                        VibrateDiv2();
                    } else {
                    //     clients submission
                        handleClientsSubmit();
                    }
                }
            } else if (stage === 3 && UserType === 'Freelancer') {
                const formValues3 = validateForm3();
                console.log(formValues3, 'formValues3');
                if (formValues3) {
                    handleForm3Submit();

                }

            } else {
                setStage(stage + 1);
            }
        }
    }
    const handleDone = () => {
        setDoneStage(prevState => ({...prevState, [`stage${stage}`]: true}));
    }

    const handleBack = () => {
        setStage(stage - 1);
    }


    useEffect(() => {
        localStorage.setItem('onboardingForm', JSON.stringify(formValues));
        localStorage.setItem('onboardingForm2', JSON.stringify(formValues2));
        localStorage.setItem('onboardingForm3', JSON.stringify(formValues3));
    }, [formValues, formValues2, formValues3]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormValues({
            ...formValues,
            [e.target.name]: value,
        });
    };

    const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormValues2({
            ...formValues2,
            [e.target.name]: value,
        });
    };

    const handleInputChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormValues3({
            ...formValues3,
            [e.target.name]: value,
        });
    };


    interface DropdownOption {
        value: string;
        label: string;
    }

    // const handleDropdown = (option: DropdownOption) => {
    //     setFormValues((prevState) => ({
    //         ...prevState,
    //         state: option.value,
    //         city: option.value,
    //     }));
    // };

    const handleDropdown2 = (option: DropdownOption) => {
        setFormValues2((prevState) => ({
            ...prevState,
            experience_level: option.value,

        }));
    };


    const validateForm1 = () => {
        let newErrors = {
            display_name: '',
            state: '',
            city: '',
            contact_number: '',
            avatar: ''
        };

        if (!formValues.display_name) {
            newErrors.display_name = 'Display name is required';
        }

        if (!formValues.state) {
            newErrors.state = 'State is required';
        }

        if (!formValues.city) {
            newErrors.city = 'City is required';
        }

        if (!formValues.contact_number) {
            newErrors.contact_number = 'Contact Number is required';
        }


        setFormErrors(newErrors);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };

    const validateForm2 = () => {
        let newErrors = {
            professional_role: '',
            experience_level: '',
            language_spoken: '',
            skills: '',
            PortfolioLink_1: '',
            PortfolioLink_2: '',
        };

        const urlPattern = new RegExp(
            '^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i' // fragment locator
        );

        if (!formValues2.professional_role) {
            newErrors.professional_role = 'Professional Role is required';
        }

        if (!formValues2.experience_level) {
            newErrors.experience_level = 'Experience is required';
        }

        if (!formValues2.language_spoken.length) {
            newErrors.language_spoken = 'Language Spoken is required';
        }

        if (!formValues2.skills.length) {
            newErrors.skills = 'Skill Set is required';
        }

        if (!formValues2.PortfolioLink_1 || !urlPattern.test(formValues2.PortfolioLink_1)) {
            newErrors.PortfolioLink_1 = 'Valid Portfolio Link 1 is required';
        }

        if (!formValues2.PortfolioLink_2 || !urlPattern.test(formValues2.PortfolioLink_2)) {
            newErrors.PortfolioLink_2 = 'Valid Portfolio Link 2 is required';
        }

        setFormErrors2(newErrors as any);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };

    const validateForm3 = () => {

        let newErrors = {
            UserVerification: '',
            CVName: '',
            CV_PDF: '',
        };


        if (!formValues3.UserVerification) {
            newErrors.UserVerification = 'Verification is required';
            VibrateDiv3()
        }

        if (!formValues3.CVName) {
            newErrors.CVName = 'Field is required';

        }

        if (!formValues3.CV_PDF) {
            newErrors.CV_PDF = 'CV/Resume  is required';
            VibrateDiv4()
        }


        setFormErrors3(newErrors);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };


    const handleStage1 = () => {
        const isFormValid = true;
        if (isFormValid) {

            setStage(1)

        }
    }

    const handleStage2 = () => {
        const isFormValid = validateForm1();
        if (isFormValid) {
            VibrateDiv()
            // setStage(2)

        }
    }


    const handleStage3 = () => {
        const isTagValid = areAtLeastThreeTagsActive(tags);
        if (!isTagValid) {
            // setStage(3)
            // handleDone()
            VibrateDiv2()

        }
    }


    const handleSubmit = () => {
        const isFormValid = validateForm1();

        if (isFormValid) {
            console.log(formValues)
            handleNext()
            handleDone()
        }
    };


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

    const[uploadImage, setUploadImage] = useState('');


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


    const [imageLoading, setImageLoading] = useState<boolean>(false);
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




    const handleTagClick = (index: number) => {
        const newTags = tags.map((tag: { isActive: boolean, content: string }, i: number) =>
            i === index ? {...tag, isActive: !tag.isActive} : tag
        );
        setTags(newTags);

        localStorage.setItem('ClientSkillTags', JSON.stringify(newTags));
    };
    useEffect(() => {
        const storedCountryCode = localStorage.getItem('countryCode');
        if (storedCountryCode) {
            setCountryCode(storedCountryCode);
        }
    }, [countryCode, langtags, skilltags, avatar, handleSubmit]);


    return (
        <>
            <div className={styles.container}>
                {UserType === 'Client' && stage === 3 ?
                    <>
                    </>
                    :

                    <div className={styles.progressContainer}>
                        <div
                            className={styles.circle}
                            style={{
                                background: stage === 1 ? '#404145' : doneStage.stage1 ? '#404145' : '',
                                color: doneStage.stage1 ? '#fec200' : ''
                            }}
                            onClick={handleStage1}
                        >
                            {doneStage.stage1 ? '✔' : '1'}

                        </div>
                        <div className={styles.line}
                             style={{visibility: (stage === 2 || stage === 3) ? 'visible' : doneStage.stage1 ? 'visible' : 'hidden'}}></div>
                        <div
                            className={styles.circle}
                            style={{
                                background: stage === 2 ? '#404145' : doneStage.stage2 ? '#404145' : '',
                                color: doneStage.stage2 ? '#fec200' : ''
                            }}
                            onClick={handleStage2}
                        >
                            {doneStage.stage2 ? '✔' : '2'}
                        </div>
                        {UserType === 'Freelancer' &&

                            <>
                                <div className={styles.line}
                                     style={{visibility: stage === 3 ? 'visible' : doneStage.stage2 ? 'visible' : 'hidden'}}></div>
                                <div
                                    className={styles.circle}
                                    style={{
                                        background: stage === 3 ? '#404145' : doneStage.stage3 ? '#404145' : '',
                                        color: doneStage.stage3 ? '#fec200' : ''
                                    }}
                                    onClick={handleStage3}
                                >
                                    {doneStage.stage3 ? '✔' : '3'}
                                </div>
                            </>

                        }

                    </div>


                }
                {stage === 1 &&
                    <div className={styles.stageCont}>
                        <div className={styles.avaterCont}>

                            <div>
                                <img src={avatar} alt="avater" className={styles.avaterimg}/>
                            </div>

                            <div className={styles.camera}>
                                {uploadImage === '' ? (
                                    <input type="file" style={{opacity: '0', width: '100%', height: '100%'}}
                                           onChange={handleImageChange} accept="image/png, image/jpeg"/>
                                ) : (
                                    <button className={styles.ProfileImgsaveBtn} onClick={handleDPSubmit}
                                            disabled={imageLoading}>
                                        {imageLoading ? 'Loading...' : 'Save'}
                                    </button>
                                )}
                            </div>

                        </div>

                        <form className={styles.formContainer}>
                            <Input isTextArea={false} type={'text'} label='Display name'
                                   placeholder='others will see this name'
                                   size='small' onChange={handleInputChange} name={'display_name'}
                                   error={!!formErrors.display_name}
                                   errorMessage={formErrors.display_name}
                                   value={formValues.display_name}
                            />

                            <Input isTextArea={false} type={'text'}  label='State/county'
                                   placeholder='State/county'
                                   size='small' onChange={handleInputChange} name={'state'}
                                   error={!!formErrors.state}
                                   errorMessage={formErrors.state}
                                   value={formValues.state}
                            />

                            <Input isTextArea={false} type={'text'} label='City'
                                   placeholder='City'
                                   size='small' onChange={handleInputChange} name={'city'}
                                   error={!!formErrors.city}
                                   errorMessage={formErrors.city}
                                   value={formValues.city}
                            />




                            <PhoneInput
                                size={'small'}
                                default={true}
                                focused={true}
                                disabled={false}
                                label={'Office/Work Contact Number*'}
                                onChange={handleInputChange}
                                placeholder={'Phone Number'}
                                type={'text'}
                                name={'contact_number'} error={!!formErrors.contact_number}
                                errorMessage={formErrors.contact_number}
                                value={formValues.contact_number}/>


                            <div className={styles.btn} ref={targetDivRef}>
                                <ButtonII
                                    label='Finish Set up'
                                    primary={true}
                                    hasIcon={false}
                                    disabled={false}
                                    onClick={handleSubmit}
                                    isLabelVisible={true}
                                />
                            </div>

                        </form>
                    </div>
                }
                {/* Client*/}
                {(stage === 2 && UserType === 'Client') &&
                    <div className={styles.headerText}>
                        <h1>What would you be looking for?</h1>
                        <p className={styles.headSubText}>This would help us organize your feed and give you the best
                            experience</p>

                        <div className={styles.LowerContainer}>
                            <p className={styles.tagHeader}>What are your interests</p>

                            <div>
                                <p className={styles.tagLabel}>Select Skill tags:</p>
                                <div className={styles.tagContainer} ref={targetDivRef2}>
                                    {tags.map((tag: { isActive: boolean, content: string }, index: number) => (
                                        <TagUi
                                            key={index}
                                            isActive={tag.isActive}
                                            content={tag.content}
                                            onClick={() => handleTagClick(index)}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>


                        <div className={styles.btnCont}>
                            <ButtonII
                                label={ loadingClientSubmit ? 'Loading...' : ' Save' }
                                primary={true}
                                hasIcon={false}
                                disabled={false}
                                onClick={handleNext}
                                isLabelVisible={true}
                            />

                            <ButtonII
                                label='Back'
                                primary={false}
                                hasIcon={false}
                                disabled={false}
                                onClick={handleBack}
                                isLabelVisible={true}
                            />
                        </div>

                    </div>
                }

                {(stage === 3 && UserType === 'Client') &&
                    <div>
                        <SuccessModal Btnlabel2={'Find Freelancer'} Btnlabel1={'View Dashboard'} Forward={() => {
                            navigate('/')
                        }} Backward={() => {
                            navigate('/')
                        }} text={'Congratulations! \n' +
                            'Your profile is complete'}/>
                    </div>
                }

                {/* Freelancer*/}

                {(stage === 2 && UserType === 'Freelancer') &&
                    <div className={styles.headerText}>
                        <br/>

                        <Input isTextArea={false} type={'text'} label='Professional Role'
                               placeholder='PCB Design, Project Management, Drone Development'
                               size='small' onChange={handleInputChange2} name={'professional_role'}
                               error={!!formErrors2.professional_role}
                               errorMessage={formErrors2.professional_role}
                               value={formValues2.professional_role}
                        />

                        <Dropdown options={Experience} defaultText='Expert'
                                  label='Experience' size='small' onChange={handleDropdown2}
                                  error={!!formErrors2.experience_level}
                                  errorMessage={formErrors2.experience_level}/>

                        <TagInput
                            error={!!formErrors2.language_spoken}
                            errorMessage={formErrors2.language_spoken}
                            label={'Language Spoken'} recommendedTags={recommendedLanguages}
                            placeholder={'Enter preferred Languages'} maxTags={5} setTags={setLangTags}
                            tags={langtags}/>
                        <TagInput
                            error={!!formErrors2.skills}
                            errorMessage={formErrors2.skills}
                            label='Skill Set' recommendedTags={recommendedSkills}
                            placeholder={'Enter preferred Languages'} maxTags={10} setTags={setSkilltags}
                            tags={skilltags}/>

                        <br/>

                        <Input isTextArea={false} type={'text'} label='Prortfolio Link 1' placeholder='Add URL Link'
                               size='small' onChange={handleInputChange2} name={'PortfolioLink_1'}
                               error={!!formErrors2.PortfolioLink_1}
                               errorMessage={formErrors2.PortfolioLink_1}
                               value={formValues2.PortfolioLink_1}
                        />

                        <Input isTextArea={false} type={'text'} label='Portfolio Link 2' placeholder='Add URL Link'
                               size='small' onChange={handleInputChange2} name={'PortfolioLink_2'}
                               error={!!formErrors2.PortfolioLink_2}
                               errorMessage={formErrors2.PortfolioLink_2}
                               value={formValues2.PortfolioLink_2}
                        />

                        <br/>
                        <br/>

                        <div className={styles.btnCont}>
                            <ButtonII
                                label='Continue'
                                primary={true}
                                hasIcon={false}
                                disabled={false}
                                onClick={handleNext}
                                isLabelVisible={true}
                            />

                            <ButtonII
                                label='Back'
                                primary={false}
                                hasIcon={false}
                                disabled={false}
                                onClick={handleBack}
                                isLabelVisible={true}
                            />
                        </div>

                    </div>
                }

                {(stage === 3 && UserType === 'Freelancer') &&
                    <div className={styles.stageCont}>
                        <div className={styles.randCont}>
                            <div className={styles.fileHeader}>Valid Identification</div>

                            <FileUpload vibrate={targetDivRef3} file={first} setFile={setFirst} id={'validID'}
                                        label={'Drag and Drop to Upload your Valid ID card (National ID, Driver’s license, International Passport)'}
                                        allowedTypes={['image/png', 'image/jpeg']}/>

                        </div>

                        <div className={styles.randCont}>
                            <div className={styles.fileHeader}>CV/Resume</div>

                            <Input isTextArea={false} type={'text'} label='CV/Resume Name'
                                   placeholder='Circuit Design CV'
                                   size='small' onChange={handleInputChange3} name={'CVName'}
                                   error={!!formErrors3.CVName}
                                   errorMessage={formErrors3.CVName}
                                   value={formValues3.CVName}
                            />
                            <FileUpload vibrate={targetDivRef4} setFile={setSecond} file={second} id={'validCV'}
                                        label={'Drag and Drop to Upload your CV/Resume'}
                                        allowedTypes={['application/pdf']}/>

                        </div>


                        <br/>
                        <br/>
                        <div className={styles.btnCont}>
                            <ButtonII
                                label= {loadingCloud? 'Saving Files...' : loadingSubmit ? 'Uploading...' : ' Save' }
                                primary={true}
                                hasIcon={false}
                                disabled={false}
                                onClick={handleNext}
                                isLabelVisible={true}
                            />

                            <ButtonII
                                label='Back'
                                primary={false}
                                hasIcon={false}
                                disabled={false}
                                onClick={handleBack}
                                isLabelVisible={true}
                            />
                        </div>
                    </div>
                }

                {(stage === 4 && UserType === 'Freelancer') &&
                    <div>
                        <SuccessModal Btnlabel2={'Find Client'} Btnlabel1={'View Dashboard'} Forward={() => {
                            navigate('/')
                        }} Backward={() => {
                            navigate('/dashboard')
                        }} text={'Congratulations! \n' +
                            'Your profile is complete'}/>
                    </div>
                }
            </div>

        </>
    );
};

export default OnBoarding;