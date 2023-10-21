import axios from "axios";
// import { AuthResponse, ITokens } from "../models/response/AuthResponse";

export const API_URL : string = 'http://localhost:8080/api';

const $api = axios.create({
    withCredentials:true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
});



export default $api;