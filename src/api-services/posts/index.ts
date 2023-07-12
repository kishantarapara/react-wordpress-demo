import axiosInstance from "../axiosInstance";

import { POST_URL } from "../../constants/requestUrl";

export const getPosts = () => axiosInstance.get(POST_URL);