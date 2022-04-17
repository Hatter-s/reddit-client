import { createSlice } from "@reduxjs/toolkit";

export const utilitySlice = createSlice ({
  name: "utility",
  initialState: {
    path: "/"
  },
  reducers: {
    changePath: (state, action) => {
      return { ...state, path: action.payload }
    }
  }
})

//action
export const { changePath } = utilitySlice.actions;

//select
export const selectPath = state => state.utility.path;

//reducer
export default utilitySlice.reducer;
