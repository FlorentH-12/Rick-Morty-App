import React from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom'

function Episode ({episode}) {

    let {name, characters, id} = episode
    let history = useHistory();
    let {url} = useRouteMatch();
    return (
        <div className="card black" onClick={() => history.push(`${url}/${id}`)}>
            <h4>{name}</h4>
            <ul>
                <li><strong>Episode: </strong>{episode.episode}</li>
                <li><strong>Charaters: </strong>{characters.length}</li>

            </ul>
            <div></div>
        </div>
    );
}

export default Episode;