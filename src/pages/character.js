import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Character_API} from '../api/api';
import Nobody from '../Components/Nobody/index';


function CharacterDetails({match}){

    let {id} = match.params;
    let [charDetails, setCharacterDetails] = useState(null);

    useEffect(() => {
        try {        
            fetch(`${Character_API}/${id}`)
                .then(res => res.json())
                .then(res => setCharacterDetails(res))
                .catch(err => console.log(err))
        }catch(e){
            console.log(e)
        }
    }, [id])

    if(!charDetails){
        return <Nobody/>
    }

    let  {image, name, status, location, episode} = charDetails;

    return (
        <div className="container">
            <br/>
            <Link to="/">Back</Link>
            <h2>{id}</h2>
            <br/>
            <div className='charDetails'>
                <div>
                    <img alt={name} src={image}/>
                </div>
                <div>
                    <ul className="charContainer">
                        <li className="charDesc"><strong>Name: </strong>{id}</li>
                        <li className="charDesc"><strong>Status: </strong>{status}</li>
                        <li className="charDesc"><strong>Location: </strong>{location}</li>
                        <li className="charDesc"><strong>Episode: </strong>{episode}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetails;