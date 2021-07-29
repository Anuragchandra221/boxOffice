import React,{useState,useCallback} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { getApi } from '../misc/config'
import ShowGrid from '../show/ShowGrid'
import ActorGrid from '../actors/ActorGrid'
import { useLastQuery, useWhyDidYouUpdate } from '../misc/custom-hooks'

function Home() {
    const [input, setInput] = useLastQuery()

    const onInputChange = useCallback((ev)=>{
        setInput(ev.target.value)
    },[setInput])
    const [isShow, setIsShow] = useState(true)
    const onKeyDown = (ev)=>{
        if(ev.KeyCode === 13){
            onSearch()
        }
    }
    const [results, setResults] = useState(null)
    const onSearch=()=>{
        let whatToSearch = isShow?"shows":"people"
        getApi(`/search/${whatToSearch}?q=${input}`).then(result=>{
            setResults(result)
            
        })
        
    }
    const radioChange=(ev)=>{
        if(ev.target.value === "shows"){
            setIsShow(true)
        }
        if(ev.target.value === "people"){
            setIsShow(false)
        }
        
    }
    useWhyDidYouUpdate("home", { onInputChange, onkeydown })

    const render=()=>{
        if(results && results.length===0){
            return (
                <div>
                    <h1>No results found</h1>
                </div>
            )
        }
        if(results && results.length>0){
            return(
                results[0].show?
                <div className="container mt-3">
                        <div className="row d-flex justify-content-center">
                        <ShowGrid data={results}/>
                        </div>
                    </div>
                :
                <div className="container mt-3">
                    <div className="row d-flex justify-content-center">
                        <ActorGrid data={results} />
                    </div>
                </div>
                
                
            )
            
            
        }
        return null
        
    }
    return (
        <MainPageLayout>

            <div className="d-flex align-items-center searchBar" >
            <input type="text" value={input} placeholder="Search for something" className="inputBar" onKeyDown={onKeyDown} onChange={onInputChange} />
            <div className="mt-3">
            <label htmlFor="showSearch" className="mr-2">
                <input id="showSearch" type="radio" checked={isShow} className="radio" value="shows" onChange={radioChange}/>
                Shows
            </label>
            <label htmlFor="actorSearch">
                <input id="actorSearch" type="radio" checked={!isShow} className="radio" value="people" onChange={radioChange}/>
                Actors
            </label>
            </div>
            
            <button type="button" className="btn btn-primary" onClick={onSearch}>Search</button>
            
            {render()}
            </div>
            
        </MainPageLayout>
        
    )
}

export default Home
