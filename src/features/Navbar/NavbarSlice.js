import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Reddit } from "../../utility/reddit";

//create async action
export const identityFetch = createAsyncThunk(
  'navbar/identityFetch',
  async () => {
    const identify = await Reddit.getIdentity();

    return identify;
  }
)

export const NavbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    identity: {
      coins: null,
      name: '',
      'snoovatar_img': null,
      'total_karma': null
    },
    isLoading: true,
    hasError: false
  },
  reducers: {},
  extraReducers: {
    [identityFetch.pending]: (state) => {
      return {...state, isLoading: true, hasError: false};
    },
    [identityFetch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.identity = action.payload;
    },
    [identityFetch.rejected]: (state, action) => {
      return {...state, isLoading: false, hasError: action.error};
    }
  }
})

//selector
export const selectNavbar = (state) => {
  return state.navbar
} 

export default NavbarSlice.reducer;
