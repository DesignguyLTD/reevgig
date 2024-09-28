import React from 'react';
import styleTwo from './RadioBtnTwo.module.css'
import style from "./radiobutton.module.css";
import Property from "@storybook/theming/dist/create-e8afafc2";


interface RadioProps{
name: string;
value: string;
selectedValue: string;
onChange: (value: string) => void;
borderRadius?: string;
border?: string;
padding?: string;
width?: string;
height?: string;
backgroundColor?: string;
color?: string;
display?: string;
justifyContent?: string;
alignItems?: string;
gap?: string;
enableSelectedStyles?: boolean;
id?: string;
subHead?: string;
}

const RadioBtnTwo  :React.FC<RadioProps> = (
    {
        subHead,
        id,
        name,
        value,
        selectedValue,
        onChange,
        borderRadius,
        border,
        padding,
        width,
        height,
        backgroundColor,
        color,
        display,
        justifyContent,
        alignItems,
        gap,
        enableSelectedStyles = false,
        ...rest
    }
) => {

    const handleChange = () => {
        if (value === selectedValue) {
            onChange("");
        } else {
            onChange(value);
        }
    };

    const isSelected = selectedValue === value;

    const appliedBackgroundColor =
        enableSelectedStyles && isSelected ? "#272727" : "#fff";

    const appliedColor =
        enableSelectedStyles && isSelected ? "#FFFFFF" : "#545A62";

    const appliedColorValue =
        enableSelectedStyles && isSelected ? "rgb(254, 194, 0)" : "rgb(39, 39, 39)";

    const appliedColorValueBD =
        enableSelectedStyles && isSelected ? "rgb(254, 194, 0) 2px solid" : "rgb(109, 109, 109)  2px solid";

    const appliedColorsubHead =
        enableSelectedStyles && isSelected ? "rgb(217, 217, 217)" : "rgb(109, 109, 109)";

    return (
        <div>
            <label
                style={{
                    flexDirection: 'row-reverse',
                    borderRadius,
                    border : appliedColorValueBD,
                    padding,
                    width,
                    height,
                    display,
                    gap,
                    justifyContent,
                    alignItems,
                    backgroundColor: appliedBackgroundColor,
                    cursor: 'pointer',
                }}
                className={style.radiobtn}>
                <div className={styleTwo.flexIt}>
                    <div>
                        <input
                            id={id}
                            className={style.input}
                            style={{border: border}}
                            type="radio"
                            name={id}
                            value={value}
                            checked={selectedValue === value}
                            onChange={handleChange}
                        />
                        <div className={style.checkmark}>{}</div>
                    </div>
                    <div style={{color: appliedColor}} className={style.value}>
                        <div style={{color: appliedColorValue}} className={styleTwo.value}> {value}</div>
                        <br/>
                        <div className={styleTwo.subHead}> {subHead}</div>
                    </div>
                </div>

            </label>
        </div>
    );
};

export default RadioBtnTwo;