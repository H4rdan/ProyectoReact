import React, { useEffect, useState } from "react";
import SearchBar from "../components/pokedex/SearchBar";
import Thumbnail from "../components/pokedex/Thumbnail";
import "../styles/Pokedex.css";
import { Link } from "react-router-dom";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokedata, setPokedata] = useState([]);
  const [sortBy, setSortBy] = useState("Number");
  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.table(data[1]);
        setPokedata([...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sortPokemon = (pokemonList) => {
    if (sortBy === "Number") {
      // Ordenar por número (id)
      return pokemonList.slice().sort((a, b) => a.id - b.id);
    } else if (sortBy === "Alphabetic") {
      // Ordenar alfabéticamente por nombre
      return pokemonList.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
    return pokemonList;
  };
  const handleSortChange = (selectedOption) => {
    setSortBy(selectedOption);
  };


  return (
    <>
      <div className="pokedex-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} sortBy={sortBy} handleSortChange={handleSortChange} />
        <main className="thumbnail-container">
          {sortPokemon(pokedata.filter((pokemon) => {
            const searchTermToLower = searchTerm.toLowerCase();
            const nameToLower = pokemon.name.toLowerCase();
            return nameToLower.includes(searchTermToLower) || pokemon.id.toString().includes(searchTermToLower);
          }))
            .map((pokemon) => {
              return (
                <Link to={`/description/${pokemon.id}`} className="links">
                  <Thumbnail
                    number={`#${String(pokemon.id).padStart(3, "0")}`}
                    img={pokemon.img}
                    name={`${pokemon.name
                      .charAt(0)
                      .toUpperCase()}${pokemon.name.slice(1)}`}
                  />
                </Link>
              );
            })}
        </main>
      </div>
    </>
  );
}

export default Pokedex;
