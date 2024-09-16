// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Example slice
import dataReducer from './slices/fetchDataSlice';
import authReducer from './slices/authslice';

// Set up the Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer, // Add more reducers here
    auth: authReducer,
  },
});

// Types for TypeScript (optional)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
