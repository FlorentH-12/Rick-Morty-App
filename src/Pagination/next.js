// import React, { useEffect, useState } from 'react';
// import {Link } from 'react-router-dom';
// import {Character_API} from '../api/api';


// function Next(props){

//     let [nextPage, SetNextPage] = useState(null);

//     useEffect(() => {
//         try {        
//             fetch(`${Character_API}`)
//                 .then(res => res.json())
//                 .then(res => SetNextPage(res))
//                 .catch(err => console.log(err))
//         }catch(e){
//             console.log(e)
//         }
//     }, [])


//     let  {next} = nextPage;

//     return (
//         <div className="container">
//             <br/>
//                  <ul className="charContainer">
//                         <li className="nextPage"><Link to={next}>Next</Link></li>
//                     </ul>
//         </div>
//     );
    
   
// }

// export default Next;