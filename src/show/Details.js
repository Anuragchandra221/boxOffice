import React from 'react'

function Details({status, network, premiered,}) {
    return (
        <div>
            <p>Show status: {status}</p>
            <p>{network?network.name :null}</p>
            <p>{network?`From ${network.country.name}` :null}</p>
            <p>Premiered on: {premiered}</p>
        </div>
    )
}

export default Details
