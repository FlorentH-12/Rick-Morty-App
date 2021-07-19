import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Character_API} from '../api/api'

function CharacterDetails({match}){

    let {id} = match.params;
    let [charDetails, setCharacterDetails] = useState(null);

    useEffect(() => {
        try {        
            fetch(`${Character_API}/${id}`)
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }catch(e){
            console.log(e)
        }
    }, [id])

    return (
        <div className="container">
            <br/>
            <Link to="/">Back</Link>
            <h2>Charcater Details - {id} </h2>
        </div>
    );
}

export default CharacterDetails;