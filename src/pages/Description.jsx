import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Description.css";
import { Link } from "react-router-dom";
import ProgressBar from "../components/description/ProgressBar";

function Description() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const parsedId = parseInt(id);
  const showPreviousButton = parsedId > 1;
  const showNextButton = parsedId < 151;



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
  }, [id]);

  return (
    <main className={`description ${pokemon?.type[0]}`}>
      <div className="description-content">
        <div className="header">
          <div className="header-content">
            <button className="backward">
              <Link to={`/`}>
                <img src="../icons/arrow_back.png" alt="" />
              </Link>
            </button>
            <h1 className="name">{`${pokemon?.name
              .charAt(0)
              .toUpperCase()}${pokemon?.name.slice(1)}`}</h1>
            <p className="id">{`#${String(pokemon?.id).padStart(3, "0")}`}</p>
          </div>
        </div>
        <div className="photo-container">
          {showPreviousButton && (
            <button className="previous">
              <Link to={`/description/${parsedId - 1}`}>
                <img src="../icons/chevron_left.png" alt="" />
              </Link>
            </button>
          )}

          {showNextButton && (
            <button className="next">
              <Link to={`/description/${parsedId + 1}`}>
                <img src="../icons/chevron_right.png" alt="" />
              </Link>
            </button>
          )}
          <img src={pokemon?.img} alt="" className="photo" />
        </div>
        <div className="stadistics">
          {pokemon && (
            <div className="type-container">
              <p className={`type ${pokemon?.type[0]}`}>
                {pokemon?.type[0].charAt(0).toUpperCase() + pokemon?.type[0].slice(1)}
              </p>
              {pokemon?.type[1] && (
                <p className={`type ${pokemon?.type[1]}`}>
                  {pokemon?.type[1].charAt(0).toUpperCase() + pokemon?.type[1].slice(1)}
                </p>
              )}
            </div>
          )}
          <p className="about">About</p>
          <div className="size-container">
            <div>
              <div className="size">
                <img src="../icons/weight.png" alt="" />
                <p>{pokemon?.weight} kg</p>
              </div>
              <p className="size-subtitle">Weight</p>
            </div>
            <div>
              <div className="size">
                <img className="rotated-img" src="../icons/straighten.png" alt="" />
                <p>{pokemon?.height} m</p>
              </div>
              <p className="size-subtitle">Height</p>
            </div>
            <div>
              {pokemon && (
                <div className="ability">
                  {pokemon.ability.map((ability, index) => (
                    <p key={index}>
                      {ability.charAt(0).toUpperCase() + ability.slice(1)}
                    </p>
                  ))}
                </div>)}
              <p className="size-subtitle">Moves</p>
            </div>
          </div>
          <div className="poke-info">
            <p>{pokemon?.txt}</p>
          </div>
          <p className="base-stats">Base Stats</p>
          <div className="stats-container">
            <div className="stats-title">
              <p>HP</p>
              <p>ATK</p>
              <p>DEF</p>
              <p>SATK</p>
              <p>SDEF</p>
              <p>SPD</p>
            </div>
            <div className="stats-props">
              <div className="stats-bars">
                <p>{` ${String(pokemon?.hp).padStart(3, "0")}`}</p>
                <ProgressBar value={pokemon?.hp} maxValue={255} />
              </div>
              <div className="stats-bars">
                <p>{` ${String(pokemon?.attack).padStart(3, "0")}`}</p>
                <ProgressBar value={pokemon?.attack} maxValue={255} />
              </div>
              <div className="stats-bars">
                <p>{` ${String(pokemon?.defense).padStart(3, "0")}`}</p>
                <ProgressBar value={pokemon?.defense} maxValue={255} />
              </div>
              <div className="stats-bars">
                <p>{` ${String(pokemon?.special_attack).padStart(3, "0")}`}</p>
                <ProgressBar value={pokemon?.special_attack} maxValue={255} />
              </div>
              <div className="stats-bars">
                <p>{` ${String(pokemon?.special_defense).padStart(3, "0")}`}</p>
                <ProgressBar value={pokemon?.special_defense} maxValue={255} />
              </div>
              <div className="stats-bars">
                <p>{` ${String(pokemon?.speed).padStart(3, "0")}`}</p>
                <ProgressBar value={pokemon?.speed} maxValue={255} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Description;
