import axiosInstance from "../helpers/axios";

export const fetchProjectData = async () => {
    try {
        const response = await axiosInstance.get('/projects/projects/'); // Endpoint to fetch data
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Project data');
    }
};



export const postProjectData = async (data: any) => {
    try {
        const response = await axiosInstance.post('/projects/projects/', data); // Endpoint to fetch data
        return response.data;
    } catch (error) {
        throw new Error('Error Posting Project data');
    }
};
