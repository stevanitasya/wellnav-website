import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { incrementCounter, decrementCounter, setSelectedItems, setFoodChoices } from "../../redux/actions";
import "./FoodChoice.css";

const FoodChoice = ({ activeFilter }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const selectedItems = useSelector((state) => state.selectedItems);
  const foodChoices = useSelector((state) => state.foodChoices);
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchFoodChoices = async () => {
      try {
        let url = `${backendUrl}/api/foods`;
        if (activeFilter && activeFilter !== "All") {
          url += `?category=${activeFilter}`;
        }
        const response = await axios.get(url);
        console.log("Data from API: ", response.data);
        const foodChoicesWithAbsoluteImageUrl = response.data.map(food => ({
          ...food,
          imageUrl: `${backendUrl}${food.imageUrl.slice(1)}`
        }));
        dispatch(setFoodChoices(foodChoicesWithAbsoluteImageUrl));
      } catch (error) {
        console.error('Error fetching food choices:', error);
      }
    };

    fetchFoodChoices();
  }, [dispatch, activeFilter]);

  console.log("Food Choices: ", foodChoices); // Add this line

  const handleButtonClick = (id) => {
    const isSelected = selectedItems.some((item) => item._id === id);
    const newSelectedItems = isSelected
      ? selectedItems.filter((item) => item._id !== id)
      : [...selectedItems, foodChoices.find((item) => item._id === id)];

    dispatch(setSelectedItems(newSelectedItems));
    dispatch(isSelected ? decrementCounter() : incrementCounter());
  };

  if (!foodChoices || foodChoices.length === 0) {
    return <p>No food items found.</p>;
  }

  return (
    <div className="food-choices">
      {foodChoices.map((item) => (
        <div key={item._id} className="food-choice-container">
          <img
            src={item.imageUrl || "https://via.placeholder.com/150"}
            alt={item.name}
            className="food-image"
          />
          <div className="food-details">
            <h3>{item.name}</h3>
            <p>{item.calories} kkal {item.carbohydrates}g</p>
            <p>{item.protein}g {item.fat}g</p>
          </div>
          <div className="button-group">
            <button
              className={`add-button ${
                selectedItems.some(
                  (selectedItem) => selectedItem._id === item._id
                )
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleButtonClick(item._id)}
            >
              Tambah
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodChoice;
