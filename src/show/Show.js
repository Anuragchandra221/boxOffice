import React from 'react'
import {Link} from "react-router-dom"
import { StyledGrid } from '../style'

function Show({name, image,summary, id, onStarClick, isStarred }) {

    const summaryText = summary?`${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`:"No description"

    return (
        
            <div className="col-md-3  mt-4 d-flex justify-content-center align-items-center" style={
                {
                    width: "100%"
                }
            }>
                <StyledGrid className="shadow mb-4">
                
                {image?<img src={image} alt="show" />:null}
                <h1 className="mt-3 text-center">{name}</h1>
                <p className="mt-2 "  >{summaryText}</p>
                <div className="bottom p-3">
                    <div style={{
                        width: "max-content"
                    }}  className="mr-auto">
                    <Link  to={`/show/${id}`}>Read more</Link>

                    </div>
                    <div style={{
                        width: "max-content"
                    }} className="ml-auto">
                    <button className=  { !isStarred? "btn btn-outline-primary":"btn btn-primary"} onClick={onStarClick}>{isStarred?"Starred":"Star"}</button>
                    </div>
                    
                </div>
                </StyledGrid>
                
            </div>
            
    )
}

export default Show
