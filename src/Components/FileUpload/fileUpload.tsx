import React, { useState, ChangeEvent, DragEvent } from 'react';
import styles from './fileUpload.module.css';

interface FileUploadProps {
    allowedTypes: string[];
    id: string,
    label?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ allowedTypes, id , label}) => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setLoading(true);
            validateFile(selectedFile);
        }
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
        const selectedFile = event.dataTransfer.files?.[0];
        if (selectedFile) {
            setLoading(true);
            validateFile(selectedFile);
        }
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const validateFile = (file: File) => {
        const maxSize = 1024 * 1024; // 1MB in bytes
        setLoading(true);

        if (!allowedTypes.includes(file.type)) {
            setError(`File should be in ${allowedTypes.join(', ')} format.`);
            setFile(null);
        } else if (file.size > maxSize) {
            setError('File should not be more than 1MB.');
            setFile(null);
        } else {
            setError('');
            setFile(file);
        }

        setLoading(false);
    };

    const removeFile = () => {
        setFile(null);
        setError('');
    };

    const truncateFileName = (name: string, maxLength: number) => {
        if (name.length <= maxLength) return name;
        return name.slice(0, maxLength) + '...';
    };

    const fileTypeMap: { [key: string]: string } = {
        'image/png': 'PNG',
        'image/jpeg': 'JPG',
        'application/pdf': 'PDF'
    };

    const filteredTypes = allowedTypes
        .filter(type => Object.keys(fileTypeMap).includes(type))
        .map(type => fileTypeMap[type]);

    return (
        <div
            className={`${styles.fileContainer} ${isDragging ? styles.dragging : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
        >
            {file ? (
                <></>)
                :
                (<div>
                    <label   htmlFor={id} className={styles.inputComponent} >
                        Attach File
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1721834248/Reev/Vector_qchl7c.svg" alt="Attach file icon"/>
                    </label>
                    <input
                        id={id}
                        className={styles.input}
                        type="file"
                        onChange={handleFileChange}
                    />
                    <p className={styles.firstText}>{label ? label :'Drag and Drop to Upload your Valid ID card (National ID, Driver’s license, International Passport)'}</p>
                    {loading && <p>Loading...</p>}
                </div>)
            }

            {file && <div className={styles.fileUploadedCont}>
                <p className={styles.fileUploaded}>{truncateFileName(file.name, 30)} <img onClick={removeFile} src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1721834248/Reev/close_2_lu7wkf.svg" alt="close"/></p>
                <div className={styles.yellowunderline}></div>
            </div>}
            <div className={styles.secText}>File should be in {filteredTypes.join(', ')} format and not more than 5mb</div>

            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

export default FileUpload;

