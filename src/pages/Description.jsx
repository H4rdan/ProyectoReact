import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Description.css";

function Description() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/pokemon/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="description">
      <div className="header-color">
        <h1>{pokemon?.name}</h1>
        <p>{pokemon?.id}</p>
        <img src={pokemon?.img} alt="" />
      </div>
      <div>
        <p>{pokemon?.type}</p>
        <p>About</p>
        <div>
          <div>
            <p>{pokemon?.weight} kg</p>
            <p>Weight</p>
          </div>
          <div>
            <p>{pokemon?.height} m</p>
            <p>Height</p>
          </div>
          <div>
            <p>{pokemon?.ability}</p>
            <p>Moves</p>
          </div>
        </div>
        <p>{pokemon?.txt}</p>
        <p>Base Stats</p>
        <p>HP 0{pokemon?.hp}</p>
        <p>ATK 0{pokemon?.attack}</p>
        <p>DEF 0{pokemon?.defense}</p>
        <p>SATK 0{pokemon?.special_attack}</p>
        <p>SDEF 0{pokemon?.special_defense}</p>
        <p>SPD 0{pokemon?.speed}</p>
      </div>
    </main>
  );
}

export default Description;
