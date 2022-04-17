import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/Authentication/authenticationSlice';
import navbarReducer from '../features/Navbar/NavbarSlice';
import postsContainerReducer from '../features/PostContainer/PostsContainerSlice';
import filterReducer from '../features/Filter/FilterSlice';
import subredditPageReducer from '../components/FullPage/SubredditPage/SubredditPageSlice';
import utilityReducer from './utilitySlice';
import searchPageReducer from '../components/FullPage/SearchPage/SearchPageSlice';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    navbar: navbarReducer,
    postsContainer: postsContainerReducer,
    filter: filterReducer,
    subredditPage: subredditPageReducer,
    utility: utilityReducer,
    searchPage: searchPageReducer
  },
});

export default store;
