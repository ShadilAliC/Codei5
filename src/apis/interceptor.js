import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});


let token = localStorage.getItem("AccessToken");
console.log(token,'sss');

instance.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";
console.log(instance.defaults.headers.common["Authorization"],'sssssssssssssssssssssssssss');

instance.defaults.headers.post["Content-Type"] = "application/json";

instance.interceptors.request.use(
  (request) => {
    console.log("Request interceptor - Start:", request);
    return request;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("responseerror",error);
    
    return Promise.reject(error);
  }
);


export default instance;