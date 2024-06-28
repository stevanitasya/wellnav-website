import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "./Header.css";
import Profile from "../../Assets/Profile.png";

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const location = useLocation();
  const [username, setUsername] = useState("Jane");
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/users/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [backendUrl, token]);

  const navigateToProfile = () => {
    navigate("/profile");
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const query = event.target.value.toLowerCase().trim();
      if (query.includes("dashboard")) {
        navigate("/dashboard");
      } else if (query.includes("rekomendasi")) {
        navigate("/recommendation");
      } else if (
        query.includes("pengingat") ||
        query.includes("reminder notification")
      ) {
        navigate("/ReminderNotification");
      } else if (
        query.includes("nutrition tracking") ||
        query.includes("pelacakan nutrisi")
      ) {
        navigate("/NutritionTracking");
      } else if (
        query.includes("water tracking") ||
        query.includes("pelacakan air putih")
      ) {
        navigate("/WaterTracking");
      } else if (query.includes("about us")) {
        navigate("/AboutUs");
      } else if (query.includes("landing page") || query.includes("home")) {
        navigate("/LandingPage");
      } else {
        alert("Page not found");
      }
    }
  };

  return (
    <div className="Header">
      <div className="Header-Content">
        <h1>Hello, {username}</h1>
        <p>Mari hidup lebih sehat</p>
      </div>
      <div className="Header-Right">
        {location.pathname !== "/profile" && (
          <div className="Header-Search">
            <FaSearch className="Search-Icon" />
            <input
              type="text"
              placeholder="Cari"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        )}
        <div className="Profile-Icon">
          <img src={Profile} alt="Profile" onClick={navigateToProfile} />
        </div>
      </div>
    </div>
  );
};

export default Header;