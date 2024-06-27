import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import Salad from "../../Assets/Salad.png";
import "./Dashboard.css";
import KalenderDashboard from "../../components/KalenderDashboard/KalenderDashboard";
import CalorieChart from "../../components/CalorieChart/CalorieChart";
import NutritionDashboard from "../../components/NutritionDashboard/NutritionDashboard";
import Header from "../../components/Header/Header";
import { setCalories, setNutritionSummary } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";

const Dashboard = () => {
  const [foodLogs, setFoodLogs] = useState([]);
  const [nutritionSummary, setNutritionSummary] = useState({
    carbohydrates: 0,
    protein: 0,
    fat: 0,
    calories: 0,
  });

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchFoodLogs = async () => {
      try {
        const response = await axios.get(
          "https://wellnav-backend.vercel.app/api/foodlogs/" +
            new Date().toISOString().split("T")[0],
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const nutritionData = response.data.nutritionSummary;
        setNutritionSummary(nutritionData);
        dispatch(setCalories(nutritionData.calories, 2000));
        dispatch(setNutritionSummary(nutritionData));
        setFoodLogs(response.data.foodLogs);
      } catch (error) {
        console.error("Error fetching food logs:", error);
      }
    };

    fetchFoodLogs();
  }, [dispatch, token]);

  return (
    <div className="App">
      <CollapseSideBar />
      <div className="Dashboard-Header">
        <Header />
        <div className="Dashboard-Container">
          <div className="Dashboard-Content">
            {/* KIRI */}
            <div className="Dashboard-Left">
              <div className="Dashboard-Req">
                <img
                  src={Salad}
                  alt="DashboardSalad"
                  className="DashboardSalad-img"
                />
                <h1>
                  Rekomendasi <br /> Makanan Hari ini.
                </h1>
                <Link to="/Recommendation">Lainnya...</Link>
              </div>
              <div className="Dashboard-Fitur">
                {/* KALORI */}
                <div className="Dashboard-Kalori">
                  <h1>Jumlah Kalori</h1>
                  <div className="Dashboard-Pengukur">
                    <CalorieChart takenCalories={nutritionSummary.calories} />
                  </div>
                </div>
                {/* REMINDER */}
                <div className="Dashboard-Reminder">
                  <h1>Pengingat</h1>
                  <div className="spacing-br">
                    <div className="Dashboard-Pengingat">
                      <h1>Sudahkah <br /> anda <br /> minum?</h1>
                      <p>2 Liter/hari</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* KANAN */}
            <div className="Dashboard-Right">
              <div className="Dashboard-Calender">
                <KalenderDashboard />
              </div>
              {/* PELACAKAN NUTRISI */}
              <NutritionDashboard nutritionSummary={nutritionSummary} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
