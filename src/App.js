import React, { useEffect, useState } from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar  from './Components/Navigation';
import './styles/App.css';
import { Character_API } from './api/api';
import Char from './Components/Character'
import CharacterDetails from './pages/character';
import Nobody from '../Components/Nobody/index';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/character/:id" component={CharacterDetails} />
        <Route path="/location" component={Location} />
        <Route path="/episode" component={Episode} />
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



function Location() {
  return(
    <h2>Location</h2>
  );
}

function Episode() {
  return(
    <h2>Episode</h2>
  );
}
export default App;
