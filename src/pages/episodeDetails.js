import React, { useEffect, useState } from 'react';
import { Episode_API } from '../api/api';
import Nobody from '../Components/Nobody/index';
import { Link } from 'react-router-dom';



function EpsiodeDetails({match, history}) {

    let {id} = match.params;
    let [episodeDetails, setEpisodeDetails] = useState(null);
    let [characters, setCharacters] = useState(null);

    useEffect(() => {
        try{
            fetch(`${Episode_API}/${id}`)
                .then(res => res.json())
                .then(res => {
                    setEpisodeDetails(res)
                    if(res.characters && Array.isArray(res.characters)){
                        Promise.all(res.characters.map(character => fetch(character)))
                            .then(responses => Promise.all(responses.map(res => res.json())))
                            .then(res => setCharacters(res))
                    }
                })
                .catch(err => console.log(err))
        }catch(e){
            console.log(e)
        }
    }, [id])

    if(!episodeDetails){
        return <Nobody/>
    }

    let {name, episode} = episodeDetails

    return (
        <div class="container">
            <br/>
            <Link to="/episodes">Back</Link>
            <div class="card">
                <h2 class="card-header">{name}</h2>
                <br/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Episode: </strong>{episode}</li>
                </ul>
                <br/>
            </div>

            <h4>Characters</h4>
            <div class="row row-cols-1 row-cols-md-4 g-4 ">
                {characters && Array.isArray(characters) && characters.map(({id, name, image}) => {
                    return (
                        <div key={id} onClick={() => history.push(`/home/${id}`)}>
                            <img class="card-img-top" alt={name} src={image}/>
                            <strong class="card text-center">{name}</strong>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}



export default EpsiodeDetails;