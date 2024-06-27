import React from 'react';
import { useSelector } from 'react-redux';
import Karbohidrat from "../../Assets/Karbohidrat.png";
import Protein from "../../Assets/Protein.png";
import Lemak from "../../Assets/Lemak.png";
import "./NutritionDashboard.css";

const NutritionDashboard = ({ nutritionSummary = {} }) => {
  const { calories = 0, carbohydrates = 0, protein = 0, fat = 0 } = nutritionSummary;

  // const { carbohydrates, protein, fat } = nutritionSummary;

  return (
    <div className="Dashboard-Nutrisi">
      <h1>Pelacakan Nutrisi</h1>
      <div className="Dashboard-Pelacakan">
        <div className="Pelacakan-Item">
          <img src={Karbohidrat} alt="Karbohidrat" className="Karbohidrat-img" />
          <div className="Pelacakan-Text">
            <div className="Pelacakan-Header">
              <p>Karbohidrat: {carbohydrates}g</p>
              <span className="Percentage">{carbohydrates}g</span>
            </div>
            <div className="Progress-Bar">
              <div className="Progress" style={{ width: `${(carbohydrates / 300) * 100}%` }}></div>
            </div>
          </div>
        </div>
        <div className="Pelacakan-Item">
          <img src={Protein} alt="Protein" className="Protein-img" />
          <div className="Pelacakan-Text">
            <div className="Pelacakan-Header">
              <p>Protein: {protein}g</p>
              <span className="Percentage">{protein}g</span>
            </div>
            <div className="Progress-Bar">
              <div className="Progress" style={{ width: `${(protein / 100) * 100}%` }}></div>
            </div>
          </div>
        </div>
        <div className="Pelacakan-Item">
          <img src={Lemak} alt="Lemak" className="Lemak-img" />
          <div className="Pelacakan-Text">
            <div className="Pelacakan-Header">
              <p>Lemak: {fat}g</p>
              <span className="Percentage">{fat}g</span>
            </div>
            <div className="Progress-Bar">
              <div className="Progress" style={{ width: `${(fat / 70) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionDashboard;