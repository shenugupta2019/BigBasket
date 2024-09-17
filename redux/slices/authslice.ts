import { createSlice, createAsyncThunk ,PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

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
    accessToken: string; // JWT Token
    refreshToken:string
    isAuthenticated:boolean
  }
  

interface AuthState {
    user: User | null;
    accessToken: string | null;
    loading: boolean;
    error: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
}

interface LoginResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string; // JWT Token
    refreshToken:string
    isAuthenticated:string
  }


const initialState: AuthState = {
    user: null,
    accessToken: null,
    loading: false,
    error: null,
    refreshToken: null,
    isAuthenticated: false,
};



// Define a thunk for handling the login process
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    console.log('the credentials shenu',credentials)
    try {
        console.log('the credentials shenu',credentials)
      const response = await axios.post<LoginResponse>('https://dummyjson.com/auth/login', credentials);

      // const loginData: LoginResponse = {
      //   user: {
      //     id: response.data.id,
      //     username: response.data.username,
      //     email: response.data.email,
      //     firstName: response.data.firstName,
      //     lastName: response.data.lastName,
      //     gender: response.data.gender,
      //     image: response.data.image,
      //   },
      //   accessToken: response.data.accessToken,
      // };
      return response;

      console.log('auth token reponse shenu',response)
      return response.data; // Adjust based on your API response
    } catch (error) {
        console.log('auth token reponse shenu error',error)
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

// Thunk to handle token refresh
export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { refreshToken } = state.auth; // Get refresh token from state

    const response = await axios.post('https://api.example.com/auth/refresh', {
      refresh_token: refreshToken,
    });
    return response.data.accessToken; // Return the new access token
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(login.fulfilled, (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
      //   state.accessToken = action.payload.accessToken;
      //   state.refreshToken = action.payload.refreshToken;
      //   state.isAuthenticated = true;
      // })
      .addCase(refreshToken.fulfilled, (state, action: PayloadAction<string>) => {
        state.accessToken = action.payload; // Update the access token
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
  

