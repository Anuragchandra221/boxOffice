import React from 'react'
import Show from './Show'
import IMG_NOT_FOUND from "../images/not_found.png"

function ShowGrid({data}) {
    console.log(data)
    return(
        data.map((val)=>{
                return(
                    
                    <Show key={val.show.id} name={val.show.name} image={val.show.image?val.show.image.medium:IMG_NOT_FOUND} summary={val.show.summary} id={val.show.id} />
                )
        })
    )
}

export default ShowGrid
