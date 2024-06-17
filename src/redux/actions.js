import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_SELECTED_ITEMS,
  SET_MEAL_TYPE,
  SET_FOOD_CHOICES,
  SET_CALORIES,
  SET_NUTRITION,
  SET_NUTRITION_DATA,
  SET_FOOD_LOGS,
  SET_NUTRITION_SUMMARY
} from "./actionTypes";

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
});

export const setSelectedItems = (items) => ({
  type: SET_SELECTED_ITEMS,
  payload: items,
});

export const setMealType = (mealType) => ({
  type: SET_MEAL_TYPE,
  payload: mealType,
});

export const setFoodChoices = (foodChoices) => ({
  type: SET_FOOD_CHOICES,
  payload: foodChoices,
});

export const setCalories = (takenCalories, recommendedCalories) => ({
  type: SET_CALORIES,
  payload: { takenCalories, recommendedCalories },
});

export const setNutrition = (takenCarbohydrates, takenProtein, takenFat) => ({
  type: SET_NUTRITION,
  payload: { takenCarbohydrates, takenProtein, takenFat },
});

export const setNutritionData = (nutritionData) => ({
  type: SET_NUTRITION_DATA,
  payload: nutritionData,
});

export const setFoodLogs = (foodLogs) => ({
  type: SET_FOOD_LOGS,
  payload: foodLogs,
});

export const setNutritionSummary = (nutritionSummary) => ({
  type: SET_NUTRITION_SUMMARY,
  payload: nutritionSummary,
});
