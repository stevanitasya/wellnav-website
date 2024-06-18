import React, { useEffect, useState } from "react";
import axios from "axios";
import Salad from "../../Assets/Salad.png";
import HeartIcon from "./HeartIcon";
import "./FoodCatalog.css";
import { useSelector } from "react-redux";

const FoodCatalog = ({ activeFilter }) => {
  const [foodItems, setFoodItems] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  const token = useSelector((state) => state.auth.token); // Fetch token from Redux store

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/foods/recommended`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              category: activeFilter === "All" ? undefined : activeFilter,
            },
          }
        );
        const { articles } = response.data;
        setFoodItems(articles);
      } catch (error) {
        console.error("Error fetching foods", error.response || error.message);
      }
    };

    if (token) { // Fetch only if token is available
      fetchArticle();
    }
  }, [activeFilter, token]);

  return (
    <div className="food-choices">
      {foodChoices.length > 0 ? (
        foodChoices.map((item) => (
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
                className={`add-button ${selectedItems.some((selectedItem) => selectedItem._id === item._id) ? "selected" : ""}`}
                onClick={() => handleButtonClick(item._id)}
              >
                Tambah
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No food items found.</p>
      )}
    </div>
  );
  
};

export default FoodCatalog;