import React from 'react'
import Show from './Show'
import IMG_NOT_FOUND from "../images/not_found.png"
import { useShows } from '../misc/custom-hooks'

function ShowGrid({data}) {

    const [starredshows, dispatchStarred] = useShows()
    return(
        data.map(({show})=>{
            const isStarred = starredshows.includes(show.id)
            const onStarClick = ()=>{
                if (isStarred){
                    dispatchStarred({type:"REMOVE", showId:show.id})
                }else{
                    dispatchStarred({type:"ADD", showId:show.id})
                }

            }
                return(
                    
                    <Show key={show.id} 
                    name={show.name} 
                    image={show.image?show.image.medium:IMG_NOT_FOUND}
                     summary={show.summary}
                    id={show.id}
                     onStarClick={onStarClick} 
                     isStarred={isStarred}
                     />
                )
        })
    )
}

export default ShowGrid
