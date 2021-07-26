import React, { useEffect, useState } from 'react';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Character_API } from './api/api';

import Navbar  from './Components/Navigation';
import Character from './Components/Character/index'
import CharacterDetails from './pages/characterDetails';
import Locations from './pages/locations'
import LocationDetails from './pages/locationDetails'
import Episodes from './pages/episodes';
import EpisodeDetails from './pages/episodeDetails';
import Nobody from './Components/Nobody/index';

//import Next from './Pagination/next';
// import Previous from './Components/Pagination/previous';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/home/:id" component={CharacterDetails} />
        <Route path="/locations/:id" component={LocationDetails} />
        <Route path="/locations" component={Locations} />
        <Route path="/episodes/:id" component={EpisodeDetails} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/home" component={Characters} />
        <Route exact path="/" component={Characters} />
      </Switch>
    </Router>
  );
}

function Characters(props) {

  let [characters, setCharacters] = useState();

  useEffect(() => {
    try{
      fetch(Character_API)
        .then(res => res.json())
        .then(({results}) => {
          if(results && Array.isArray(results)){
            setCharacters(results)
          }
        })
        .then(err => console.log(err))
    }catch(e){
      console.log(e)
    }
  }, []);

  if(!characters){
    return <Nobody/>
}


  return (
    <div>
      <div class="container ">
        <h2 className="titlePage">Characters</h2>
        <br/>
        <div class="row row-cols-1 row-cols-md-4 g-4 ">
          {characters.map(character => {
            return (
              <div key={character.id}>
                <Character key={character.id} character={character}/>
              </div>
            )
          })}
        </div>
        <li>
          {/* <ul><Previous/></ul>
          <ul><Link to={next}>Next</Link></ul> */}
        </li> 
      </div>

    </div>

      );
}


export default App;

