import React from "react";
import "./SearchBar.css"

function SearchBar() {
  return (
    <div className="search-bar">
      <label htmlFor="search">Search:</label>
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default SearchBar;
