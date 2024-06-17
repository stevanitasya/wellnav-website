import React, { useState } from "react";
import Rekomendasi from "../../Assets/Rekomendasi.png";
import String from "../../Assets/string.png";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import FoodCatalog from "../../components/FoodCatalogue/FoodCatalog";
import Header from "../../components/Header/Header";
import "./Recommendation.css";
 
const Recommendation = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const userId = "666fde9ca7d9380a078106a0"; 
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmZkNzI5YTdkOTM4MGEwNzgxMDYyOCIsImlhdCI6MTcxODYwNTY5NiwiZXhwIjoxNzIxMTk3Njk2fQ.ES9k_fxTcMi0W822uFQzbtzXArhiJVCvSMYSuwzfQ28"; // Gantilah dengan token otorisasi yang valid
  const filters = ["All", "Rendah Kalori", "Bebas Gluten", "Vegan", "Favorites"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  }; 

  return (
    <div className="App">
      <CollapseSideBar />
      <div className="Recommendation-Header">
        <Header />
        <div className="Recommendation-Container">
          <img src={Rekomendasi} alt="Rekomendasi" className="Rekomendasi-img" />
          <div className="Recommendation-Section">
            <h1>
              Rekomendasi Makanan <br />Hari ini
            </h1>
            <p>Start a healthy life</p>
          </div>
        </div>
        <div className="Food-Container">
          <div className="Food-Section">
            <img src={String} alt="String" className="String-img left-img" />
            <p className="center-text">Choose your ratio</p>
            <img src={String} alt="String" className="String-img right-img" />
          </div>
          <div className="Food-Section2">
            {filters.map((filter) => (
              <p
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </p>
            ))}
          </div>
        </div>
        <FoodCatalog userId={userId} token={token} activeFilter={activeFilter} />
      </div>
    </div>
  );
};

export default Recommendation;
