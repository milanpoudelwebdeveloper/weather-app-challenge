import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

console.log("the base url is: ", import.meta.env.VITE_API_BASE_URL);
console.log("the apu key is: ", import.meta.env.VITE_API_KEY);
