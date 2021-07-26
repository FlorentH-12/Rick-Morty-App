import React, { useState, useEffect } from "react";
import { Character_API } from "../../api/api";
import axios from "axios";
import "../../styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Pagination = ({ setCharacters, setIsLoading }) => {
  const [info, setInfo] = useState(1)

  const fetchCharacters = async (pageNumber) => {
    setIsLoading(true)

    let baseUrl = Character_API

    if (pageNumber) {
      baseUrl += `/?page=${pageNumber}`
    }

    const result = await axios(baseUrl);

    const pageInfo = result.data.info

    setInfo({
      next: pageNumber < pageInfo.pages ? pageNumber + 1 : null,
      current: pageNumber,
      prev: pageNumber > 1 ? pageNumber - 1 : null
    })
    setCharacters(result.data.results)
    setIsLoading(false)
  };

  useEffect(() => {
    fetchCharacters(1)
  }, [])

  return (
    <div >
      {
        info.prev ? (
          <button type="button" class="btn btn-outline-success" style={{backgroundColor: "#D3E8D3"}} type="button" onClick={ () => fetchCharacters(info.prev) }>
            Prev.
          </button>
        ) : (
          <React.Fragment/>
        )
      }



      {
        info.next ? (
          <button type="button" class="btn btn-outline-success" style={{backgroundColor: "#D3E8D3"}} onClick={ () => fetchCharacters(info.next) }>
            Next
          </button>
        ) : (
          <React.Fragment/>
        )
      }
    </div>
  )
};

export default Pagination;