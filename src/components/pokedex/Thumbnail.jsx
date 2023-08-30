import React from 'react'
import "../../styles/Thumbnail.css"

function Thumbnail(props) {
    return (
        <div className='thumbnail-content'>
            <p className='pokemon-number'>{props.number}</p>
            <img className='pokemon-img' src={props.img} />
            <p className='pokemon-name'>{props.name}</p>
        </div>
    )
}

export default Thumbnail