import React from "react";
import { useHistory, useRouteMatch} from 'react-router-dom';



//------------------------------------- Location Card for the Location List -----------------------------------------------//



function Location({location}) {

    let {name, dimension, residents, type, id} = location; 
    let history = useHistory();
    let  {url} = useRouteMatch();
    
    return(
        <div class="card"  style={{backgroundColor: "#D3E8D3"}} >
            <div onClick={() => history.push(`${url}/${id}`)}>
                <div>
                    <h4 class="card-header">{name}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Dimension: </strong>{dimension}</li>
                        <li class="list-group-item"><strong>Type: </strong>{type}</li>
                        <li class="list-group-item"><strong>Residents: </strong>{residents.length}</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Location;