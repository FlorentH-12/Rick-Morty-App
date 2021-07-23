import React, { useEffect, useState } from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar  from './Components/Navigation';
import './styles/App.css';
import { Character_API } from './api/api';
import Char from './Components/Character';
import Nobody from './Components/Nobody/index';
import CharacterDetails from './pages/character';
import Locations from './pages/locations'
import LocationDetails from './pages/LocationDetails'
import Episodes from './pages/episodes';
import EpisodeDetails from './pages/episodeDetails';



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/character/:id" component={CharacterDetails} />
        <Route path="/locations/:id" component={LocationDetails} />
        <Route path="/locations" component={Locations} />
        <Route path="/episodes/:id" component={EpisodeDetails} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

function Home(props) {

  let [characters, setCharacters] = useState(null);

  useEffect (() => {
    try{
    fetch(Character_API)
      .then(res =>res.json())
      .then(({results}) => {
        if(results && Array.isArray(results)){
          setCharacters(results)
        }
      })
      .catch(err => console.log(err))
    }catch(e){
      console.log(e)
    }

  }, []);

  if(!characters){
    return <Nobody/>
  }

  return(
    <div className="container home">
      <h2>Rick and Morty App</h2>
      <div className="row">
        {characters.map(character => {
          return(
            <div className="col s12 m4 l3" key={character.id}>
              <Char key={character.id} character={character}/>
            </div>
          )
        })}
      </div>
    </div> 
  );
}


export default App;
