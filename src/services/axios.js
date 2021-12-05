import axios from "axios";
import {
  // clearLocalStorage,
  getTokenLocalStorage,
} from "../localstorage/tokenStorage";
import { backendUrl } from "../../appConfig";

const axiosInstante = axios.create({
  baseURL: backendUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstante.interceptors.request.use(function (config) {
  let xToken = getTokenLocalStorage();
  if (xToken) {
    config.headers.Authorization = xToken;
  }
  return config;
});

axiosInstante.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.message === "Network Error") {
      return alert(
        "Erro conectando ao servidor: " + error.toJSON().config.baseURL
      );
    }

    const xApiError = error?.response?.data;
    //If its a token error
    if (xApiError?.status === 401) {
      alert("Erro de token");
    }

    return Promise.reject(xApiError);
  }
);

export default axiosInstante;
