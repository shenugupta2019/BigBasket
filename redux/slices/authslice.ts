import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
  }
  

  interface LoginResponse {
    user: User;
    token: string; // JWT Token
  }
  

interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

interface LoginResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string; // JWT Token
  }


const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};



// Define a thunk for handling the login process
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    console.log('the credentials shenu',credentials)
    try {
        console.log('the credentials shenu',credentials)
      const response = await axios.post<LoginResponse>('https://dummyjson.com/auth/login', credentials);

      const loginData: LoginResponse = {
        user: {
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          gender: response.data.gender,
          image: response.data.image,
        },
        token: response.data.token,
      };
      return loginData;

      console.log('auth token reponse shenu',response)
      return response.data; // Adjust based on your API response
    } catch (error) {
        console.log('auth token reponse shenu error',error)
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logout: (state) => {
        state.user = null;
        state.token = null;
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.user; // Store user details
          state.token = action.payload.token; // Store the token
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
  
  export const { logout } = authSlice.actions;
  export default authSlice.reducer;
  
