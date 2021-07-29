import React from 'react'

function ShowMainData({image, name, rating, summary, tags}) {
    const summaryText = summary?`${summary.replace(/<.+?>/g, '')}...`:"No description"
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>{rating.average?rating.average:null}</p>
            <div >{summaryText}</div>
        </div>
    )
}

export default ShowMainData
