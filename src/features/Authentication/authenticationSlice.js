// take care about authentication

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Reddit } from "../../utility/reddit";


//create async action
export const getAccessToken = createAsyncThunk(
  'authentication/getAccessToken', 
  async (arg, thunkAPI) => {
    const accessToken = await Reddit.getAccessToken();
    return accessToken; 
  }
);

export const getRefreshToken = createAsyncThunk(
  'authentication/getRefreshToken', 
  async (arg, thunkAPI) => {
    const accessToken = await Reddit.getRefreshToken();
    return accessToken; 
  }
);


export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    appAuth: null,
    redditApiAuth: null,
    accessToken: '',
    expireIn: null,
    permission: null,
    isLoading: false,
    hasError: false
  },
  reducers: {
    updateAppAuth: (state, action) => {
      return { ...state, appAuth: action.payload }
    },
    updateRedditApiAuth: (state, action) => {
      return { ...state, redditApiAuth: action.payload }
    }
  },
  extraReducers: {
    //acess token
    [getAccessToken.pending]: (state) => {
      return {...state, isLoading: true, hasError: false}
    },
    [getAccessToken.fulfilled]: (state, action) => {
      return {...state, isLoading: false, hasError: false, accessToken: action.payload}
    },
    [getAccessToken.rejected]: (state) => {
      return  {...state, isLoading: false, hasError: true}
    },
    //refresh token
    [getRefreshToken.pending]: (state) => {
      return {...state, isLoading: true, hasError: false}
    },
    [getRefreshToken.fulfilled]: (state, action) => {
      return {...state, isLoading: false, hasError: false, accessToken: action.payload}
    },
    [getRefreshToken.rejected]: (state) => {
      return  {...state, isLoading: false, hasError: true}
    }
    // expire token
  }
})

//export action

export const { updateAppAuth, updateRedditApiAuth } = authenticationSlice.actions;

//export reducer

export default authenticationSlice.reducer;

// export selector

export const selectAuthentication = (state) => state.authentication;

export const selectExpireIn = (state) => state.authentication.expireIn;
