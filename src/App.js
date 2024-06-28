import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Recommendation from "./Pages/Recommendation/Recommendation";
import WaterTracking from "./Pages/WaterTracking/WaterTracking";
import LandingPage from "./Pages/LandingPage/LandingPage";
import FAQ from "./Pages/FAQ/FAQ";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import NutritionTracking from "./Pages/NutritionTracking/NutritionTracking/NutritionTracking";
import NutritionTrackingA from "./Pages/NutritionTracking/NutritionTrackingA/NutritionTrackingA";
import NutritionTrackingB from "./Pages/NutritionTracking/NutritionTrackingB/NutritionTrackingB";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ReminderNotification from "./Pages/ReminderNotification/ReminderNotification";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from "./Pages/Profile/Profile";
import FoodDetail from "./components/FoodCatalogue/FoodDetail";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/water-tracking" element={<WaterTracking />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/nutrition-tracking" element={<NutritionTracking />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/nutrition-tracking/food-choices" element={<NutritionTrackingA />} />
          <Route path="/nutrition-tracking/food-choices/nutrition-data" element={<NutritionTrackingB />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/reminder-notification" element={<ReminderNotification />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/food-detail/:id" element={<FoodDetail />} />
          
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;