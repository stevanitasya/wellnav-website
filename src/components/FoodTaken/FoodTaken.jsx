import React from "react";
import { useSelector } from "react-redux";
import "./FoodTaken.css";
import exampleImage from "../../Assets/Salad.png";

const FoodTaken = () => {
  const selectedItems = useSelector((state) => state.food.selectedItems);

  return (
    <div className="food-taken">
      <div className="food-taken-text">Makanan yang dikonsumsi</div>
      <div className="food-choices-container">
        {selectedItems.map((item) => (
          <div key={item._id} className="food-choice-container2">
            <img
              src={item.imageUrl || exampleImage}
              alt={item.name}
              className="food-nutritiondata"
            />
            <div className="food-details">
              <h3>{item.name}</h3>
              <p>
                {item.calories}kkal kalori <br />
                {item.carbohydrates}g karbohidrat
                <br />
                {item.protein}g protein
                <br />
                {item.fat}g lemak
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodTaken;
