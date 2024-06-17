import React from "react";
import CollapseSideBar from "../../../components/CollapseSideBar/CollapseSideBar";
import FoodChoice from "../../../components/FoodChoice/FoodChoice";
import "../NutritionTracking/NutritionTracking.css"; // Pastikan Anda memiliki gaya yang relevan di file CSS Anda
import SearchBar from "../../../components/SearchBar/SearchBar";
import Calendar from "../../../components/Calendar/Calendar";
import DailyMeal from "../../../components/DailyMeal/DailyMeal"; 
import Header from "../../../components/Header/Header";
import { useSelector } from "react-redux";

function NutritionTracking() {
  return (
    <div className="App">
      <CollapseSideBar /> 
      <Header />
      <hr className="center-line" />
      <div className="calendar-section">
        <Calendar />
      </div>
      <div className="personalize-section-daily-meal">
        <DailyMeal />
      </div>
    </div>
  );
}

export default NutritionTracking;
