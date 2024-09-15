import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Create an Axios instance with custom configuration
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add tokens or modify request config
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Add authorization token if available
    const token = 'your-auth-token'; // Replace with a dynamic token retrieval if needed
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses globally
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can handle global response transformations here
    return response;
  },
  (error: AxiosError) => {
    // Handle global response errors
    if (error.response?.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
