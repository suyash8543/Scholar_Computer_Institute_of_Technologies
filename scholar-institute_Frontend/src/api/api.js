import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001/api"
    // Change this to your backend URL
});
console.log("API Base URL:", api.defaults.baseURL);
export default api;