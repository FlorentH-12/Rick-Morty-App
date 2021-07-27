import React, { useEffect, useState } from "react";
import {Location_API} from '../api/api';
import Nobody from '../Components/Nobody/index';
import Location from '../Components/Location/index';
import Footer from "../Components/Footer";
import '../styles/App.css';


//------------------------------------- Locations List -----------------------------------------------//


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
        <div className='App'>
            <div class="container">
                <h2 className="titlePage" style={{color: "#7CD77C"}}>Locations</h2>
                <br/>
                <div class="row row-cols-1 row-cols-md-4 g-4 ">
                    {locations.map(location => {
                        return(
                            <div key={location.id}>
                                <Location location={location}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <br/>
        <Footer/>
        </div>
    );
}
  
export default Locations;