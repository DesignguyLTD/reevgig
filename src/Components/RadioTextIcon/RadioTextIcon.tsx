import React from 'react';
import radioStyle from './RadioTextIcon.module.css';

interface RadioTextIconProps {
    name: string;
    value: string;
    Icon: string;
    text1: string;
    text2: string;
    handleRadioChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedOption?: string;
}

const RadioTextIcon = ({text1, Icon, text2, name, value, selectedOption, handleRadioChange}:RadioTextIconProps) => {
    const isSelected = selectedOption === value;
    const radioContainerClass = isSelected ? `${radioStyle.RadioContainer} ${radioStyle.RadioContainerSelected}` : radioStyle.RadioContainer;
    const radioTextClass = radioStyle.RadioText;
    const radioClass = isSelected ? `${radioStyle.Radio} ${radioStyle.RadioSelected}` : radioStyle.Radio;

    return (
        <div>
            <label className={radioContainerClass}>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={isSelected}
                    onChange={handleRadioChange}
                    className={radioClass}
                />
                <div className={radioStyle.textCont}>
                    <div className={radioStyle.Icon}>
                        <img
                            src={Icon}
                            alt={`${value}-Icon`}/>
                    </div>
                    <div className={radioTextClass}>
                        {text1}
                        <br/>
                        {text2}
                    </div>
                </div>
            </label>
        </div>
    );
};

export default RadioTextIcon;