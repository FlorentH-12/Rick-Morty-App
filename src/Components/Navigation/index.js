import React from 'react';
import {NavLink} from 'react-router-dom'

function Navbar() {
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="/locations">Locations</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/episodes">Episodes</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  export default Navbar;

