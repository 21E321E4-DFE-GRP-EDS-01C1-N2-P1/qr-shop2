import axiosInstance from "./axios";
// import { getTokenLocalStorage } from "../utils/localstorage/tokenStorage";

function login(email, password) {
  return axiosInstance.post("/auth/login", { email, password });
}

function register(user) {
  return axiosInstance.post("/auth/register", user);
}

// function getAuthFromToken() {
//   const xToken = getTokenLocalStorage();
//   if (!xToken) {
//     return Promise.resolve();
//   }
//   return api.get("/auth/tokenInfo");
// }

const authService = {
  login,
  register,
  //   getAuthFromToken,
};

export default authService;
