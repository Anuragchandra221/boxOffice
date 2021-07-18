import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {getApi} from "./misc/config"
function ShowInfo() {
    const {id} = useParams()
    const [show, setShow] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(
        ()=>{
            let isMounted=true
            getApi(`/shows/${id}?embed[]=episodes&embed[]=cast`).then(results=>{
                if(isMounted){
                    setShow(results)
                    setIsLoading(false)
                }
                
            }).catch(err=>{
                if(isMounted){
                    setError(err)
                    setIsLoading(false)
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
            {
                show.name
            }
        </div>
        )
    }
    
    
}

export default ShowInfo
