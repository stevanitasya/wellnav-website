import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import Salad from "../../Assets/Salad.png";
import "./Dashboard.css";
import KalenderDashboard from "../../components/KalenderDashboard/KalenderDashboard";
import CalorieChart from "../../components/CalorieChart/CalorieChart";
import NutritionDashboard from "../../components/NutritionDashboard/NutritionDashboard";
import Header from "../../components/Header/Header";
import axios from "axios";

const Dashboard = () => {
  const [dailyCalories, setDailyCalories] = useState(0);
  const [nutritionSummary, setNutritionSummary] = useState({
    carbohydrates: 0,
    protein: 0,
    fat: 0,
  });

  // Assume the user ID is stored in local storage
  const userId = localStorage.getItem("userid");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://wellnav-backend.vercel.app/api/dashboard?userid=${userId}`);
        setDailyCalories(response.data.dailyCalories || 0);
        setNutritionSummary(response.data.nutritionSummary || {
          carbohydrates: 0,
          protein: 0,
          fat: 0,
        });
      } catch (error) {
        console.error("Error fetching food logs:", error);
      }
    };

    fetchData();
  }, [userId]);

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
                    <CalorieChart takenCalories={dailyCalories} recommendedCalories={2000} />
                  </div>
                </div>
                {/* REMINDER */}
                <div className="Dashboard-Reminder">
                  <h1>Pengingat</h1>
                  <div className="spacing-br">
                    <div className="Dashboard-Pengingat">
                      <h1>
                        Sudahkah <br /> anda
                        <br /> minum?
                      </h1>
                      <p>4 Liter/hari</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* KANAN*/}
            <div className="Dashboard-Right">
              <div className="Dashboard-Calender">
                <KalenderDashboard />
              </div>
              {/* PELACKAN NUTRISI*/}
              <NutritionDashboard nutritionSummary={nutritionSummary} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;