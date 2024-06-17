import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CollapseSideBar.css";

const CollapseSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Recommendation">Rekomendasi Makanan</Link>
            {/* <a href="#services">Rekomendasi Makanan</a> */}
          </li>
          <li>
            <Link to="/nutrition-tracking">Pelacakan Nutrisi</Link>
          </li>
          <li>
            <Link to="/WaterTracking">Pelacakan Air Putih</Link>
          </li>
          <li>
            <Link to="/Reminder-Notification">Notifikasi dan Pengingat</Link>
          </li>
          <li>
            <Link to="/LandingPage">Keluar</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <i className="bi bi-list"></i>
      </div>
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default CollapseSidebar;
