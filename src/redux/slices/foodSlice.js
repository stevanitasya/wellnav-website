// src/redux/slices/foodSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodChoices: [],
  selectedItems: [],
  counter: 0,
  mealType: "Sarapan",
  takenCalories: 0,
  recommendedCalories: 2000,
  takenCarbohydrates: 0,
  takenProtein: 0,
  takenFat: 0,
  nutritionSummary: {
    calories: 0,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
  },
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
    setNutritionSummary: (state, action) => {
      state.nutritionSummary = action.payload;
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