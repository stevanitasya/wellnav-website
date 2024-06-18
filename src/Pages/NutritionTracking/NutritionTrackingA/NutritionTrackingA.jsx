import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CollapseSideBar from "../../../components/CollapseSideBar/CollapseSideBar";
import FoodChoice from "../../../components/FoodChoice/FoodChoice";
import SearchBar from "../../../components/SearchBar/SearchBar";
import profilePicture from "../../../Assets/Salad.png";
import Header from "../../../components/Header/Header";
import { incrementCounter, decrementCounter, setSelectedItems } from "../../../redux/actions";
import "./NutritionTrackingA.css";

function NutritionTrackingA() {
  const [activeFilter, setActiveFilter] = useState("All");
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  const userId = "666fd729a7d9380a07810628"; 
  const filters = ["All", "Rendah Kalori", "Bebas Gluten", "Vegan"];
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const selectedItems = useSelector((state) => state.selectedItems);
  const mealType = useSelector((state) => state.mealType); 
  const navigate = useNavigate();

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleCounterChange = (newCounter) => {
    if (newCounter > counter) {
      dispatch(incrementCounter());
    } else {
      dispatch(decrementCounter());
    }
  };

  const handleSelectedItemsChange = (newSelectedItems) => {
    dispatch(setSelectedItems(newSelectedItems));
  };

  const handleTracking = async (e) => {
    if (e) e.preventDefault();
    console.log("Tombol diklik!");

    const addFoodPromises = selectedItems.map(item => {
      const addFood = {
        userId,
        foodId: item._id,
        mealType,
      };
      return axios.post(`${backendUrl}/api/foodlogs/add`, addFood);
    });

    try {
      await Promise.all(addFoodPromises);
      navigate("/nutrition-tracking/food-choices/nutrition-data");
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const navigateToNutritionTrackingB = async () => {
    await handleTracking(); // Tidak mengirimkan event
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
        counter={counter}
        onCounterChange={handleCounterChange}
        onSelectedItemsChange={handleSelectedItemsChange}
        onTracking={handleTracking}
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
