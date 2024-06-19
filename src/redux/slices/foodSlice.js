// src/redux/slices/foodSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodChoices: [],
  selectedItems: [],
  counter: 0,
  mealType: "Sarapan",
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFoodChoices: (state, action) => {
      state.foodChoices = action.payload;
    },
    setSelectedItems: (state, action) => {
      state.selectedItems = action.payload;
    },
    incrementCounter: (state) => {
      state.counter += 1;
    },
    decrementCounter: (state) => {
      state.counter -= 1;
    },
    setMealType: (state, action) => {
      state.mealType = action.payload;
    },
    setCalories: (state, action) => {
      state.takenCalories = action.payload.takenCalories;
      state.recommendedCalories = action.payload.recommendedCalories;
    },
    setNutrition: (state, action) => {
      state.takenCarbohydrates = action.payload.takenCarbohydrates;
      state.takenProtein = action.payload.takenProtein;
      state.takenFat = action.payload.takenFat;
    },
  },
});

export const {
  setFoodChoices,
  setSelectedItems,
  incrementCounter,
  decrementCounter,
  setMealType,
  setCalories,
  setNutrition,
} = foodSlice.actions;

export default foodSlice.reducer;