// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Example slice

// Set up the Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add more reducers here
  },
});

// Types for TypeScript (optional)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
