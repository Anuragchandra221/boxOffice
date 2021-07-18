import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { getApi } from '../misc/config'
import ShowGrid from '../show/ShowGrid'
import ActorGrid from '../actors/ActorGrid'

function Home() {
    const [input, setInput] = useState("")
    const onInputChange = (ev)=>{
        setInput(ev.target.value)
    }
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
                <div className="container-fluid mt-3">
                        <div className="row d-flex justify-content-center">
                        <ShowGrid data={results}/>
                        </div>
                    </div>
                :
                <ActorGrid data={results} />
            )
            
            
        }
        return null
        
    }
    return (
        <MainPageLayout>

            
            <input type="text" value={input} onKeyDown={onKeyDown} onChange={onInputChange} />
            <label htmlFor="showSearch">
                shows
                <input id="showSearch" type="radio" checked={isShow} value="shows" onChange={radioChange}/>
            </label>
            <label htmlFor="actorSearch">
                Actors
                <input id="actorSearch" type="radio" checked={!isShow} value="people" onChange={radioChange}/>
            </label>
            <button type="button" onClick={onSearch}>Search</button>
            
            {render()}
        </MainPageLayout>
        
    )
}

export default Home
