import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./NutritionChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const NutritionChart = ({ nutritionSummary = {} }) => {
  const {
    calories = 0,
    carbohydrates = 0,
    protein = 0,
    fat = 0,
  } = nutritionSummary;

  const createChartData = (taken, remaining) => ({
    labels: ["Intake", "Remaining"],
    datasets: [
      {
        data: [taken, remaining],
        backgroundColor: ["#EF723D", "#F0DD98"],
        hoverBackgroundColor: ["#EF723D", "#F0DD98"],
        borderWidth: 0,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "85%",
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false },
    },
  };

  return (
    <div className="nutrition-chart-position">
      <div className="nutrition-chart-container">
        <div className="nutrition-chart-items">
          <div className="nutrition-chart-item">
            <div className="nutrition-chart-header">Kalori</div>
            <div className="nutrition-chart-content">
              <div className="doughnut-chart-wrapper">
                <Doughnut
                  data={createChartData(calories, 2000 - calories)}
                  options={options}
                />
              </div>
              <div className="nutrition-value">{calories} kkal</div>
            </div>
          </div>
          <div className="nutrition-chart-item">
            <div className="nutrition-chart-header2">Karbohidrat</div>
            <div className="nutrition-chart-content">
              <div className="doughnut-chart-wrapper">
                <Doughnut
                  data={createChartData(carbohydrates, 300 - carbohydrates)}
                  options={options}
                />
              </div>
              <div className="nutrition-value">{carbohydrates} g</div>
            </div>
          </div>
          <div className="nutrition-chart-item">
            <div className="nutrition-chart-header3">Protein</div>
            <div className="nutrition-chart-content">
              <div className="doughnut-chart-wrapper">
                <Doughnut
                  data={createChartData(protein, 100 - protein)}
                  options={options}
                />
              </div>
              <div className="nutrition-value">{protein} g</div>
            </div>
          </div>
          <div className="nutrition-chart-item">
            <div className="nutrition-chart-header4">Lemak</div>
            <div className="nutrition-chart-content">
              <div className="doughnut-chart-wrapper">
                <Doughnut
                  data={createChartData(fat, 70 - fat)}
                  options={options}
                />
              </div>
              <div className="nutrition-value">{fat} g</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionChart;
