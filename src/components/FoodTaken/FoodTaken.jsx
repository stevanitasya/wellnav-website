// src/components/FoodTaken/FoodTaken.jsx
import React from "react";
import "./FoodTaken.css";

const FoodTaken = ({ selectedItems }) => { // Pastikan ini diterima sebagai prop
  return (
    <div className="food-taken"> 
      <div className="food-taken-text">Makanan yang dikonsumsi</div>
      <div className="food-choices-container">
        {selectedItems && selectedItems.map((item) => ( // Tambahkan pengecekan untuk memastikan selectedItems tidak undefined
          <div key={item._id} className="food-choice-container2">
            <img src={item.imageUrl} alt={item.name} className="food-image2" />
            <div className="food-details">
              <h3>{item.name}</h3>
              <p>{item.calories} kkal {item.carbohydrates}g {item.protein}g {item.fat}g</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodTaken;