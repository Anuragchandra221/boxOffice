import React from 'react'
import {Link} from "react-router-dom"

function Show({name, image,summary, id }) {

    return (
        
            <div className="col-md-3">
                <h1>{name}</h1>
                {image?<img src={image} alt="show" />:null}
                <p>{summary}</p>
                <div>
                    <Link to={`/shows/${id}`}>Read more</Link>
                    <button>Star</button>
                </div>
            </div>
            
    )
}

export default Show
