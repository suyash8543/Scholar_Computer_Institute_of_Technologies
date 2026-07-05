import axios from "axios";

const api = axios.create({
    baseURL: "https://scholar-computer-institute-of-oox1.onrender.com/api"
});

console.log("API Base URL:", api.defaults.baseURL);

export default api;