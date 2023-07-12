import axios, { CreateAxiosDefaults } from "axios";

const AXIOS_CONFIG: CreateAxiosDefaults<any> = {
    baseURL: "https://public-api.wordpress.com",
}

const axiosInstance = axios.create(AXIOS_CONFIG);

axiosInstance.interceptors.request.use(
    // interceptors for request
    config => config,
    error => error,
);

axiosInstance.interceptors.response.use(
    // interceptors for response
    config => config,
    error => error,
)

export default axiosInstance;