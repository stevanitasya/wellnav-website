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
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/users/dashboard?userid=666fd729a7d9380a07810628`);
        dispatch(setFoodLogs(response.data.foodLogs));
        dispatch(setNutritionSummary(response.data.nutritionSummary));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [dispatch, backendUrl]);

  const { takenCalories, recommendedCalories } = useSelector((state) => state.nutritionSummary || {});

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
                <Link to="/Recommendation">Lainnya...</Link>
              </div>
              <div className="Dashboard-Fitur">
                <div className="Dashboard-Kalori">
                  <h1>Jumlah Kalori</h1>
                  <div className="Dashboard-Pengukur">
                    <CalorieChart
                      takenCalories={takenCalories || 0}
                      recommendedCalories={recommendedCalories || 2000}
                    />
                  </div>
                </div>
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
            <div className="Dashboard-Right">
              <div className="Dashboard-Calender">
                <KalenderDashboard />
              </div>
              <NutritionDashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;