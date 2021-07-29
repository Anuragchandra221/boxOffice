import React,{useState, useEffect} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { getApi } from '../misc/config'
import { useShows } from '../misc/custom-hooks'
import ShowGrid from '../show/ShowGrid'

function Starred() {
    const [starred] = useShows()

    const [shows, setShows] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        if(starred && starred.length>0){
            const promises = starred.map((showId) => getApi(`/shows/${showId}`))
            
            Promise.all(promises).then(apiData => apiData.map(show => ({ show }))).then(results => {
                setShows(results)
                setIsLoading(false)
            }).catch( err => {
                setError(err.message)
                setIsLoading(false)
            })
        }else{

        }
    })
    return (
        <MainPageLayout>
           {isLoading && <div>The page is still loading</div>}
           {error && <div>Error occured: {error}</div>}
           {!isLoading&&!shows && <div>No shows were added</div>}
           {!isLoading&&shows && !error && <ShowGrid data={shows}/>}
        </MainPageLayout>
        
    )
}

export default Starred
