import axiosInstance from "../helpers/axios";

export const fetchData = async () => {
    try {
        const response = await axiosInstance.get('/data'); // Endpoint to fetch data
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
};


export const createData = async (data: any) => {
    try {
        const response = await axiosInstance.post('/create', data); // Endpoint for creating data
        return response.data;
    } catch (error) {
        throw new Error('Error creating data');
    }
};
