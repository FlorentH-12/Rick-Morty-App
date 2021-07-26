import React, { useEffect, useState } from 'react';
import { Episode_API } from '../api/api';
import Nobody from '../Components/Nobody/index';
import Episode from '../Components/Episode/index';


function Episodes (props) {

    let[episodes, setEpisodes] = useState(null)

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
        <div class="container">
            <h2 className="titlePage" >Episodes</h2>
            <br/>
            <div class="row row-cols-1 row-cols-md-4 g-4 ">
                {episodes.map(episode => {
                    return(
                        <div key={episode.id} >
                            <Episode episode={episode}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Episodes