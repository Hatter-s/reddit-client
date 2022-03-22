import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/Authentication/authenticationSlice';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer
  },
});

export default store;
