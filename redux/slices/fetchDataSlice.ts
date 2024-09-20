// redux/slices/dataSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import apiClient from '../../serviceLayer/apiClient';
//import {ProductList} from '../../productServices/productService';
import axiosInstance from '../../serviceLayer/axiosInstance';
import {Category, ProductsList} from '../../Model/ProductList'
import data from '../../localjson/products.json';

// export interface ProductList {
//     album: Album[]
//   }

export interface Album {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

// Define the initial state
const initialState = {
    data:  {} as ProductsList,
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  };
  

// Define an async thunk for API call
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  // const response = await axiosInstance.get<ProductsList>('/photos');
  const jsonData:Category[] = data.categories
  console.log('shenu reducer data',jsonData)
  return jsonData;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default dataSlice.reducer;
