import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import {Character_API, Episode_API} from '../api/api';
import Nobody from '../Components/Nobody/index';


function CharacterDetails({match}){

    // Character hook for character data
    let {id} = match.params;
    let [charDetails, setCharDetails] = useState(null);

    useEffect(() => {
        try {        
            fetch(`${Character_API}/${id}`)
                .then(res => res.json())
                .then(res => setCharDetails(res))
                .catch(err => console.log(err))
        }catch(e){
            console.log(e)
        }
    }, [id])

    if(!charDetails){
        return <Nobody/>
    }

    let  {image, name, status, location, episode, gender} = charDetails;

    return (
        <div class="container">
            <br/>
            <Link to="/home">Back</Link>
            
            <div class="card">
                <h2 class="card-title">{name}</h2>
                <br/>
                <div>
                    <div>
                        <img alt={name} src={image}/>
                    </div>
                    <div>
                        <ul  class="list-group list-group-flush">
                            <li class="card-text list-group-item"><strong>Name: </strong>{name}</li>
                            <li class="card-text list-group-item"><strong>Gender: </strong>{gender}</li>
                            <li class="card-text list-group-item"><strong>Status: </strong>{status}</li>
                            <li class="card-text list-group-item card-link"><strong>Location: </strong><Link to={`/locations/${location.url.split('/').pop()}`}>{location.name}</Link></li>
                            {episode.map(episode => {
                                return (
                                    <div class="card-text list-group-item">
                                        <li class="card-text list-group-item card-link"><strong>Episode: </strong><Link to={`/episodes/${episode.split('/').pop()}`}>{episode.split('/').pop()}</Link></li>
                                    </div>
                                )
                                })}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    
   
}

export default CharacterDetails;