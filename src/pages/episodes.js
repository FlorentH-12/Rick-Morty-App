import React, { useEffect, useState } from 'react';
import { Episode_API } from '../api/api';
import Nobody from '../Components/Nobody/index';
import Episode from '../Components/Episode/index';
import Footer from '../Components/Footer';
import '../styles/App.css';
import Pagination from '../Components/Pagination/episodePagination';



function Episodes (props) {

    let[episodes, setEpisodes] = useState(null)
    let [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        try{
            fetch(Episode_API)
                .then(res => res.json())
                .then(res => res && res.results && Array.isArray(res.results) && setEpisodes(res.results))
                .catch(err => console.log(err))
        }catch(e){
            console.log(e)
        }
    }, [])

    if(!episodes){
        return <Nobody/>
    }


    return (
        <div className='App'>
            <div class="container" >
                <h2 className="titlePage" style={{color: "#7CD77C"}}>Episodes</h2>
                <br/>
                <div style={{textAlign: 'center'}}>
                <Pagination  setEpisodes={setEpisodes} setIsLoading={setIsLoading} />
                </div>
                <br/>
                <div class="row row-cols-1 row-cols-md-4 g-4 " >
                    {episodes.map(episode => {
                        return(
                            <div  key={episode.id} >
                                <Episode  episode={episode}/>
                            </div>
                        )
                    })}
                </div>
                <br/>
                <div style={{textAlign: 'center'}}>
                <Pagination  setEpisodes={setEpisodes} setIsLoading={setIsLoading} />
                </div>
            </div>
            <br/>
        <Footer/>
        </div>
    );
}

export default Episodes