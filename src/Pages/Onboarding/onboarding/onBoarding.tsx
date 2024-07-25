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

const OnBoarding = () => {
    let navigate = useNavigate();
    const UserType = localStorage.getItem('userType') ? localStorage.getItem('userType') :  'Client';
    const [stage, setStage] = React.useState(1);
    const [doneStage, setDoneStage] = React.useState({stage1: false, stage2: false, stage3: false});
    const [avatar, setAvatar] = useState<string>("https://res.cloudinary.com/do5wu6ikf/image/upload/v1721847923/Reev/Avatar09fff_wn6wgf.svg");
    const tagData = [
        { isActive: false, content: 'Hardware' },
        { isActive: false, content: 'Simulation' },
        { isActive: false, content: 'Robotics/Embedded' },
        { isActive: false, content: 'Consultancy' },
        { isActive: false, content: 'IoT Devices' },
        { isActive: false, content: 'Circuit Design' },
        { isActive: false, content: 'PCB Design' },
        { isActive: false, content: 'Prototyping' },
        { isActive: false, content: '3D Printing' },
        { isActive: false, content: 'FPGA Development' },
        { isActive: false, content: 'Sensor Integration' },
        { isActive: false, content: 'Automotive Electronics' },
        { isActive: false, content: 'Industrial Automation' },
        { isActive: false, content: 'Power Electronics' },
        { isActive: false, content: 'Embedded Software' },
        { isActive: false, content: 'Networking Hardware' },
    ];



    const [tags, setTags] = useState(() => {
        const savedTags = localStorage.getItem('ClientSkillTags');
        return savedTags ? JSON.parse(savedTags) : tagData;
    });

    const targetDivRef = useRef<HTMLDivElement>(null);
    const targetDivRef2 = useRef<HTMLDivElement>(null);
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
        if(stage !== 4) {
            if(stage===2){
                const isTagValid = areAtLeastThreeTagsActive(tags);
                // console.log(isTagValid, 'isTagValid')
                if(!isTagValid){
                    VibrateDiv2();
                }else{
                    setStage(stage + 1);
                    handleDone()
                }
            }else {
                if(stage===3 && UserType === 'Freelancer'){
                    setStage(stage + 1);
                    handleDone()
                } else {
                    setStage(stage + 1);
                }
            }
        }
    }

    const handleDone = () => {
        setDoneStage(prevState => ({...prevState, [`stage${stage}`]: true}));
    }

    const handleBack = () => {
        setStage(stage - 1);
    }

    const [countryCode, setCountryCode] = useState('+234');

useEffect(() => {
    const storedCountryCode = localStorage.getItem('countryCode');
    if (storedCountryCode) {
        setCountryCode(storedCountryCode);
    }
}, []);

    interface FormValues {
        DisplayName: string;
        State: string;
        City: string;
        ContactNumber: string;
        countryCode: string;
        avater: string;
    }

    const defaultFormValues :FormValues = {
        DisplayName: '',
        State: '',
        City: '',
        ContactNumber: '',
        countryCode: countryCode,
        avater: avatar,
    };

    const [formValues, setFormValues] = useState<FormValues>(() => {
        const savedFormValues = localStorage.getItem('onboardingForm');
        return savedFormValues ? JSON.parse(savedFormValues) : defaultFormValues;
    });



    localStorage.setItem('onboardingForm', JSON.stringify(formValues));

    const [formErrors, setFormErrors] = useState({
        DisplayName: '',
        State: '',
        City: '',
        ContactNumber: '',
        avater: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormValues({
            ...formValues,
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


    const validateForm = () => {
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



    const handleStage1 = () => {
    const isFormValid = true;
    if(isFormValid){

        setStage(1)

    }
}

    const handleStage2 = () => {
        const isFormValid = validateForm();
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
        const isFormValid = validateForm();

        if (isFormValid) {
            console.log(formValues)
            handleNext()
            handleDone()
        }
    };


    const [compressedSize, setCompressedSize] = useState<number | null>(null);

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
                    <SuccessModal Forward={()=>{navigate('/')}} Backward={()=>{navigate('/')}} text={'Congratulations! \n' +
                        'Your profile is complete'}/>
                </div>
            }

            {/* Freelancer*/}

            {(stage === 2 && UserType === 'Freelancer') &&
                <div className={styles.headerText}>
                    <br/>
                    <h1> Freelancer Stage 2</h1>
                    <div className={styles.btnCont}>
                        <ButtonII
                            label='Next'
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
                <div className={styles.headerText}>
                    <br/>
                    <h1> Freelancer Stage 3</h1>
                    <div className={styles.btnCont}>
                        <ButtonII
                            label='Next'
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
                    <SuccessModal Forward={()=>{navigate('/')}} Backward={()=>{navigate('/')}} text={'Congratulations! \n' +
                        'Your profile is complete'}/>
                </div>
            }
        </div>
    );
};

export default OnBoarding;