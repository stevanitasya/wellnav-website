import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_SELECTED_ITEMS,
  SET_MEAL_TYPE,
  SET_FOOD_CHOICES,
  SET_CALORIES,
  SET_NUTRITION,
  SET_FOOD_LOGS,
  SET_NUTRITION_DATA,
  SET_NUTRITION_SUMMARY,
} from "./actionTypes";

const initialState = {
  username: "",
  email: "",
  counter: 0,
  selectedItems: [],
  foodChoices: [],
  mealType: 'Sarapan',
  takenCalories: 0,
  recommendedCalories: 2000,
  takenCarbohydrates: 0,
  takenProtein: 0,
  takenFat: 0,
  foodLogs: [],
  nutritionSummary: {
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case SET_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: action.payload,
      };
    case SET_MEAL_TYPE:
      return {
        ...state,
        mealType: action.payload,
      };
    case SET_FOOD_CHOICES:
      return {
        ...state,
        foodChoices: action.payload,
      };
      case SET_CALORIES:
      return {
        ...state,
        takenCalories: action.payload.takenCalories,
        recommendedCalories: action.payload.recommendedCalories,
      };
    case SET_NUTRITION:
      return {
        ...state,
        takenCarbohydrates: action.payload.takenCarbohydrates,
        takenProtein: action.payload.takenProtein,
        takenFat: action.payload.takenFat,
      };
    case SET_NUTRITION_DATA:
      return {
        ...state,
        nutritionData: action.payload,
      };
    case SET_FOOD_LOGS:
      return {
        ...state,
         foodLogs: action.payload,
      };
    case SET_NUTRITION_SUMMARY:
      return {
       ...state,
       nutritionSummary: action.payload,
      };
      case "SET_FOOD_LOGS":
      return {
        ...state,
        foodLogs: action.payload,
      };
    default:
    return state;
  }
};

export default rootReducer;
