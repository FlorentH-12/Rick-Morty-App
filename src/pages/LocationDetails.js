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
        <div>
            <br/>
            <Link to="/locations">Back</Link>
            <h2>{name}</h2>
            <br/>
            <ul className="collection">
                <li className="collection-item"><strong>Dimension: </strong> {dimension}</li>
                <li className="collection-item"><strong>type: </strong> {type}</li>
            </ul>
            <br/>
            <h4>Charaters</h4>
            <br/>
            <div className="row">
            {residents && Array.isArray(residents) && residents.map(({ id, name, image}) => {
                return (
                    <div className="col s2 avatar" key = {id} onClick={() => history.push(`/charaters/${id}`)}>
                        <img alt ={name} src={image}/>
                        <div>{name}</div>
                    </div>
                )
            })}
                
            </div>
        </div>
    )
}

export default LocationDetails;