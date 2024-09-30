// redux/slices/dataSlice.ts
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
//import apiClient from '../../serviceLayer/apiClient';
//import {ProductList} from '../../productServices/productService';
import axiosInstance from '../../serviceLayer/axiosInstance';
import {Product} from '../../Model/ProductList';
import data from '../../localjson/productsList.json';
import axios from 'axios';

interface Category {
  id: string;
  name: string;
  products: Product[];
}

interface ProductsList {
  categories: Category[]; // Ensure categories is an array
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: ProductsList = {
  categories: data.categories,
  loading: false,
  error: null,
};

// Define an async thunk for API call
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  // const response = await axiosInstance.get<ProductsList>('/photos');
  const jsonData: Category[] = data.categories;
  console.log('shenu reducer data', jsonData);
  return jsonData;
});

// Async thunk to fetch a product
export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (_, {rejectWithValue}) => {
    try {
      // const response = await axiosInstance.get<ProductsList>('/photos');
      const jsonData: Category[] = data.categories;
      console.log('shenu reducer data', jsonData);
      return jsonData;
    } catch (error) {
      // Type narrowing
      if (axios.isAxiosError(error)) {
        // Axios error with response
        return rejectWithValue(error.response?.data || error.message);
      } else if (error instanceof Error) {
        // Generic error
        return rejectWithValue(error.message);
      } else {
        // Fallback in case it's some unknown type
        return rejectWithValue('An unknown error occurred');
      }
    }
  },
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    incrementQuantity: (
      state,
      action: PayloadAction<{categoryId: string; productId: string}>,
    ) => {
      console.log('shenu gupta add redux 443r33e3 data', state.categories);
      const {categoryId, productId} = action.payload;
      console.log('shenu item found after updating categoryId', categoryId);
      // Find the category by its ID
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        // Find the product within the category by its ID
        const product = category.products.find(prod => prod.id === productId);
        if (product) {
          // Update the product quantity
          product.qty += 1;
          console.log('shenu item found after updating', product);
        }
      }

      // for (const category of state.data) {
      //   const foundProduct = category.products.find(product => product.id === action.payload);
      //   if (foundProduct) {
      //     console.log('shenu item found',foundProduct)
      //     foundProduct.qty += 1;
      //     console.log('shenu item found after updating',foundProduct)
      //   }
      // }
      // const item = state.data.products.find(item => item.id === action.payload);

      // if (item) {
      //   item.quantity += 1;
      // }
    },
    decrementQuantity: (
      state,
      action: PayloadAction<{
        categoryId: string;
        productId: string;
        qty: number;
      }>,
    ) => {
      const item = state.data.products.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null; // Cast to string | null
      });
  },
});

export const {incrementQuantity, decrementQuantity} = dataSlice.actions;

// Export the reducer
export default dataSlice.reducer;
