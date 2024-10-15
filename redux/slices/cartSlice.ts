// src/features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../Model/ProductList';
import { Product } from '../../Model/ProductList';

interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(item => item.id === product.id);

      if (existingItem) {
        // Update quantity and total price for the existing item
        existingItem.quantity += 1;
        existingItem.totalPrice += product.price;
      } else {
        // Add new item to the cart
        state.cartItems.push({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(item => item.id === itemId);
      if (existingItem) {
        state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
