import axiosInstance from "../axiosInstance";

import {
  NEW_POST_URL,
  POST_URL,
  SETTINGS_URL,
} from "../../constants/requestUrl";

export const getPosts = () => axiosInstance.get(POST_URL);

export const getPostById = (id?: string) =>
  axiosInstance.get(`${POST_URL}/${id}`);

export const createPost = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return axiosInstance.post(`${NEW_POST_URL}`, { title, content });
};

export const getSettings = () => axiosInstance.get(SETTINGS_URL);
