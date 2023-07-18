import axios, { CreateAxiosDefaults } from "axios";

const AXIOS_CONFIG: CreateAxiosDefaults<any> = {
  baseURL: "https://public-api.wordpress.com",
};

const axiosInstance = axios.create(AXIOS_CONFIG);

axiosInstance.interceptors.request.use(
  // interceptors for request
  (config) => {
    if (
      localStorage.getItem("access_token") &&
      !(config.method === "get" && config.url?.includes("/posts"))
    ) {
      config["headers"]["Authorization"] = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;
    }

    // if (config.url?.endsWith("/posts/new")) {
    //   config["headers"]["Access-Control-Allow-Origin"] = "*";
    // }

    return config;
  },
  (error) => error
);

export default axiosInstance;
