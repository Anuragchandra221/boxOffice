import React,{useReducer,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {getApi} from "./misc/config"
import ShowMainData from './show/ShowMainData'
import Details from './show/Details'
import Cast from './show/Cast'
import IMG_NOT_FOUND from "./images/not_found.png"
import Seasons from './show/Seasons'

function ShowInfo() {
    const {id} = useParams()
    const initialState = {
        show:null,
        isLoading:true,
        error:true
    }
    function reducer(prevState, action){
        switch(action.type){
            case "FETCH_SUCCESS":
                return {
                    show:action.show,
                    isLoading:false,
                    error:null
                }
                case "FETCH_FAILED":
                    return {
                        ...prevState,
                        isLoading:false,
                        error:action.error
                    }
            default:
                    return prevState
        }
    }
    const [{show, isLoading, error}, dispatch] = useReducer(reducer, initialState)
    useEffect(
        ()=>{
            let isMounted=true
            getApi(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
                if(isMounted){
                    dispatch({
                        type:"FETCH_SUCCESS",
                        show:results
                    })
                }
            }).catch(err=>{
                if(isMounted){
                    dispatch({
                        type:"FETCH_FAILED",
                        error:err.message
                    })
                }
                
            })
            return ()=>{
                isMounted = false
            }

        }, [id]
    )
    if(isLoading){
        return <div>Loading</div>
    }
    if(error){
        return (
            <div>
                error : {error}
            </div>
        )
    }
    if(show!=null){
        return(
            <div>
            <ShowMainData image={show.image?show.image.medium:IMG_NOT_FOUND} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres}  />
            <div>
                <h2>
                    Details
                </h2>
                <Details status={show.status} network={show.network?show.network:false} premiered={show.premiered} />
            </div>
            <div>
                <h2>
                    Seasons
                </h2>
                <Seasons seasons={show._embedded.seasons} />
            </div>
            <div>
                <h2>
                    Cast
                </h2>
                <Cast cast={show._embedded.cast}/>
            </div>
        </div>
        )
    }
}
export default ShowInfo
