import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Reddit } from "../../utility/reddit";

//async
export const postsFetch = createAsyncThunk(
  "postsContainer/postFetch", async ({ path, lastElement, firstElement, subreddit }) => {
    const posts = Reddit.getPosts(path, lastElement, firstElement, subreddit
    ).then( //take necessary value for make 1 post
      result => {
        const data = result.data.children //return list array
        const configData = data.map(post => {
          const dataPost = post.data;
          return {
            vote: dataPost['score'],
            subredditName: dataPost['subreddit_name_prefixed'],
            subredditId: dataPost['subreddit_id'],
            authorName: dataPost['author'],
            timeCreate: dataPost['created_utc'],
            awardings : dataPost['all_awardings'] ? dataPost['all_awardings'].map(award => {
              return {
                img: award['resized_icons'][0].url,
                count: award['count'],
                hover: {
                  img: award['resized_icons'][3].url,
                  name: award['name'],
                  coinPrice: award['coin_price'],
                  coinReward: award['coin_reward'],
                  description: award['description']
                }
              }
            }) : null,
            title: dataPost['title'],
            selfTextHtml: dataPost['selftext_html'],
            media: dataPost['media'] ? dataPost['media']['reddit_video'] : null,
            img: dataPost['url'],
            isVideo: dataPost['is_video'],
            isRedditMediaDomain: dataPost['is_reddit_media_domain'],
            isImg: /i.redd.it/.test(dataPost['url']) ? true : false,
            url: dataPost['url'],
            thumbnail: {
              url: dataPost['thumbnail'],
              height: dataPost['thumbnail_height'],
              width: dataPost['thumbnail_width']
            },
            name: dataPost['name'],
            numComments: dataPost['num_comments'],
            //this post saved?
            saved: dataPost['saved'],
            //this post vote? true / false / null
            likes: dataPost['likes']
          }
        })
        return configData;
      }
    );

    return posts;
  }
)

export const searchFetch = createAsyncThunk(
  "postContainer/searchFetch", async ({term, limit, sort, firstElement, lastElement, subreddit}) => {
    const searchValues = Reddit.search(term, limit, sort, firstElement, lastElement, subreddit).then(
      result => {
        const data = result.data.children //return list array
        const configData = data.map(searchValue => {
          const dataPost = searchValue.data;
          return {
            vote: dataPost['score'],
            subredditName: dataPost['subreddit_name_prefixed'],
            subredditId: dataPost['subreddit_id'],
            authorName: dataPost['author'],
            timeCreate: dataPost['created_utc'],
            awardings : dataPost['all_awardings'] ? dataPost['all_awardings'].map(award => {
              return {
                img: award['resized_icons'][0].url,
                count: award['count'],
                hover: {
                  img: award['resized_icons'][3].url,
                  name: award['name'],
                  coinPrice: award['coin_price'],
                  coinReward: award['coin_reward'],
                  description: award['description']
                }
              }
            }) : null,
            title: dataPost['title'],
            selfTextHtml: dataPost['selftext_html'],
            media: dataPost['media'] ? dataPost['media']['reddit_video'] : null,
            img: dataPost['url'],
            isVideo: dataPost['is_video'],
            isRedditMediaDomain: dataPost['is_reddit_media_domain'],
            isImg: /i.redd.it/.test(dataPost['url']) ? true : false,
            url: dataPost['url'],
            thumbnail: {
              url: dataPost['thumbnail'],
              height: dataPost['thumbnail_height'],
              width: dataPost['thumbnail_width']
            },
            name: dataPost['name'],
            numComments: dataPost['num_comments'],
            //this post saved?
            saved: dataPost['saved'],
            //this post vote? true / false / null
            likes: dataPost['likes']
          }
        })
        return configData;
      }
    )

    return searchValues;
  }
)
//slice
export const PostsContainerSlice = createSlice({
  name: 'postsContainer',
  initialState: {
    isLoading: true,
    error: false,
    posts: {},
    lastElement: null,
    firstElement: null
  },
  reducers: {
    resetElement: (state) => {
      return { ...state, lastElement: null, firstElement: null }
    }
  },
  extraReducers: {
    [postsFetch.pending]: (state) => {
      return {...state, isLoading: true, error: false}
    },
    [postsFetch.fulfilled]: (state, action) => {
      return {
        ...state, 
        isLoading: false, 
        error: false,
        posts: action.payload,
        firstElement: action.payload[0].name,
        lastElement: action.payload[24].name,
      }
    },
    [postsFetch.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    },
    [searchFetch.pending]: (state) => {
      return {
        ...state,
        isLoading: true,
        error: false
      }
    },
    [searchFetch.fulfilled]: (state, action) => {
      if(!action.payload[0]) {
        return state;
      }
      return {
        ...state,
        isLoading: false,
        error: false,
        posts: action.payload,
        firstElement: action.payload[0].name,
        lastElement: action.payload[action.payload.length - 1].name,
      }
    },
    [searchFetch.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
  }
});

//select
export const selectPostsContainer = (state) => state.postsContainer;
export const selectLastElement = (state) => state.postsContainer.lastElement;
export const selectFirstElement = (state) => state.postsContainer.firstElement;

//action
export const { resetElement } = PostsContainerSlice.actions;

//reducer
export default PostsContainerSlice.reducer;
