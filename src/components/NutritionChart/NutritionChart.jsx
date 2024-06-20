import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./NutritionChart.css";
import { useSelector } from "react-redux";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const NutritionChart = () => {
  const nutritionSummary = useSelector((state) => state.food.nutritionSummary);
  const {
    calories: takenCalories,
    carbohydrates: takenCarbohydrates,
    protein: takenProtein,
    fat: takenFat,
  } = nutritionSummary;

  const recommendedCalories = 2000;
  const recommendedCarbohydrates = 300; // Assuming 300g is the daily recommended intake
  const recommendedProtein = 100; // Assuming 100g is the daily recommended intake
  const recommendedFat = 70; // Assuming 70g is the daily recommended intake

  const remainingCalories = recommendedCalories - takenCalories;
  const remainingCarbohydrates = recommendedCarbohydrates - takenCarbohydrates;
  const remainingProtein = recommendedProtein - takenProtein;
  const remainingFat = recommendedFat - takenFat;

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
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
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
                  data={createChartData(takenCalories, remainingCalories)}
                  options={options}
                />
              </div>
              <div className="nutrition-value">{takenCalories} kkal</div>
            </div>
          </div>
          <div className="nutrition-chart-item">
            <div className="nutrition-chart-header">Karbohidrat</div>
            <div className="nutrition-chart-content">
              <div className="doughnut-chart-wrapper">
                <Doughnut
                  data={createChartData(
                    takenCarbohydrates,
                    remainingCarbohydrates
                  )}
                  options={options}
                />
              </div>
              <div className="nutrition-value">{takenCarbohydrates} g</div>
            </div>
          </div>
          <div className="nutrition-chart-item">
            <div className="nutrition-chart-header">Protein</div>
            <div className="nutrition-chart-content">
              <div className="doughnut-chart-wrapper">
                <Doughnut
                  data={createChartData(takenProtein, remainingProtein)}
                  options={options}
                />
              </div>
              <div className="nutrition-value">{takenProtein} g</div>
            </div>
          </div>
          <div className="nutrition-chart-item">
            <div className="nutrition-chart-header">Lemak</div>
            <div className="nutrition-chart-content">
              <div className="doughnut-chart-wrapper">
                <Doughnut
                  data={createChartData(takenFat, remainingFat)}
                  options={options}
                />
              </div>
              <div className="nutrition-value">{takenFat} g</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionChart;