import React from 'react';
import FileStyle from './FileDisplay.module.css';

const FileDisplay = () => {
    return (
        <div className={FileStyle.cont}>
            <img
                src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1731883901/Reev/17th%20Nov/uil_file-alt_ubrbew.svg"
                alt="File"/>
            <div>
                <div className={FileStyle.headerText}>Hardware Circiut</div>
                <div className={FileStyle.subText}>3.5mb</div>
            </div>
            {/*<img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/entypo_dots-three-vertical_nfqlzb.svg" alt="menu"/>*/}
        </div>
    );
};

export default FileDisplay;