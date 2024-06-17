import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    // Implement the search logic here
    console.log("Search query:", query);
  };

  return (
    <div className="input-group search-bar">
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleSearchClick}
      >
        <i className="bi bi-search"></i>
      </button>
      <input
        type="text"
        className="form-control"
        placeholder="Cari"
        aria-label="Search"
        aria-describedby="button-addon2"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
