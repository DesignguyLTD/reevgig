import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import styles from './onBoarding.module.css';
import Input from "../../../stories/FieldInput-I/input";
import Dropdown from "../../../stories/OtherInputsType/dropdown/dropdown";
import PhoneInput from "../../../stories/OtherInputsType/PhoneInput/PhoneInput";
import {ButtonII} from "../../../stories/Button-II/ButtonII";
import {states} from "./state";
import {cities} from "./city";
const OnBoarding = () => {
    const [stage, setStage] = React.useState(1);
    const [doneStage, setDoneStage] = React.useState({stage1: false, stage2: false, stage3: false});
    const [avatar, setAvatar] = useState<string>("https://res.cloudinary.com/do5wu6ikf/image/upload/v1721847923/Reev/Avatar09fff_wn6wgf.svg");


    const targetDivRef = useRef<HTMLDivElement>(null);

    const scrollToDiv = () => {
        if (targetDivRef.current) {
            targetDivRef.current.classList.add(styles.shake);
            setTimeout(() => {
                targetDivRef.current?.classList.remove(styles.shake);
            }, 500); // Duration of the shake animation
        }
    };
    const handleNext = () => {
        if(stage !== 3) {
            setStage(stage + 1);
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


    const [formValues, setFormValues] = useState({
        DisplayName: '',
        State: '',
        City: '',
        ContactNumber: '',
        countryCode: countryCode,
        avater: avatar
    } || JSON.parse(localStorage.getItem('onboardingForm') || '{}'));



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

    const handleDropdown = (option: any) => {
        setFormValues(prevState => ({
            ...prevState,
            State: option.value,
            City: option.value
        }));
    }


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
            scrollToDiv()
            // setStage(2)

        }
    }


    const handleStage3 = () => {
        const isFormValid = true;
        if(isFormValid){
            setStage(3)

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
            const maxSize = 1 * 1024 * 1024; // 1 MB
            if (file.size > maxSize) {
                compressImage(file).then(({ compressedImage, size }) => {
                    setAvatar(compressedImage);
                    setCompressedSize(size);
                    console.log(compressedSize, file.size/1024/1024)

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
                        const quality = 0.6; // Adjust quality (0.0 to 1.0)
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


    return (
        <div className={styles.container}>
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
                <div className={styles.line} style={{visibility: stage === 3  ? 'visible' :  doneStage.stage2 ? 'visible' : 'hidden'}}></div>
                <div
                    className={styles.circle}
                    style={{background: stage === 3 ? '#404145' : doneStage.stage3 ? '#404145' : '' , color: doneStage.stage3 ? '#fec200' : ''  }}
                    onClick={handleStage3}
                >
                    {doneStage.stage3 ? '✔' : '3'}
                </div>
            </div>
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

            {stage === 2 &&
               <div>
                   <h1>Stage 2</h1>
                   <button onClick={handleNext}>Next</button>
                   <button onClick={handleBack}>Back</button>
                   <div onClick={handleDone}>done</div>

               </div>
            }

            {stage === 3 &&
                <div>
                    <h1>Stage 3</h1>
                    <button onClick={handleNext}>Next</button>
                    <button onClick={handleBack}>Back</button>
                    <div onClick={handleDone}>done</div>

                </div>
            }
        </div>
    );
};

export default OnBoarding;