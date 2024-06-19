import React from "react";
import FoodChoice from "../../../components/FoodChoice/FoodChoice";
import { useSelector } from "react-redux";

const NutritionTrackingA = () => {
  const selectedItems = useSelector((state) => state.food.selectedItems);

  return (
    <div>
      <FoodChoice />
      <div>
        <h2>Selected Items: {selectedItems.length}</h2>
        {navigate("/nutrition-tracking/food-choices/nutrition-data")};
      </div>
    </div>
  );
};

export default NutritionTrackingA;
