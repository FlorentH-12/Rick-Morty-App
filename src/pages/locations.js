import React, { useEffect, useState } from "react";
import {Location_API} from '../api/api';
import Nobody from '../Components/Nobody/index';
import Location from '../Components/Location/index';


function Locations(props) {

    let [locations, setLocations] = useState(null);

    useEffect(() => {
        try{
            fetch(Location_API)
            .then(res => res.json())
            .then(res => res && res.results && Array.isArray(res.results) && setLocations(res.results))
            .catch(err => console.log(err))
        }catch(e){
            console.log(e)
        }

    }, [])

    if(!locations){
        return <Nobody/>
    }



    return (
        <div className='container'>
            <h2>Locations</h2>
            <br/>
            <div className="row">
                {locations.map(location => {
                    return(
                        <div className="col s12 m6 l4" key={location.id}>
                            <Location location={location}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
  
export default Locations;