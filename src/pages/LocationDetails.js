import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Location_API } from '../api/api';
import Nobody from '../Components/Nobody/index';

function LocationDetails({match, history}) {

    let {id} = match.params
    let [locationDetails, setLocationDetails] = useState(null);
    let [residents, setResidents] =  useState(null);

    useEffect(()=> {
        try{
            fetch(`${Location_API}/${id}`)
                .then(res => res.json())
                .then(res => {
                    setLocationDetails(res);
                    if(res.residents && Array.isArray(res.residents)){
                        Promise.all(res.residents.map(resident => fetch(resident)))
                        .then(responses => Promise.all(responses.map(res => res.json())))
                        .then  (res => setResidents(res))
                    }
                })
                .catch(err => console.log(err))
        }catch(e){
            console.log(e)
        }
    }, [id])

    if(!locationDetails){
        return <Nobody/>
    }

    let {name, type, dimension} = locationDetails
    return (
        <div class="container ">
            <br/>
            <Link to="/locations">Back</Link>
            <div class="card">
                <h2 class="card-header">{name}</h2>
                <br/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Dimension: </strong> {dimension}</li>
                    <li class="list-group-item"><strong>type: </strong> {type}</li>
                </ul>
                <br/>
           </div>
           <div class="container "> 
                <h4>Characters</h4>
                <br/>
                <div >
                    <div class="row row-cols-1 row-cols-md-4 g-4 ">
                    {residents && Array.isArray(residents) && residents.map(({ id, name, image}) => {
                        return (
                            <div key = {id} onClick={() => history.push(`/home/${id}`)}>
                                <img class="card-img-top" alt ={name} src={image}/>
                                <strong class="card text-center">{name}</strong>
                            </div>
                        )
                    })}
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LocationDetails;