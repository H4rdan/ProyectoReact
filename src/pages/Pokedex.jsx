import React, { useEffect, useState } from 'react'
import SearchBar from '../components/pokedex/SearchBar'
import Thumbnail from '../components/pokedex/Thumbnail'
import "../styles/Pokedex.css"



function Pokedex() {
    const [pokedata, setPokedata] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/pokemon").then((res) => {
            return res.json();
        })
            .then(data => {
                console.table(data[1])
                setPokedata([...data])

            })
            .catch(error => { console.log(error) })
    }, [])


    return (
        <>
            <div className='pokedex-container'>
                <SearchBar />
                <main className='thumbnail-container'>
                    {pokedata.map(pokemon => {
                        return (<Thumbnail
                            number={pokemon.number}
                            img={pokemon.img}
                            name={pokemon.name}
                        />)
                    })}

                </main>
            </div>
        </>
    )
}

export default Pokedex