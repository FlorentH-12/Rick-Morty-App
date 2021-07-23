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
        <div className="container">
            <br/>
            <Link to="/episodes">Back</Link>
            <h2>{name}</h2>
            <br/>
            <ul className="collection">
                <li className="collection-item"><strong>Epsiode: </strong>{episode}</li>
            </ul>
            <br/>
            <h4>Characters</h4>
            <div className="row">
                {characters && Array.isArray(characters) && characters.map(({id, name, image}) => {
                    return (
                        <div className="col s2 avatar" key={id} onClick={() => history.push(`/charaters/${id}`)}>
                            <img alt={name} src={image}/>
                            <div>{name}</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}



export default EpsiodeDetails;