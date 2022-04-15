import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Reddit } from "../../../utility/reddit";

export const getInfo = createAsyncThunk("subredditPage/getInfo", async ( subredditFullName ) => {
  const result = await Reddit.info(subredditFullName).then(data => {
    const subredditValue = data.data.children[0].data;

    return {
      name: subredditValue.title,
      timeCreate: subredditValue['created_utc'],
      description: subredditValue["description_html"],
    }
  });
  return result
});

export const SubredditPageSlice = createSlice({
  name: "subredditPage",
  initialState : {
    isLoading: false,
    error: false,
    subreddit: {
      name: "",
      timeCreate: null,
      description: "",
    }
  },
  extraReducers : {
    [getInfo.pending] : (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getInfo.fulfilled] : (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.subreddit = action.payload;
    },
    [getInfo.rejected] : (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    }
  }
});

//action

//select
export const selectSubredditPage = (state) => state.subredditPage;

export const selectSubredditName = (state) => state.subredditPage.subreddit.name;

//reducer

export default SubredditPageSlice.reducer;

