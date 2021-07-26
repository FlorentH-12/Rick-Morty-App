import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Location_API } from '../api/api';
import Nobody from '../Components/Nobody/index';
import Footer from '../Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className='App' >
            <div class="container ">
                <br/>
                <Link style={{color: "#7CD77C", fontFamily:'impact'}} to="/locations">Back</Link>
                <br/>
                <br/>
                <div class="card" >
                    <h2 class="card-header" style={{backgroundColor: "#D3E8D3"}}>{name}</h2>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" ><strong>Dimension: </strong> {dimension}</li>
                        <li class="list-group-item" ><strong>type: </strong> {type}</li>
                    </ul>
            </div>
            <div class="container "> 
            <br/>
                    <h4 className="titlePage" style={{color: "#7CD77C", fontSize:'250%'}}>Characters</h4>
                    <br/>
                    <div >
                        <div class="row row-cols-1 row-cols-md-4 g-4 ">
                        {residents && Array.isArray(residents) && residents.map(({ id, name, image}) => {
                            return (
                                <div key = {id} onClick={() => history.push(`/home/${id}`)}>
                                    <img class="card-img-top" alt ={name} src={image}/>
                                    <strong style={{backgroundColor: "#D3E8D3"}} class="card text-center">{name}</strong>
                                </div>
                            )
                        })}
                            
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LocationDetails;