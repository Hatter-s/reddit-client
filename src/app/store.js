import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/Authentication/authenticationSlice';
import navbarReducer from '../features/Navbar/NavbarSlice';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    navbar: navbarReducer
  },
});

export default store;
