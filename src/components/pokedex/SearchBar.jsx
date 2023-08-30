import React from 'react'
import "../../styles/SearchBar.css"

function SearchBar() {

    return (
        <nav>
            <h1>
                <img src="./icons/pokeball.png" alt="" />
                Pokédex
            </h1>
            <div className="browse">
                <img src="./icons/search.png" alt="" />
                <input type="text" placeholder="search" />
            </div>
        </nav>
    )
}

export default SearchBar