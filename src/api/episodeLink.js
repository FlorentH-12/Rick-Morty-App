import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Episode_API } from '../api/api';
import Nobody from '../Components/Nobody/index';


function EpisodeLink (props) {

    let[episodeLink, setEpisodeLink] = useState(null)

    useEffect(() => {
        try{
            fetch(`${Episode_API}`)
                .then(res => res.json())
                .then(res => res && res.results && Array.isArray(res.results) && setEpisodeLink(res.results))
                .catch(err => console.log(err))
        }catch(e){
            console.log(e)
        }
    }, [])

    if(!episodeLink){
        return <Nobody/>
    }

    let {episode} = episodeLink

    return (
        <div class="card-text list-group-item">
        <li class="card-text list-group-item card-link"><strong>Episode: </strong><Link to={`/episodes/${Episode_API.split('/').pop()}`}>{episode}</Link>{episode}</li>
        </div>
    );
}

export default EpisodeLink