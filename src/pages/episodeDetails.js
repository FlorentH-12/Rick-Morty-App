import React, { useEffect, useState } from 'react';
import { Episode_API } from '../api/api';
import Nobody from '../Components/Nobody/index';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';



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
        <div className='App'>
            <div class="container">
                <br/>
                <Link className='back' to="/episodes">Back</Link>
                <br/>
                <br/>
                <div class="card" >
                    <h2 class="card-header"style={{backgroundColor: "#D3E8D3"}}>{name}</h2>
                    <ul class="list-group list-group-flush" >
                        <li class="list-group-item" ><strong>Episode: </strong>{episode}</li>
                    </ul>
                </div>
                <br/>

                <h4 style={{color: "#7CD77C", fontSize:'250%'}}>Characters</h4>
                <br/>
                <div class="row row-cols-1 row-cols-md-4 g-4 " >
                    {characters && Array.isArray(characters) && characters.map(({id, name, image}) => {
                        return (
                            <div key={id} onClick={() => history.push(`/home/${id}`)} >
                                <img class="card-img-top" alt={name} src={image}/>
                                <strong class="card text-center" style={{backgroundColor: "#D3E8D3"}}>{name}</strong>
                            </div>
                        )
                    })}

                </div>
            </div>
            <Footer/>
        </div>
    )
}



export default EpsiodeDetails;