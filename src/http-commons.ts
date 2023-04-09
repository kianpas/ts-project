import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {
    "Content-type": "application/json",
  },
});

const dogAxios: AxiosInstance = axios.create({
  baseURL: "https://dog.ceo/api",
  headers: {
    "Content-type": "application/json",
  },
});

export { apiClient, dogAxios };
