import React, { useEffect, useState } from "react";
import axios from "axios";
import Salad from "../../Assets/Salad.png";
import HeartIcon from "./HeartIcon";
import "./FoodCatalog.css";
import { useSelector } from "react-redux";

const FoodCatalog = ({ activeFilter }) => {
  const [foodItems, setFoodItems] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  const userId = useSelector((state) => state.auth.userId); // Fetch userId from Redux store

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/foods/recommended`, {
          params: {
            category: activeFilter === "All" ? undefined : activeFilter,
            userId: userId, // Pass userId as a query parameter
          },
        });
        const { articles } = response.data;
        setFoodItems(articles);
      } catch (error) {
        console.error("Error fetching foods", error.response || error.message);
      }
    };

    if (userId) { // Fetch only if userId is available
      fetchArticle();
    }
  }, [activeFilter, userId]);

  return (
    <div className="Food-Catalog">
      {foodItems.length > 0 ? (
        foodItems.map((item) => (
          <div className="FoodCatalog-Column" key={item._id}>
            <div className="Food-Recommendation">
              <img src={item.imageUrl || Salad} alt={item.title} className="SaladCatalog-img" />
              <a href={item.link} className="Food-name" target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <p className="Food-detail">{item.content}</p>
              <HeartIcon />
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