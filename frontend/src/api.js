import axios from "axios";
import {ACCESS_TOKEN} from "./constants";

const runtimeConfig = globalThis.__APP_CONFIG__ ?? {};

const api = axios.create({
    baseURL : runtimeConfig.API_URL,
})

api.interceptors.request.use(
    (config)=> {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => Promise.reject(err)
)

export default api;