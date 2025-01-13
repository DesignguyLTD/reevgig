import React from 'react';
import styles from './tagUI.module.css';

interface TagUiProps {
    isActive: boolean;
    content: string;
    onClick: () => void;
}

const TagUi: React.FC<TagUiProps> = ({isActive, content, onClick}) => {
    return (
        <div
            className={`${styles.TagContainer} ${isActive ? styles.tagActive : ''}`}
            onClick={onClick}
        >
            {content}
        </div>
    );
};

export default TagUi;