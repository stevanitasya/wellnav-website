import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CollapseSideBar from "../../../components/CollapseSideBar/CollapseSideBar";
import FoodChoice from "../../../components/FoodChoice/FoodChoice";
import Header from "../../../components/Header/Header";
import { incrementCounter, decrementCounter, setSelectedItems } from "../../../redux/slices/foodSlice";
import "./NutritionTrackingA.css";

function NutritionTrackingA() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  const filters = ["Semua", "Rendah Kalori", "Bebas Gluten", "Vegan"];
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.food.counter);
  const selectedItems = useSelector((state) => state.food.selectedItems || []);
  const mealType = useSelector((state) => state.food.mealType) || "Sarapan";
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    document.title = `Pilih ${mealType} hari ini`;
  }, [mealType]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleSelectedItemsChange = (newSelectedItems) => {
    dispatch(setSelectedItems(newSelectedItems));
  };

  const handleTracking = async (e) => {
    if (e) e.preventDefault();
    const addFoodPromises = selectedItems.map(item => {
      const addFood = {
        foodId: item._id,
        mealType,
      };
      return axios.post(`${backendUrl}/api/foodlogs/add`, addFood, {
        headers: { Authorization: `Bearer ${token}` }
      });
    });

    try {
      await Promise.all(addFoodPromises);
      navigate("/nutrition-tracking/food-choices/nutrition-data");
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const navigateToNutritionTrackingB = async () => {
    await handleTracking();
  };

  return (
    <div className="App">
      <CollapseSideBar />
      <Header />
      <div className="choose-meal-title">Pilih {mealType} hari ini</div>
      <div className="filter-section">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? "active" : ""}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <FoodChoice
        activeFilter={activeFilter}
        onSelectedItemsChange={handleSelectedItemsChange}
      />
      {selectedItems.length > 0 && (
        <div className="big-add-button">
          <button onClick={navigateToNutritionTrackingB}>
            Tambah
            <div className="circle">
              <span className="circle-text">{counter}</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default NutritionTrackingA;