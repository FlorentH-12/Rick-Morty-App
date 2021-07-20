import React from 'react';
import { useHistory } from 'react-router-dom';

function Char( {character} ) {

    let {name, image} = character;
    let history = useHistory();
    return (
        <div className="card black character" onClick={() => history.push(`/character/${name}`)}>

            <div>
                <img alt={name} src={image} />
            </div>
            <div className="card-content">
                <strong className="green-text">{name}</strong>
            </div>

        </div>
    );
}

export default Char; 