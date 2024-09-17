import axios from 'axios';
import { store } from '../redux/store'; // Import Redux store
import { refreshToken } from '../redux/slices/authslice'; // Action to refresh token

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your base URL
});

// Add request interceptor to include the access token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.accessToken; // Get access token from Redux store
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration
axiosInstance.interceptors.response.use(
  (response) => response, // If the response is fine, return it
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Dispatch the refresh token action to Redux
        const newToken = await store.dispatch(refreshToken()).unwrap();

        // Update the Authorization header with the new token
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

        // Retry the original request with the new token
        return axiosInstance(originalRequest);
      } catch (error) {
        // Handle refresh token failure (logout the user, etc.)
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

