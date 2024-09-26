// src/redux/quantitySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Category, Product} from '../../Model/ProductList';



// Define the initial state type
interface QuantityState {
  items: Product[];
}

  

// Initial state
const initialState: QuantityState = {
    items: []
}

// Create slice
const quantitySlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = quantitySlice.actions;

export default quantitySlice.reducer;
