// apiClient.ts
import axiosInstance from './axiosInstance';

export const postRequest = async (url: string, data: any, config = {}) => {
  try {
    const response = await axiosInstance.post(url, data, config);
    return response.data;
  } catch (error) {
    throw error; // You can customize error handling here
  }
};

export const deleteRequest = async (url: string, config = {}) => {
  try {
    const response = await axiosInstance.delete(url, config);
    return response.data;
  } catch (error) {
    throw error; // You can customize error handling here
  }
};

export const putRequest = async (url: string, data: any, config = {}) => {
  try {
    const response = await axiosInstance.put(url, data, config);
    return response.data;
  } catch (error) {
    throw error; // You can customize error handling here
  }
};
