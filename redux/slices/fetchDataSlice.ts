// redux/slices/dataSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import apiClient from '../../serviceLayer/apiClient';
//import {ProductList} from '../../productServices/productService';
import axiosInstance from '../../serviceLayer/axiosInstance';

export interface ProductList {
    album: Album[]
  }


export interface Album {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string

}

// Define the initial state
const initialState = {
    data:  {} as ProductList,
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  };
  

// Define an async thunk for API call
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axiosInstance.get<ProductList>('/photos');
  console.log('shenu reducer data',response)
  return response.data;
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
