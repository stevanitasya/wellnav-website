// src/redux/slices/foodSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodChoices: [],
  selectedItems: [],
  counter: 0,
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
  },
});

export const {
  setFoodChoices,
  setSelectedItems,
  incrementCounter,
  decrementCounter,
} = foodSlice.actions;

export default foodSlice.reducer;
