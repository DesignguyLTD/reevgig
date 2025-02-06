import axios from 'axios';

export function uploadToCloudinary(fileURI: string, fileName: string): Promise<string> {
    // Check if parameters are defined
    if (!fileURI || !fileName) {
        return Promise.reject("Missing required parameters");
    }

    // Get file data URI and name from localStorage
    const fileDataURI = fileURI;
    const fileDataName = fileName;

    // Check if file data URI and name are defined
    if (!fileDataURI || !fileDataName) {
        return Promise.reject("File data not found in localStorage");
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString(); // Format the date if needed
    const fullFileName = `${fileDataName}_${formattedDate}`; // Append current date to file name

    const formData = new FormData();
    formData.append('file', fileDataURI);
    formData.append('upload_preset', 'designguy_jarom');
    formData.append('public_id', fullFileName);
    formData.append('api_key', '377582584657773');

    return axios
        .post<{ url: string }>('https://api.cloudinary.com/v1_1/dk80ynx1w/image/upload', formData)
        .then((response) => {
            if (response.status === 200) {
                return response.data.url;
            } else {
                return Promise.reject("Failed to upload file");
            }
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject("An error occurred during file upload");
        });
}