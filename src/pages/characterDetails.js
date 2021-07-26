import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import {Character_API, Episode_API} from '../api/api';
import Nobody from '../Components/Nobody/index';
import Footer from '../Components/Footer';
import '../styles/App.css';
import background from "../styles/rickandmorty-background.gif"


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
        <div className='App'>
            <div class="container" >
                <br/>
                <Link  style={{color: "#7CD77C", fontFamily:'impact'}}  to="/home" >Back</Link>
                <br/>
                <br/>
                <div class="card" style={{backgroundColor: "#D3E8D3"}}  >
                    <h2 class="card-title" style={{backgroundColor: "#D3E8D3"}}>{name}</h2>
                    <div >
                        <div>
                            <img alt={name} src={image}/>
                        </div>
                        <div>
                            <ul  class="list-group list-group-flush" >
                                <li style={{backgroundColor: "#D3E8D3"}} class="card-text list-group-item"><strong>Name: </strong>{name}</li>
                                <li style={{backgroundColor: "#D3E8D3"}} class="card-text list-group-item"><strong>Gender: </strong>{gender}</li>
                                <li style={{backgroundColor: "#D3E8D3"}} class="card-text list-group-item"><strong>Status: </strong>{status}</li>
                                <li style={{backgroundColor: "#D3E8D3"}} class="card-text list-group-item card-link"><strong>Location: </strong><Link to={`/locations/${location.url.split('/').pop()}`}>{location.name}</Link></li>
                                {episode.map(episode => {
                                    return (
                                        <div style={{backgroundColor: "#D3E8D3"}} class="card-text list-group-item">
                                            <li style={{backgroundColor: "#D3E8D3"}} class="card-text list-group-item card-link"><strong>Episode: </strong><Link to={`/episodes/${episode.split('/').pop()}`}>{episode.split('/').pop()}</Link></li>
                                        </div>
                                    )
                                    })}

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        <br/>
        <Footer/>
    </div>


    );

    
   
}

export default CharacterDetails;