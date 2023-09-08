import React, { useState } from "react";
import "../../styles/SearchBar.css";

function SearchBar(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="container">

      <h1 className="pokedex-title">
        <img src="./icons/pokeball.png" alt="" className="poke-logo" />
        Pokédex
      </h1>
      <div className="browse-father">
        <input
          type="text"
          placeholder="Search"
          className="browse"
          value={props.searchTerm}
          onChange={(e) => props.setSearchTerm(e.target.value)}
        />
        <button className="modal" onClick={openModal}>
          <img src="./icons/tag.png" alt="" />
        </button>
        {isModalOpen && (
          <div className="modal-background">
            <div className="modal-container">
              <div className="modal-menu">
                <p>Sort by:</p>
                <label>
                  <input
                    type="checkbox"
                    checked={props.sortBy === "Alphabetic"}
                    onChange={() => props.handleSortChange("Alphabetic")}
                  />
                  Alphabetic
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={props.sortBy === "Number"}
                    onChange={() => props.handleSortChange("Number")}
                  />
                  Number
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
}

export default SearchBar;
