// src/components/DailyMeal/DailyMeal.js
import React from "react";
import { useDispatch } from "react-redux";
import "./DailyMeal.css";
import exampleImage from "../../Assets/Salad.png";
import { useNavigate } from "react-router-dom";
import { setMealType } from "../../redux/actions"; 

const DailyMeal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mealType = [
    { id: 1, type: "Sarapan" },
    { id: 2, type: "Makan Siang" },
    { id: 3, type: "Makan Malam" },
  ];

  const navigateToFoodChoices = (type) => {
    dispatch(setMealType(type));
    navigate("/nutrition-tracking/food-choices");
  };

  return (
    <div className="daily-meals">
      <div className="personalize-meal-text">
        <h1>Personalisasikan makanan harian anda</h1>
      </div>
      <div className="daily-meals-container">
        {mealType.map((item) => (
          <div key={item.id} className="daily-meal-container">
            <div className="daily-meal-info">
              <div className="meal-type">{item.type}</div>
              <div className="add-button">
                <button onClick={() => navigateToFoodChoices(item.type)}>
                  Tambah
                </button>
              </div>
            </div>
            <div className="daily-meal-image">
              <img src={exampleImage} alt="Meal" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyMeal;
