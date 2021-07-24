import React from 'react';
import { useHistory } from 'react-router-dom';

function Character( {character} ) {

    let {id, name, image} = character;
    let history = useHistory();

    
    return (
        <div class="card text-center" >
            <div class="card-body" onClick={() => history.push(`home/${id}`)}>
                <div>
                    <img class="card-img-top" alt={name} src={image} />
                </div>
                <strong class="card-title">
                    {name}
                </strong>

            </div>

        </div>
    );
}

export default Character; 