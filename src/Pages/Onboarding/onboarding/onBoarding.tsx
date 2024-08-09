import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import styles from './onBoarding.module.css';
import {useNavigate} from "react-router-dom";
import Input from "../../../stories/FieldInput-I/input";
import Dropdown from "../../../stories/OtherInputsType/dropdown/dropdown";
import PhoneInput from "../../../stories/OtherInputsType/PhoneInput/PhoneInput";
import {ButtonII} from "../../../stories/Button-II/ButtonII";
import {states} from "./state";
import {cities} from "./city";
import TagUi from "../../../Components/TagUI/tagUI";
import SuccessModal from "../../../Components/modals/successModal/successModal";
import TagInput from "../../../Components/TagInput/tagInput";

import {tagData, recommendedLanguages, recommendedSkills, Experience} from "./dataset";
import FileUpload from "../../../Components/FileUpload/fileUpload";

const OnBoarding = () => {
    interface FormValues {
        DisplayName: string;
        State: string;
        City: string;
        ContactNumber: string;
        countryCode: string;
        avater: string;
    }

    interface FormValues2 {
        ProfessionalRole: string;
        Experience: string;
        LanguageSpoken: string[];
        SkillSet: string[];
        PortfolioLink_1: string;
        PortfolioLink_2: string;
    }

interface FormValues3 {
    UserVerification: string | null;
    CVName: string;
    CV_PDF: string | null;
}






    let navigate = useNavigate();
    const UserType = localStorage.getItem('userType') ? localStorage.getItem('userType') :  'Client';
    const [stage, setStage] = React.useState(1);
    const [doneStage, setDoneStage] = React.useState({stage1: false, stage2: false, stage3: false});
    const [avatar, setAvatar] = useState<string>("https://res.cloudinary.com/do5wu6ikf/image/upload/v1721847923/Reev/Avatar09fff_wn6wgf.svg");
    const [langtags, setLangTags] = useState<string[]>(()=>{
        const savedFormValues2 = localStorage.getItem('onboardingForm2');
        return savedFormValues2 ? JSON.parse(savedFormValues2).LanguageSpoken : [];
    });
    const [skilltags, setSkilltags] = useState<string[]>(()=>{
            const savedFormValues2 = localStorage.getItem('onboardingForm2');
            return savedFormValues2 ? JSON.parse(savedFormValues2).SkillSet : [];
        }
    );
    const [tags, setTags] = useState(() => {
        const savedTags = localStorage.getItem('ClientSkillTags');
        return savedTags ? JSON.parse(savedTags) : tagData;
    });
    const [countryCode, setCountryCode] = useState('+234');
    const [first, setFirst] = useState<string | null>(()=>{
        const savedFormValues2 = localStorage.getItem('onboardingForm3');
        return savedFormValues2 ? JSON.parse(savedFormValues2).UserVerification : '';
    });
    const [second, setSecond] = useState<string | null>(
        ()=>{
            const savedFormValues2 = localStorage.getItem('onboardingForm3');
            return savedFormValues2 ? JSON.parse(savedFormValues2).CV_PDF : '';
        }
    );

    const defaultFormValues2 :FormValues2 = {
        ProfessionalRole: '',
        Experience: '',
        LanguageSpoken: [],
        SkillSet: [],
        PortfolioLink_1: '',
        PortfolioLink_2: '',
    };


    const defaultFormValues :FormValues = {
        DisplayName: '',
        State: '',
        City: '',
        ContactNumber: '',
        countryCode: '',
        avater: '',
    };

    const defaultFormValues3 :FormValues3 = {
        UserVerification: '',
        CVName: '',
        CV_PDF: '',
    };
    const [formValues, setFormValues] = useState<FormValues>(() => {
        const savedFormValues = localStorage.getItem('onboardingForm');
        return savedFormValues ? JSON.parse(savedFormValues) : defaultFormValues;
    });



    const [formErrors, setFormErrors] = useState({
        DisplayName: '',
        State: '',
        City: '',
        ContactNumber: '',
        avater: ''
    });


    const [formValues2, setFormValues2] = useState<FormValues2>(() => {
        const savedFormValues2 = localStorage.getItem('onboardingForm2');
        return savedFormValues2 ? JSON.parse(savedFormValues2) : defaultFormValues2;
    });
    const [formErrors2, setFormErrors2] = useState({
        ProfessionalRole: '',
        Experience: '',
        LanguageSpoken: '',
        SkillSet: '',
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
            LanguageSpoken: langtags
        }));
    }, [langtags]);

    useEffect(() => {
        setFormValues2(prevValues => ({
            ...prevValues,
            SkillSet: skilltags
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
            avater: avatar
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
                    setStage(stage + 1);
                    handleDone();
                }
            }
        }else if(stage === 3 && UserType === 'Freelancer'){
            const formValues3 = validateForm3();
            console.log(formValues3, 'formValues3');
            if (formValues3) {
                setStage(stage + 1);
                handleDone();
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
    }, [formValues,formValues2,formValues3]);




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

    const handleDropdown = (option: DropdownOption) => {
        setFormValues((prevState) => ({
            ...prevState,
            State: option.value,
            City: option.value,
        }));
    };

    const handleDropdown2 = (option: DropdownOption) => {
        setFormValues2((prevState) => ({
            ...prevState,
            Experience: option.value,

        }));
    };


    const validateForm1 = () => {
        let newErrors = {
            DisplayName: '',
            State: '',
            City: '',
            ContactNumber: '',
            avater: ''
        };

        if (!formValues.DisplayName) {
            newErrors.DisplayName = 'Display name is required';
        }

        if (!formValues.State) {
            newErrors.State = 'State is required';
        }

        if (!formValues.City) {
            newErrors.City = 'City is required';
        }

        if (!formValues.ContactNumber) {
            newErrors.ContactNumber = 'Contact Number is required';
        }


        setFormErrors(newErrors);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };

    const validateForm2 = () => {
        let newErrors = {
            ProfessionalRole: '',
            Experience: '',
            LanguageSpoken: '',
            SkillSet: '',
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

        if (!formValues2.ProfessionalRole) {
            newErrors.ProfessionalRole = 'Professional Role is required';
        }

        if (!formValues2.Experience) {
            newErrors.Experience = 'Experience is required';
        }

        if (!formValues2.LanguageSpoken.length) {
            newErrors.LanguageSpoken = 'Language Spoken is required';
        }

        if (!formValues2.SkillSet.length) {
            newErrors.SkillSet = 'Skill Set is required';
        }

        if (!formValues2.PortfolioLink_1 || !urlPattern.test(formValues2.PortfolioLink_1)) {
            newErrors.PortfolioLink_1 = 'Valid Portfolio Link 1 is required';
        }

        if (!formValues2.PortfolioLink_2 || !urlPattern.test(formValues2.PortfolioLink_2)) {
            newErrors.PortfolioLink_2 = 'Valid Portfolio Link 2 is required';
        }

        setFormErrors2(newErrors);

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
    if(isFormValid){

        setStage(1)

    }
}

    const handleStage2 = () => {
        const isFormValid = validateForm1();
        if(isFormValid){
            VibrateDiv()
            // setStage(2)

        }
    }


    const handleStage3 = () => {
        const isTagValid = areAtLeastThreeTagsActive(tags);
        if(!isTagValid){
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



    const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
            const maxSize = (1024 * 1024) / 2; // 0.5 MB
            if (file.size > maxSize) {
                compressImage(file).then(({ compressedImage, size }) => {
                    setAvatar(compressedImage);
                    setCompressedSize(size);
                    console.log( compressedSize ? compressedSize/1024/1024 :'n', file.size/1024/1024)

                });
            } else {
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (reader.result) {
                        setAvatar(reader.result as string);
                        setCompressedSize(file.size);
                    }
                };
                reader.readAsDataURL(file);
            }
        } else {
            console.log('Please upload a PNG or JPG image.');
        }
        localStorage.setItem('AvatarImage', avatar);
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
                                resolve({ compressedImage: compressedDataURL, size: blob.size });
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



    const handleTagClick = (index: number) => {
        const newTags = tags.map((tag: { isActive: boolean, content: string }, i: number) =>
            i === index ? { ...tag, isActive: !tag.isActive } : tag
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
        <div className={styles.container}>
            {UserType === 'Client' && stage=== 3 ?
                    <>
                    </>
                     :

                    <div className={styles.progressContainer}>
                    <div
                        className={styles.circle}
                        style={{background: stage === 1 ? '#404145' :doneStage.stage1 ? '#404145' : '' , color: doneStage.stage1 ? '#fec200' : ''  }}
                        onClick={handleStage1}
                    >
                        {doneStage.stage1 ? '✔' : '1'}

                    </div>
                    <div className={styles.line} style={{visibility: (stage === 2 || stage === 3) ? 'visible' :  doneStage.stage1 ? 'visible' : 'hidden'}}></div>
                    <div
                        className={styles.circle}
                        style={{background: stage === 2 ? '#404145' : doneStage.stage2 ? '#404145' : '' , color: doneStage.stage2 ? '#fec200' : ''  }}
                        onClick={handleStage2}
                    >
                        {doneStage.stage2 ? '✔' : '2'}
                    </div>
                    {UserType === 'Freelancer' &&

                        <>
                            <div className={styles.line} style={{visibility: stage === 3  ? 'visible' :  doneStage.stage2 ? 'visible' : 'hidden'}}></div>
                            <div
                                className={styles.circle}
                                style={{background: stage === 3 ? '#404145' : doneStage.stage3 ? '#404145' : '' , color: doneStage.stage3 ? '#fec200' : ''  }}
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
                    <div className={styles.avaterCont} >
                        <div >
                            <img src={avatar} alt="avater" className={styles.avaterimg}/>
                        </div>

                        <div className={styles.camera}>
                            <input type="file" style={{ opacity: '0', width: '100%', height: '100%' }} onChange={handleImageChange} accept="image/png, image/jpeg"/>
                        </div>

                    </div>

                    <form className={styles.formContainer}>
                        <Input isTextArea={false} type={'text'} label='Display name' placeholder='others will see this name'
                               size='small' onChange={handleInputChange} name={'DisplayName'} error={!!formErrors.DisplayName}
                               errorMessage={formErrors.DisplayName}
                               value={formValues.DisplayName}
                        />

                        <Dropdown options={states} defaultText='United State'
                        label='State/county' size='small' onChange={handleDropdown} error={!!formErrors.State}
                        errorMessage={formErrors.State}/>

                        <Dropdown options={cities} defaultText='United State'
                        label='City' size='small' onChange={handleDropdown} error={!!formErrors.City}
                        errorMessage={formErrors.City}/>

                        <PhoneInput
                            size={'small'}
                            default={true}
                            focused={true}
                            disabled={false}
                            label={'Office/Work Contact Number*'}
                            onChange={handleInputChange}
                            placeholder={'Phone Number'}
                            type={'text'}
                            name={'ContactNumber'} error={!!formErrors.ContactNumber}
                            errorMessage={formErrors.ContactNumber}
                            value={formValues.ContactNumber}/>


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
                    <p className={styles.headSubText}>This would help us organize your feed and give you the best experience</p>

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
                            label='Save         '
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
                    <SuccessModal Btnlabel2={'Find Freelancer'} Btnlabel1={'View Dashboard'} Forward={()=>{navigate('/')}} Backward={()=>{navigate('/')}} text={'Congratulations! \n' +
                        'Your profile is complete'}/>
                </div>
            }

            {/* Freelancer*/}

            {(stage === 2 && UserType === 'Freelancer') &&
                <div className={styles.headerText}>
                    <br/>

                    <Input isTextArea={false} type={'text'} label='Professional Role' placeholder='PCB Design, Project Management, Drone Development'
                    size='small' onChange={handleInputChange2} name={'ProfessionalRole'} error={!!formErrors2.ProfessionalRole}
                    errorMessage={formErrors2.ProfessionalRole}
                    value={formValues2.ProfessionalRole}
                    />

                    <Dropdown options={Experience} defaultText='Expert'
                              label='Experience' size='small' onChange={handleDropdown2} error={!!formErrors2.Experience}
                              errorMessage={formErrors2.Experience}/>

                    <TagInput
                        error={!!formErrors2.LanguageSpoken}
                        errorMessage={formErrors2.LanguageSpoken}
                        label={'Language Spoken'} recommendedTags={recommendedLanguages} placeholder={'Enter preferred Languages'} maxTags={5} setTags={setLangTags} tags={langtags}/>
                    <TagInput
                        error={!!formErrors2.SkillSet}
                        errorMessage={formErrors2.SkillSet}
                        label='Skill Set' recommendedTags={recommendedSkills} placeholder={'Enter preferred Languages'} maxTags={10} setTags={setSkilltags} tags={skilltags}/>

                    <br/>

                    <Input isTextArea={false} type={'text'} label='Prortfolio Link 1' placeholder='Add URL Link'
                           size='small' onChange={handleInputChange2} name={'PortfolioLink_1'} error={!!formErrors2.PortfolioLink_1}
                           errorMessage={formErrors2.PortfolioLink_1}
                           value={formValues2.PortfolioLink_1}
                    />

                    <Input isTextArea={false} type={'text'} label='Portfolio Link 2' placeholder='Add URL Link'
                           size='small' onChange={handleInputChange2} name={'PortfolioLink_2'} error={!!formErrors2.PortfolioLink_2}
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

                        <FileUpload vibrate={targetDivRef3} file={first} setFile={setFirst} id={'pngjpg'} label={'Drag and Drop to Upload your Valid ID card (National ID, Driver’s license, International Passport)'} allowedTypes={['image/png', 'image/jpeg']}/>

                    </div>

                    <div className={styles.randCont}>
                        <div className={styles.fileHeader}>CV/Resume</div>

                        <Input isTextArea={false} type={'text'} label='CV/Resume Name' placeholder='Circuit Design CV'
                               size='small' onChange={handleInputChange3} name={'CVName'} error={!!formErrors3.CVName}
                               errorMessage={formErrors3.CVName}
                               value={formValues3.CVName}
                        />
                        <FileUpload vibrate={targetDivRef4} setFile={setSecond} file={second} id={'pdfdocx'} label={'Drag and Drop to Upload your CV/Resume'} allowedTypes={['application/pdf']}/>

                    </div>



                    <br/>
                    <br/>
                    <div className={styles.btnCont}>
                        <ButtonII
                            label='Save'
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
                    <SuccessModal Btnlabel2={'Find Client'} Btnlabel1={'View Dashboard'} Forward={()=>{navigate('/')}} Backward={()=>{navigate('/')}} text={'Congratulations! \n' +
                        'Your profile is complete'}/>
                </div>
            }
        </div>
    );
};

export default OnBoarding;