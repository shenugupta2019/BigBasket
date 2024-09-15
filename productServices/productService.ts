import axiosInstance from '../serviceLayer/axiosInstance';
import { postRequest } from '../serviceLayer/apiClient';

export interface ProductList {
    album: Album[]
    // limit: number
    // skip: number
    // total: number
  }
  
  export interface Product {
    discountedTotal: number
    id: number
    total: number
    totalProducts: number
    totalQuantity: number
    userId: number
  }

export interface Album {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string

}

// Example API call to fetch a list of users
export const getProdcuts = async (): Promise<ProductList> => {
  try {
    const response = await axiosInstance.get<ProductList>('/photos');
    console.log('shenu data cart data is',response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Example API call to fetch a single user by ID
export const getUserById = async (id: number): Promise<Product> => {
  try {
    const response = await axiosInstance.get<Product>(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};
