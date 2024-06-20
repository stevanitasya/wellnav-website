import React, { useState } from "react";
import Rekomendasi from "../../Assets/Rekomendasi.png";
import String from "../../Assets/string.png";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import FoodCatalog from "../../components/FoodCatalogue/FoodCatalog";
import Header from "../../components/Header/Header";
import "./Recommendation.css";

const Recommendation = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const filters = ["Semua", "Rendah Kalori", "Bebas Gluten", "Vegan", "Favorit"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="App">
      <CollapseSideBar />
      <Header />
      <div className="Recommendation-Container">
        <img src={Rekomendasi} alt="Rekomendasi" className="Rekomendasi-img" />
        <div className="Recommendation-Section">
          <h1>Rekomendasi Makanan <br /> Hari ini</h1>
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
            <p key={filter} className={activeFilter === filter ? "active" : ""} onClick={() => handleFilterClick(filter)}>{filter}</p>
          ))}
        </div>
      </div>
      <FoodCatalog activeFilter={activeFilter} />
    </div>
  );
};

export default Recommendation;