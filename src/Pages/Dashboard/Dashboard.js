// src/Pages/Dashboard/Dashboard.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import Salad from "../../Assets/Salad.png";
import "./Dashboard.css";
import KalenderDashboard from "../../components/KalenderDashboard/KalenderDashboard";
import CalorieChart from "../../components/CalorieChart/CalorieChart";
import NutritionDashboard from "../../components/NutritionDashboard/NutritionDashboard";
import Header from "../../components/Header/Header";
import { setFoodLogs, setNutritionSummary } from "../../redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/users/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        dispatch(setNutritionSummary(response.data.nutritionSummary));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [dispatch, token, backendUrl]);

  const nutritionSummary = useSelector((state) => state.food.nutritionSummary || { carbohydrates: 0, protein: 0, fat: 0 });
  const { dailyCalories, carbohydrates, protein, fat } = nutritionSummary;

  return (
    <div className="App">
      <CollapseSideBar />
      <Header />
      <div className="Dashboard-Container">
        <div className="Dashboard-Content">
          <div className="Dashboard-Left">
            <div className="Dashboard-Req">
              <img src={Salad} alt="DashboardSalad" className="DashboardSalad-img" />
              <h1>Rekomendasi Makanan Hari ini.</h1>
              <a href="/Recommendation">Lainnya...</a>
            </div>
            <div className="Dashboard-Fitur">
              <div className="Dashboard-Kalori">
                <h1>Jumlah Kalori</h1>
                <div className="Dashboard-Pengukur">
                  <CalorieChart takenCalories={dailyCalories} recommendedCalories={2000} />
                </div>
              </div>
              <div className="Dashboard-Reminder">
                <h1>Pengingat</h1>
                <div className="spacing-br">
                  <div className="Dashboard-Pengingat">
                    <h1>Sudahkah anda minum?</h1>
                    <p>4 Liter/hari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Dashboard-Right">
            <div className="Dashboard-Calender">
              <KalenderDashboard />
            </div>
            <NutritionDashboard
              carbohydrates={carbohydrates}
              protein={protein}
              fat={fat}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;