import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://3.251.73.7:8080/api/', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.defaults.headers.common.Authorization = 'Bearer Api-Key XvtAppIE.RwyVYIdeZkjErNjhIwBKxZaTA5WWstJE';

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle global errors here (e.g., logging, redirecting to login)
        return Promise.reject(error);
    }
);

export default axiosInstance;
