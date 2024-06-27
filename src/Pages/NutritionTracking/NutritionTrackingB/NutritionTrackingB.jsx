import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { setCalories, setNutritionSummary } from "../../../redux/actions";
import axios from "axios";

const NutritionTrackingB = () => {
  const dispatch = useDispatch();
  const backendUrl =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
  const selectedItems = useSelector((state) => state.food.selectedItems);
  const [nutritionSummary, setNutritionSummary] = useState({
    calories: 0,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const response = await axios.get(
          `${backendUrl}/api/foodlogs/` +
            new Date().toISOString().split("T")[0],
          config
        );

        const { foodLogs, nutritionSummary } = response.data;
        setNutritionSummary(nutritionSummary);
        dispatch(setCalories(nutritionSummary.calories, 2000));
        dispatch(setNutritionSummary(nutritionSummary));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, backendUrl]);

  const remainingCalories = 2000 - nutritionSummary.calories;

  return (
    <div className="App">
      <CollapseSideBar />
      <Header />
      <div className="chart-container">
        <img src={chefPicture} className="chef-picture" />
        <CalorieChart
          takenCalories={nutritionSummary.calories}
          recommendedCalories={2000}
        />
        <div className="chart-description">
          <div className="chart-meal-type">Sarapan</div>
          <div className="chart-calorie-left">
            Tersisa {remainingCalories} kkal hari ini
          </div>
        </div>
      </div>
      <div className="personalize-section">
        <NutritionChart nutritionSummary={nutritionSummary} />
        <FoodTaken selectedItems={selectedItems} />
      </div>
      <div className="warning-section">
        <WarningMessage />
      </div>
    </div>
  );
};

export default NutritionTrackingB;
