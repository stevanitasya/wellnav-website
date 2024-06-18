// src/components/NutritionDashboard/NutritionDashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import Karbohidrat from "../../Assets/Karbohidrat.png";
import Protein from "../../Assets/Protein.png";
import Lemak from "../../Assets/Lemak.png";
import "./NutritionDashboard.css";

const NutritionDashboard = () => {
  const nutritionSummary = useSelector((state) => state.nutritionSummary);

  return (
    <div className="Dashboard-Nutrisi">
      <h1>Pelacakan Nutrisi</h1>
      <div className="Dashboard-Pelacakan"> 
        <div className="Pelacakan-Item">
          <img src={Karbohidrat} alt="Karbohidrat" className="Karbohidrat-img" />
          <div className="Pelacakan-Text">
            <div className="Pelacakan-Header">
              <p>Karbohidrat: {nutritionSummary.carbohydrates}g</p>
              <span className="Percentage">{nutritionSummary.carbohydrates}g</span>
            </div>
            <div className="Progress-Bar">
              <div className="Progress" style={{ width: `${(nutritionSummary.carbohydrates / 300) * 100}%` }}></div>
            </div>
          </div>
        </div>
        <div className="Pelacakan-Item">
          <img src={Protein} alt="Protein" className="Protein-img" />
          <div className="Pelacakan-Text">
            <div className="Pelacakan-Header">
              <p>Protein: {nutritionSummary.protein}g</p>
              <span className="Percentage">{nutritionSummary.protein}g</span>
            </div>
            <div className="Progress-Bar">
              <div className="Progress" style={{ width: `${(nutritionSummary.protein / 100) * 100}%` }}></div>
            </div>
          </div>
        </div>
        <div className="Pelacakan-Item">
          <img src={Lemak} alt="Lemak" className="Lemak-img" />
          <div className="Pelacakan-Text">
            <div className="Pelacakan-Header">
              <p>Lemak: {nutritionSummary.fat}g</p>
              <span className="Percentage">{nutritionSummary.fat}g</span>
            </div>
            <div className="Progress-Bar">
              <div className="Progress" style={{ width: `${(nutritionSummary.fat / 70) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionDashboard;
