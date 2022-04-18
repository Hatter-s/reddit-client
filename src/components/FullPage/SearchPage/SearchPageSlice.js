import { createSlice } from "@reduxjs/toolkit";

export const SearchPageSlice = createSlice({
  name: "searchPage",
  initialState: {
    isLoading: false,
    error: null,
    searchData: {
      limit: "25",
      term: "",
      sort: "relevance",
      subreddit: ""
    }
  },
  reducers: {
    changeLimit: (state, action) => {
      return { ...state, searchData: { ...state.searchData, limit: action.payload } }
    },

    changeSort: (state, action) => {
      return { ...state, searchData: { ...state.searchData, sort: action.payload } }
    },

    changeSubreddit: (state, action) => {
      return { ...state, searchData: { ...state.searchData, subreddit: action.payload } }
    },

    changeTerm: (state, action) => {
      return { ...state, searchData: { ...state.searchData, term: action.payload }}
    }
  }
}) 

//action
export const { changeLimit, changeSort, changeSubreddit, changeTerm } = SearchPageSlice.actions;

//select
export const selectSearchData = state => state.searchPage.searchData;

//reducer
export default SearchPageSlice.reducer;
