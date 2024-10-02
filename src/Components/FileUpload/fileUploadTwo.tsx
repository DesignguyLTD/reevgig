// FileUploadTwo.tsx
import React, {ChangeEvent, DragEvent, useState} from "react";
import styles from "./fileUpload.module.css";
import stylesTwo from "./fileUploadTwo.module.css";

// Export the UploadedFile interface
export interface UploadedFile {
    id: string;
    name: string;
    src: string;
}

interface FileUploadProps {
    files: UploadedFile[]; // Changed from `file` to `files`
    setFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>; // Changed from `setFile` to `setFiles`
    allowedTypes: string[];
    id: string;
    label?: string;
    vibrate?: React.RefObject<HTMLDivElement>;
    text?: string;
    src?: string;
    placeholder?: string;
    width?: string;
}

const FileUploadTwo: React.FC<FileUploadProps> = ({
                                                      vibrate,
                                                      allowedTypes = ["image/png", "image/jpeg"], // Default allowed types
                                                      id,
                                                      placeholder,
                                                      width,
                                                      files,
                                                      text = "Attach File",
                                                      src = "https://res.cloudinary.com/do5wu6ikf/image/upload/v1727455543/Reev/27th%20Sept%202024/Upload_icon_pxi3l0.svg",
                                                      setFiles,
                                                  }) => {
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            const filesArray = Array.from(selectedFiles);
            if (files.length + filesArray.length > 3) {
                setError("You can upload a maximum of 3 files.");
                return;
            }
            validateFiles(filesArray);
        }
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
        const selectedFiles = event.dataTransfer.files;
        if (selectedFiles) {
            const filesArray = Array.from(selectedFiles);
            if (files.length + filesArray.length > 3) {
                setError("You can upload a maximum of 3 files.");
                return;
            }
            validateFiles(filesArray);
        }
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => setIsDragging(false);

    const validateFiles = (filesToValidate: File[]) => {
        setLoading(true);
        setError("");

        const validFiles: UploadedFile[] = [];
        const invalidFiles: string[] = [];

        let processedFiles = 0;

        filesToValidate.forEach((file) => {
            if (!allowedTypes.includes(file.type)) {
                invalidFiles.push(`${file.name} has unsupported format.`);
                processedFiles++;
                if (processedFiles === filesToValidate.length) {
                    finalizeValidation(validFiles, invalidFiles);
                }
            } else if (file.size > 1024 * 1024) { // 1MB
                invalidFiles.push(`${file.name} exceeds the 1MB size limit.`);
                processedFiles++;
                if (processedFiles === filesToValidate.length) {
                    finalizeValidation(validFiles, invalidFiles);
                }
            } else {
                const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "");
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (reader.result) {
                        validFiles.push({
                            id: `${Date.now()}-${Math.random()}`,
                            name: sanitizedFileName,
                            src: reader.result as string,
                        });
                    }
                    processedFiles++;
                    if (processedFiles === filesToValidate.length) {
                        finalizeValidation(validFiles, invalidFiles);
                    }
                };
                reader.readAsDataURL(file);
            }
        });

        // Handle the case where all files are invalid
        if (filesToValidate.length === 0) {
            setLoading(false);
        }
    };

    const finalizeValidation = (validFiles: UploadedFile[], invalidFiles: string[]) => {
        if (validFiles.length > 0) {
            setFiles((prevFiles) => [...prevFiles, ...validFiles]);
        }
        if (invalidFiles.length > 0) {
            setError(invalidFiles.join(" "));
        }
        setLoading(false);
    };

    const removeFile = (id: string) => {
        setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    };

    const truncateFileName = (name: string, maxLength: number) =>
        name.length <= maxLength ? name : `${name.slice(0, maxLength)}...`;

    return (
        <div
            ref={vibrate}
            className={`${stylesTwo.overallContainer} ${isDragging ? stylesTwo.dragging : ""}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
        >
            <div>
                <label htmlFor={id} className={stylesTwo.inputComponent} style={{width}}>
                    <div className={stylesTwo.labelStyle}>
                        <img src={src} alt="Attach file icon"/>
                        <div className={stylesTwo.filetextCont}>
                            <div className={stylesTwo.filetext1}>
                                Drag & drop files or <span>Browse</span>
                            </div>
                            <div className={stylesTwo.filetext2}>
                                Supported formats: JPEG, PNG. Max 3 files.
                            </div>
                        </div>
                    </div>
                </label>
                <input
                    id={id}
                    className={stylesTwo.input}
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    placeholder={placeholder}
                    accept=".png, .jpeg, .jpg"
                />
                {loading && <p>Loading...</p>}
            </div>

            {files.length > 0 && (
                <div className={styles.fileUploadedCont}>
                    <div className={styles.ThumbHeaderText}>Uploaded Images</div>
                    <div className={styles.ThumbSubText}>Thumbnail</div>
                    <div className={styles.fileUploadedThumbnailCont}>
                        {files.map((file) => (
                            <div key={file.id} className={styles.fileItem}>
                                <img src={file.src} alt={file.name}
                                     className={styles.fileThumbnail}/>
                                {/*<p className={styles.fileName}>{truncateFileName(file.name, 20)}</p>*/}
                                <img
                                    onClick={() => removeFile(file.id)}
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1721834248/Reev/close_2_lu7wkf.svg"
                                    alt="Remove file"
                                    className={styles.removeIcon}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

export default FileUploadTwo;
