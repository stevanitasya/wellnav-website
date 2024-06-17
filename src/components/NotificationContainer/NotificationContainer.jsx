import React from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import exampleImage from "../../Assets/Salad.png";
import { useNavigate } from "react-router-dom";
import "../NotificationContainer/NotificationContainer.css";

const DailyMeal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notificationData = [
    { id: 1, text: "Nikmati salad segar hari ini" },
    { id: 2, text: "Tetap terhidrasi, ayo minum air" },
    { id: 3, text: "Ide camilan sehat" },
  ];

  return (
    <div>
      {notificationData.map((item) => (
        <div key={item.id} className="notification-container">
          <div className="notification-image">
            <img src={exampleImage} alt="Notification" />
          </div>
          <div className="notification-info">
            <h1>{item.text}</h1>
            <h1 style={{ fontSize: "20px", color: "#9B8F8F" }}>
              20 menit lalu
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyMeal;
