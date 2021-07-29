import React from 'react'
import IMG_NOT_FOUND from "../images/not_found.png"


function Seasons({seasons}) {
    console.log(seasons)
    return (
            <div>
                <p>No of seasons: {seasons.length}</p>
            {seasons.map((v)=>{
                return(
                    <div>
                        
                        <p>Season {v.number}</p>
                        <img src={v.image?v.image.medium:IMG_NOT_FOUND} alt="season" />
                        <p>No of episodes: {v.episodeOrder}</p>
                    </div>
                )
            })}
            </div>
    )
}

export default Seasons
