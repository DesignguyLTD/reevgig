import React, {useState} from 'react';
import styles from './tagInputs.module.css';

interface TagInputProps {
    tags: string[];
    setTags: React.Dispatch<React.SetStateAction<string[]>>;
    recommendedTags: string[];
    maxTags?: number;
    placeholder?: string;
    label: string;
    error?: boolean;
    errorMessage?: string;
}

const TagInput: React.FC<TagInputProps> = ({
                                               error,
                                               errorMessage,
                                               label,
                                               tags,
                                               setTags,
                                               recommendedTags,
                                               maxTags = 5,
                                               placeholder = "Enter Your Language"
                                           }) => {

    const [inputValue, setInputValue] = useState<string>('');

    const addTag = (tag: string) => {
        if (tag && !tags.includes(tag) && tags.length < maxTags) {
            setTags([...tags, tag]);
        }
    };

    const removeTag = (tag: string) => {
        setTags(tags.filter(t => t !== tag));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && inputValue.trim()) {
            addTag(inputValue.trim());
            setInputValue('');
        }
    };

    const handleTagClick = (tag: string) => {
        addTag(tag);
    };

    return (
        <div className={styles.tagInput}>
            <div className={styles.tagInputTitle}>
                <div style={{color: error ? 'red' : ''}}>{label}</div>
            </div>
            <div className={styles.tags} style={{border: error ? 'red 1px solid' : ''}}>


                {tags.map((tag, index) => (
                    <div key={index} className={styles.tag}>
                        {tag}
                        <button onClick={() => removeTag(tag)}>
                            <img
                                src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1721834248/Reev/Vector_close_gvi0ib.svg"
                                alt="close"/>
                        </button>
                    </div>
                ))}

                {tags.length < maxTags &&
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        placeholder={placeholder}
                    />
                }
            </div>
            <div className={styles.error}>
                {error && <span>{errorMessage}</span>}
            </div>

            <div className={styles.recommendedTags}>
                <div className={styles.recText}>Recommended tags:</div>
                <div className={styles.recommendedTags}>
                    {recommendedTags.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => handleTagClick(tag)}
                            className={styles.tagInactive}
                        >
                            {tag} <img style={{marginLeft: '5px'}}
                                       src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1721834248/Reev/add_rp8vwy.svg"
                                       alt="plus"/>
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default TagInput;
