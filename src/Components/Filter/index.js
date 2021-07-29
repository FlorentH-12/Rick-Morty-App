import React, { useState, useEffect } from "react";


function Filter (props) {

    const handleInputChange = (event) => {
      props.handleFilter({
        value: event.target.value,
        key: event.target.id,
      });
    };
  
  
    return (
        <div>
          <label style={{color: "#7CD77C", fontFamily: 'impact'}}>
            Status
          </label>
          <select
            className="select"
            name="status"
            id="status"
            onChange={handleInputChange}
          >
            <option value="all">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <label style={{color: "#7CD77C", fontFamily: 'impact'}}>
            Gender
          </label>
          <select
            className="select"
            name="gender"
            id="gender"
            onChange={handleInputChange}
          >
            <option value="all">All</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
    );
  };
  
  export default Filter;