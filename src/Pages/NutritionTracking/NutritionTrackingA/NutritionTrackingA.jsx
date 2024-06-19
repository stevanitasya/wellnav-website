import React from "react";
import FoodChoice from "../../../components/FoodChoice/FoodChoice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NutritionTrackingA = () => {
  const selectedItems = useSelector((state) => state.food.selectedItems);
  const navigate = useNavigate();

  return (
    <div>
      <FoodChoice />
      <div>
        <h2>Selected Items: {selectedItems.length}</h2>
        {/* Use navigate in an event handler, not directly in the render */}
        <button onClick={() => navigate("/nutrition-tracking/food-choices/nutrition-data")}>
          Go to Nutrition Data
        </button>
      </div>
    </div>
  );
};

export default NutritionTrackingA;