import React from 'react'
import Actor from './Actor'
import IMG_NOT_FOUND from "../images/not_found.png"
function ActorGrid({data}) {
    return(
        <div>
            { data.map((val)=>{
                return(<Actor key={ val.person.id }
                        name={val.person.name}
                        image={val.person.image?val.person.image.medium:IMG_NOT_FOUND}
                        gender={val.person.gender}
                        birth={val.person.birthday}
                        death={val.person.deathday}
                        id={val.person.id}
                    />)})
            
        }
        </div>
       
    )
}

export default ActorGrid
