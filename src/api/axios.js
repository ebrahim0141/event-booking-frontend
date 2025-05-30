import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api/"


// Create an Axios instance with the base URL from .env
const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor (for authentication token if needed)
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('apiToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Add response interceptor (for handling errors globally)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;