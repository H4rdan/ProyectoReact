import React from "react";
import "../../styles/SearchBar.css";

function SearchBar() {
  return (
    <nav>
      <h1 className="title">
        <img src="./icons/pokeball.png" alt="" className="poke-logo" />
        Pokédex
      </h1>
      <div className="browse-father">
        <input type="text" placeholder="Search" className="browse" />
        <button className="modal">
          <img src="./icons/tag.png" alt="" />
        </button>
      </div>
    </nav>
  );
}

export default SearchBar;
