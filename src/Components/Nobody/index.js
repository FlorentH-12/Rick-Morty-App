import React from 'react'
import { Link } from 'react-router-dom';
 import '../../styles/App.css';

//------------------------------------- Err if no data -----------------------------------------------//


function noChar(props) {
    return (
        <div className='App'>
            <Link  style={{color: "#7CD77C", fontFamily:'impact'}}  to="/home" >Back</Link>
            <p className="titlePage" style={{color: "#7CD77C", fontSize:'400%',}}>Oh jizz Rick! it's like it never existed</p>  
        </div>
    );
}

export default noChar;