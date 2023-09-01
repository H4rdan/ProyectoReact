import React, { useEffect, useState } from "react";
import SearchBar from "../components/pokedex/SearchBar";
import Thumbnail from "../components/pokedex/Thumbnail";
import "../styles/Pokedex.css";
import { Link } from "react-router-dom";

function Pokedex() {
  const [pokedata, setPokedata] = useState([]);
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

  return (
    <>
      <div className="pokedex-container">
        <SearchBar />
        <main className="thumbnail-container">
          {pokedata.map((pokemon) => {
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
