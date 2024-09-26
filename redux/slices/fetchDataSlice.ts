// redux/slices/dataSlice.ts
import { createSlice, createAsyncThunk ,PayloadAction} from '@reduxjs/toolkit';
//import apiClient from '../../serviceLayer/apiClient';
//import {ProductList} from '../../productServices/productService';
import axiosInstance from '../../serviceLayer/axiosInstance';
import { Product} from '../../Model/ProductList'
import data from '../../localjson/productsList.json';

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


interface Category {
  id: string;
  name: string;
  products: Product[];
}

interface ProductsList {
  categories: Category[];  // Ensure categories is an array
}


// Define the InitialState interface, which includes ProductsList
interface InitialState {
  data: ProductsList;
  status: string;
  error: null | string;
}


// Define the initial state
const initialState:ProductsList = {
  categories: data.categories
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
  reducers: {   incrementQuantity: (state, action: PayloadAction<{ categoryId: string; productId: string; }>) => {
    console.log('shenu gupta add redux 443r33e3 data',state.categories)
    const { categoryId, productId} = action.payload;
    console.log('shenu item found after updating categoryId',categoryId)
    // Find the category by its ID
    const category = state.categories.find((cat) => cat.id === categoryId);
    if (category) {
      // Find the product within the category by its ID
      const product = category.products.find((prod) => prod.id === productId);
      if (product) {
        // Update the product quantity
        product.qty+= 1;
        console.log('shenu item found after updating',product)
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
  decrementQuantity: (state, action: PayloadAction<{ categoryId: string; productId: string; qty: number }>) => {
    const item = state.data.products.find(item => item.id === action.payload);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    }
  },
},
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

export const { incrementQuantity, decrementQuantity } = dataSlice.actions;

// Export the reducer
export default dataSlice.reducer;
