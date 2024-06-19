import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import foodReducer from './slices/foodSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    food: foodReducer,
  },
});

export default store;