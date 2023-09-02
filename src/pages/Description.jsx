import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Description.css";
import { Link } from "react-router-dom";


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
            <div className="botones">
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
            </div>
            <button className="backward">
                <Link to={`/`}>
                    <img src="../icons/arrow_back.png" alt="" />
                </Link>
            </button>
        </main>
    );
}

export default Description;
