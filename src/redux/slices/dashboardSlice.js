// src/redux/slices/dashboardSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dailyCalories: 0,
    nutritionSummary: { carbohydrates: 0, protein: 0, fat: 0 },
  },
  reducers: {
    setDashboardData: (state, action) => {
      state.dailyCalories = action.payload.dailyCalories;
      state.nutritionSummary = action.payload.nutritionSummary;
    },
  },
});

export const { setDashboardData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
