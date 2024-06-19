// src/pages/NutritionTrackingB.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import CollapseSideBar from "../../../components/CollapseSideBar/CollapseSideBar";
import "./NutritionTrackingB.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import profilePicture from "../../../Assets/Salad.png";
import CalorieChart from "../../../components/CalorieChart/CalorieChart";
import NutritionChart from "../../../components/NutritionChart/NutritionChart";
import FoodTaken from "../../../components/FoodTaken/FoodTaken";
import WarningMessage from "../../../components/WarningMessage/WarningMessage";
import chefPicture from "../../../Assets/Rekomendasi.png";
import Header from "../../../components/Header/Header";
import { setCalories, setNutrition } from "../../../redux/slices/foodSlice"; // Pastikan impor dari foodSlice

const NutritionTrackingB = () => {
  const dispatch = useDispatch();
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  const [foodLogs, setFoodLogs] = useState([]);
  const [nutritionSummary, setNutritionSummary] = useState({
    calories: 0,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
  });
  const selectedItems = useSelector((state) => state.food.selectedItems); // Pastikan ini ada

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }; 

  const date = getCurrentDate(); // Get current date

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        const response = await axios.get(`${backendUrl}/api/foodlogs/${date}`, config);
        setFoodLogs(response.data.foodLogs);
        setNutritionSummary(response.data.nutritionSummary);
        dispatch(setCalories(response.data.nutritionSummary.calories, 2000));
        dispatch(setNutrition(response.data.nutritionSummary.carbohydrates, response.data.nutritionSummary.protein, response.data.nutritionSummary.fat));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [dispatch, date]);  

  const remainingCalories = 2000 - nutritionSummary.calories;

  return (
    <div className="App">
      <CollapseSideBar />
      <Header />
      <div className="chart-container">
        <img src={chefPicture} className="chef-picture" />
        <CalorieChart takenCalories={nutritionSummary.calories} recommendedCalories={2000} />
        <div className="chart-description">
          <div className="chart-meal-type">Sarapan</div>
          <div className="chart-calorie-left">
            Tersisa {remainingCalories} kkal hari ini
          </div>
        </div>
      </div>
      <div className="personalize-section">
        <NutritionChart />
        <FoodTaken selectedItems={selectedItems} /> {/* Pastikan ini dipass */}
      </div>
      <div className="warning-section">
        <WarningMessage />
      </div>
    </div>
  );
};

export default NutritionTrackingB;