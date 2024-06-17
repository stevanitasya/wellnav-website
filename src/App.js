import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Recommendation from "./Pages/Recommendation/Recommendation";
import WaterTracking from "./Pages/WaterTracking/WaterTracking";
import LandingPage from "./Pages/LandingPage/LandingPage";
import FAQ from "./Pages/FAQ/FAQ";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NutritionTracking from "./Pages/NutritionTracking/NutritionTracking/NutritionTracking";
import NutritionTrackingA from "./Pages/NutritionTracking/NutritionTrackingA/NutritionTrackingA";
import NutritionTrackingB from "./Pages/NutritionTracking/NutritionTrackingB/NutritionTrackingB";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ReminderNotification from "./Pages/ReminderNotification/ReminderNotification";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from "./Pages/Profile/Profile";
import FoodDetail from "./components/FoodCatalogue/FoodDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="Recommendation" element={<Recommendation />} />
          <Route path="WaterTracking" element={<WaterTracking />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/nutrition-tracking" element={<NutritionTracking />} />
          <Route path="/nutrition-tracking/food-choices" element={<NutritionTrackingA />} />
          <Route path="/nutrition-tracking/food-choices/nutrition-data" element={<NutritionTrackingB />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/reminder-notification" element={<ReminderNotification />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/food-detail/:id" element={<FoodDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
