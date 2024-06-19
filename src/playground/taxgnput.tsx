import React, { useState } from 'react';
import './App.css';

const TagInput: React.FC = () => {
    const [tags, setTags] = useState<string[]>(['English', 'French']);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && inputValue) {
            if (!tags.includes(inputValue)) {
                setTags([...tags, inputValue]);
            }
            setInputValue('');
            event.preventDefault();
        }
    };

    const handleDelete = (tagToDelete: string) => {
        setTags(tags.filter(tag => tag !== tagToDelete));
    };

    return (
            <div className="App">
                <div style={{ display: 'flex', flexWrap: 'wrap', border: '1px solid #ccc', padding: '5px', borderRadius: '4px' }}>
                    {tags.map((tag, index) => (
                        <div key={index} style={{ margin: '5px', display: 'flex', alignItems: 'center', background: '#e0e0e0', padding: '5px', borderRadius: '3px' }}>
                            {tag}
                            <span style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={() => handleDelete(tag)}>
                                x
                            </span>
                        </div>
                    ))}
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Add language"
                        style={{ border: 'none', outline: 'none', flex: '1', minWidth: '100px' }}
                    />
                </div>
            </div>
    );
}

export default TagInput;
