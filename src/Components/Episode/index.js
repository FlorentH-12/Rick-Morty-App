import React from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom'

function Episode ({episode}) {

    let {name, characters, id} = episode
    let history = useHistory();
    let {url} = useRouteMatch();
    return (
        <div class="card">
            <div onClick={() => history.push(`${url}/${id}`)}>
                <h4 class="bg-success" >{name}</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Episode: </strong>{episode.episode}</li>
                    <li class="list-group-item"><strong>Charaters: </strong>{characters.length}</li>
                </ul>
                <div></div>
            </div>

        </div>
    );
}

export default Episode;