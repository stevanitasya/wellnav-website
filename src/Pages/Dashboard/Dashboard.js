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
import { setDashboardData } from "../../redux/slices/dashboardSlice";

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
        dispatch(setDashboardData(response.data));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchUserData();
  }, [dispatch, token, backendUrl]);

  const { dailyCalories, nutritionSummary } = useSelector((state) => state.dashboard);

  return (
    <div className="App">
      <CollapseSideBar />
      <div className="Dashboard-Header">
        <Header />
        <div className="Dashboard-Container">
          <div className="Dashboard-Content">
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
                <a href="/Recommendation">Lainnya...</a>
              </div>
              <div className="Dashboard-Fitur">
                <div className="Dashboard-Kalori">
                  <h1>Jumlah Kalori</h1>
                  <div className="Dashboard-Pengukur">
                    <CalorieChart
                      takenCalories={dailyCalories}
                      recommendedCalories={2000} // or any recommended calories value
                    />
                  </div>
                </div>
                <div className="Dashboard-Reminder">
                  <h1>Pengingat</h1>
                  <div className="spacing-br">
                    <div className="Dashboard-Pengingat">
                      <h1>
                        Sudahkah <br /> anda <br /> minum?
                      </h1>
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
                carbohydrates={nutritionSummary.carbohydrates}
                protein={nutritionSummary.protein}
                fat={nutritionSummary.fat}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;