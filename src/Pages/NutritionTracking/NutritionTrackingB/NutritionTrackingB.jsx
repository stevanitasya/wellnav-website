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
import { setCalories, setNutrition } from "../../../redux/actions";

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

  const userId = "666fd729a7d9380a07810628"; // Example userId, replace with actual userId

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
        const response = await axios.get(`h${backendUrl}/api/foodlogs/${userId}/${date}`);
        setFoodLogs(response.data.foodLogs);
        setNutritionSummary(response.data.nutritionSummary);
        dispatch(setCalories(response.data.nutritionSummary.calories, 2000));
        dispatch(setNutrition(response.data.nutritionSummary.carbohydrates, response.data.nutritionSummary.protein, response.data.nutritionSummary.fat));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, userId, date]);

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
        <FoodTaken foodLogs={foodLogs} />
      </div>
      <div className="warning-section">
        <WarningMessage />
      </div>
    </div>
  );
};

export default NutritionTrackingB;
