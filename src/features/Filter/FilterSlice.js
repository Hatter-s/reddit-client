import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    kind: "best"
  },
  reducers: {
    updateKind: (state, action) => {
      return { ...state, kind: action.payload }
    }
  }
});

//action
export const { updateKind } = filterSlice.actions;

//selector
export const selectKind = state => state.filter.kind;

//reducer
export default filterSlice.reducer;
