import React from 'react'


function Cast({cast}) {
    return (
        <div>
            {cast.map((val)=>{
                return(
                    <div key={val.person.id}>
                        <img src={val.person.image.medium} alt={val.person.name}/>
                    <p>{val.person.name} / {val.character.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Cast
