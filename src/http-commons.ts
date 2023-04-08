import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {
    "Content-type": "application/json",
  },
});

const catAxios: AxiosInstance = axios.create({
  baseURL: "https://catfact.ninja/",
  headers: {
    "Content-type": "application/json",
  },
});

export { apiClient, catAxios };
