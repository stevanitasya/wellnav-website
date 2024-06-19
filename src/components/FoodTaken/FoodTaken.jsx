import React from "react";
import { useSelector } from "react-redux";
import "./FoodTaken.css";

const FoodTaken = () => {
  const selectedItems = useSelector((state) => state.food.selectedItems);

  return (
    <div className="food-taken">
      <div className="food-taken-text">Makanan yang dikonsumsi</div>
      <div className="food-choices-container">
        {selectedItems.map((item) => (
          <div key={item._id} className="food-choice-container2">
            <img src={item.imageUrl} alt={item.name} className="food-image2" />
            <div className="food-details">
              <h3>{item.name}</h3>
              <p>
                {item.calories} kkal {item.carbohydrates}g {item.protein}g{" "}
                {item.fat}g
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodTaken;
