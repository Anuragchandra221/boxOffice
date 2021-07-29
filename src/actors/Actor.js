import React from 'react'
import {Link} from "react-router-dom"
import { StyledGrid } from '../style'

function Actor({name, image, gender, birth, death, id}) {
    return (
        <div className="col-md-4  mt-4 d-flex justify-content-center align-items-center">
     <StyledGrid>
        <h1>{name}</h1>
            {image?<img src={image} alt="show" />:null}
            <p>{gender}</p>
            <p>{birth}</p>
            {death? <p>Died on {death}</p>:<p>Alive</p>}
            <div>
                <Link to={`/shows/${id}`}>Read more</Link>
                <button>Star</button>
            </div>
            </StyledGrid>
            
        </div>
    )
}

export default Actor
