// utils/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor (e.g., add token)
api.interceptors.request.use(
  (config) => {
    // Modify request config if needed
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors
    console.error(error);
    return Promise.reject(error);
  }
);

export default api;
