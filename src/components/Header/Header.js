import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "./Header.css";
import Profile from "../../Assets/Profile.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("Jane");
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/users/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [backendUrl, token]);

  const navigateToProfile = () => {
    navigate("/profile");
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const query = event.target.value.toLowerCase();
      if (query.includes("dashboard")) {
        navigate("/dashboard");
      } else if (query.includes("recommendation")) {
        navigate("/recommendation");
      } else if (query.includes("remindernotification")) {
        navigate("/reminder-notification");
      } else if (query.includes("nutritiontracking")) {
        navigate("/nutrition-tracking");
      } else if (query.includes("water tracking")) {
        navigate("/water-tracking");
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
            <input type="text" placeholder="Cari" onKeyDown={handleSearch} />
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
