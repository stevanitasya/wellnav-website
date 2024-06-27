import React, { useEffect, useState } from "react";
import axios from "axios";
import Salad from "../../Assets/Salad.png";
import HeartIcon from "./HeartIcon";
import "./FoodCatalog.css";

const FoodCatalog = ({ activeFilter, userId }) => {
  const [foodItems, setFoodItems] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/foods/recommended`, {
          params: {
            userId,
            category: activeFilter === "All" ? undefined : activeFilter,
          },
        });
        setFoodItems(response.data.articles); // Access the articles array from the response
      } catch (error) {
        console.error("Error fetching foods", error.response || error.message);
      }
    };

    if (userId) {
      fetchArticles();
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