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
import { setCalories, setNutrition } from "../../../redux/slices/foodSlice";

const NutritionTrackingB = () => {
  const dispatch = useDispatch();
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
  const selectedItems = useSelector((state) => state.food.selectedItems);
  const [nutritionSummary, setNutritionSummary] = useState({
    calories: 0,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
  });

  useEffect(() => {
    const calculateNutritionSummary = () => {
      const summary = selectedItems.reduce((acc, item) => {
        acc.calories += item.calories || 0;
        acc.carbohydrates += item.carbohydrates || 0;
        acc.protein += item.protein || 0;
        acc.fat += item.fat || 0;
        return acc;
      }, { calories: 0, carbohydrates: 0, protein: 0, fat: 0 });

      setNutritionSummary(summary);
      dispatch(setCalories(summary.calories, 2000));
      dispatch(setNutrition(summary.carbohydrates, summary.protein, summary.fat));
    };

    calculateNutritionSummary();
  }, [selectedItems, dispatch]);

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
        <FoodTaken selectedItems={selectedItems} />
      </div>
      <div className="warning-section">
        <WarningMessage />
      </div>
    </div>
  );
};

export default NutritionTrackingB;