import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://3.251.73.7:8080/api/', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

const tk = localStorage.getItem('REEVTK') ?? localStorage.getItem('REEVTK');

const authConfig = {
    "/user/token/": "Bearer",
    "/user/create/": "Bearer",
    "user/password-reset/": "Bearer",
    "/user/password-reset-confirm/:uidb64/token/": "Bearer",
    "user/resend_activation/": "Bearer",
    "/user/me/": "Token",
    '/user/profile/': 'Token'
    //What you need to now is to specify the endpoint that requires the apiKey or Token. Thanks
};

axiosInstance.interceptors.request.use(
    (config) => {
        const apiKey = "Api-Key XvtAppIE.RwyVYIdeZkjErNjhIwBKxZaTA5WWstJE";
        const token = tk;

        // Ensure headers exist
        config.headers = config.headers || {};
        // Loop through authConfig to find a matching endpoint
        for (const [endpoint, authType] of Object.entries(authConfig)) {
            if (config.url?.includes(endpoint)) {
                if (authType === "Bearer") {
                    config.headers.Authorization = `Bearer ${apiKey}`;
                } else if (authType === "Token") {
                    config.headers.Authorization = `Token ${token}`;
                }  else if (authType === "Both") {
                    config.headers.Authorization = `Token ${token} Bearer ${apiKey}`;
                }
                break;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle global errors here (e.g., logging, redirecting to login)
        return Promise.reject(error);
    }
);


export default axiosInstance;




