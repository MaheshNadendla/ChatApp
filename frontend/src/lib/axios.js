import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapp-backend-pp2d.onrender.com/api",
  withCredentials: true,
});