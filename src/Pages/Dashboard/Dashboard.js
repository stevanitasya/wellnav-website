import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFoodLogs, setNutritionSummary } from "../../redux/actions";
import CalorieChart from "../../components/CalorieChart/CalorieChart";
import NutritionDashboard from "../../components/NutritionDashboard/NutritionDashboard";
import Header from "../../components/Header/Header";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { takenCalories, recommendedCalories } = useSelector((state) => state);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/foodlogs/" + new Date().toISOString().split('T')[0]);
        dispatch(setFoodLogs(response.data.foodLogs));
        dispatch(setNutritionSummary(response.data.nutritionSummary));
      } catch (error) {
        console.error("Error fetching food logs:", error);
      }
    };

    fetchUserData();
  }, [dispatch]);

  return (
    <div className="App">
      <CollapseSideBar />
      <div className="Dashboard-Header">
        <Header />
        <div className="Dashboard-Container">
          <div className="Dashboard-Content">
            <div className="Dashboard-Left">
              <div className="Dashboard-Req">
                <h1>Rekomendasi Makanan Hari ini.</h1>
                <Link to="/Recommendation">Lainnya...</Link>
              </div>
              <div className="Dashboard-Fitur">
                <div className="Dashboard-Kalori">
                  <h1>Jumlah Kalori</h1>
                  <div className="Dashboard-Pengukur">
                    <CalorieChart takenCalories={takenCalories} recommendedCalories={recommendedCalories} />
                  </div>
                </div>
                <div className="Dashboard-Reminder">
                  <h1>Pengingat</h1>
                  <div className="Dashboard-Pengingat">
                    <h1>Sudahkah anda minum?</h1>
                    <p>4 Liter/hari</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Dashboard-Right">
              <NutritionDashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;