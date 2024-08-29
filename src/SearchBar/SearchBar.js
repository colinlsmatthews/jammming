import React, { useState, useEffect } from "react";
import "./SearchBar.css"


function SearchBar(props) {
  const { Label = "", 
          Placeholder = "Search...", 
          ...restProps } = props;
  
  useEffect(() => {
    const input = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const label = document.getElementById("search-label");
    

    const expand = () => {
      searchBtn.classList.toggle("close");
      input.classList.toggle("square");
      label.classList.toggle("label-on");
    };
    
    if (searchBtn) {
      searchBtn.addEventListener("click", expand);
    }

    // Cleanup
    return () => {
      if (searchBtn) {
        searchBtn.removeEventListener("click", expand);
      }
    };
  }, []);


  return (
    <form id="content">
      <input type="text" name="input" class="input" id="search-input" ></input>
      <button type="reset" class="search" id="search-btn"></button>
      <label html-for="input" class="label-off" id="search-label">Test</label>
    </form>
  );
}

export default SearchBar;
