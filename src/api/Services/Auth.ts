import axiosInstance from "../helpers/axios";

export const fetchData = async () => {
    try {
        const response = await axiosInstance.get('/user/me/'); // Endpoint to fetch data
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user data');
    }
};

export const PatchData = async (data: any) => {
    try {
        const response = await axiosInstance.patch('/user/me/', data); // Endpoint to fetch data
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user data');
    }
};

export const fetchProfileData = async () => {
    try {
        const response = await axiosInstance.get('/user/profile/'); // Endpoint to fetch data
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user data');
    }
};

export const postProfileData = async (data: any) => {
    try {
        const response = await axiosInstance.post('/user/profile/', data); // Endpoint to fetch data
        return response.data;
    } catch (error) {
        throw new Error('Error creating data');
    }
};


export const patchProfileData = async (data: any) => {
    try {
        const response = await axiosInstance.patch('/user/profile/', data); // Endpoint to fetch data
        return response.data;
    } catch (error) {
        throw new Error('Error editing data');
    }
};



export const createData = async (data: any) => {
    try {
        const response = await axiosInstance.post('/user/create/', data); // Endpoint for creating data
        return response.data;
    } catch (error) {
        throw new Error('Error creating data');
    }
}



export const userLogin = async (data: any) => {
    try {
        const response = await axiosInstance.post('/user/token/', data); // Endpoint for creating data
        return response.data;
    } catch (error) {
        throw new Error('Error logging in');
    }
};

export const userReset = async (data: any) => {
    try {
        const response = await axiosInstance.post('/user/password-reset/', data); // Endpoint for creating data
        return response.data;
    } catch (error) {
        throw new Error('Error Resetting');
    }
};

export const userConfirmReset = async (data: { token: string; uidb64: string; dataP: {} }) => {
    try {
        // Construct the URL dynamically using template literals
        const url = `/user/password-reset-confirm/${data.token}/${data.uidb64}`;

        // Make the POST request
        const response = await axiosInstance.post(url,
            data.dataP, // Include other data in the request body
        );

        return response.data;
    } catch (error) {
        throw new Error('Error Resetting Password');
    }
};