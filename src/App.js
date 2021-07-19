import React from 'react';
// import './styles/main.css'
import  { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/character" component={Character} />
        <Route path="/location" component={Location} />
        <Route path="/episode" component={Episode} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

function Navbar() {
  return(
    <nav className="black">
      <ul>
        <li className="yellow">
          <NavLink exact to="/">Home</NavLink>
        </li> 
        <li className="yellow">
          <NavLink to="/location">Location</NavLink>
        </li>
        <li className="yellow">
          <NavLink to="/episode">Episode</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return(
    <div>
      <h2>Home</h2>
      <Link to="/component1">Component1</Link>
      <Link to="/component2">Component2</Link>
      <Route path='/component1' component={Component1}/>
      <Route path='/component2' component={Component2}/>
    </div>
  );
}

function Component1() {
  return(
    <h2>Component 1</h2>
  );
}

function Component2() {
  return(
    <h2>Component 2</h2>
  );
}

function Character() {
  return (
    <h2>Character description</h2>
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
