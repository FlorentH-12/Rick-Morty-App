import React, { useState, useEffect } from "react";
import { Episode_API } from "../../api/api";
import axios from "axios";
import "../../styles/App.css";

const EpisodePagination = ({ setEpisodes, setIsLoading }) => {
  const [info, setInfo] = useState(1)

  const fetchEpisode = async (pageNumber) => {
    setIsLoading(true)

    let baseUrl = Episode_API

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
    setEpisodes(result.data.results)
    setIsLoading(false)
  };

  useEffect(() => {
    fetchEpisode(1)
  }, [])

  return (
    <div>
      {
        info.prev ? (
          <button type="button" class="btn btn-outline-success" style={{backgroundColor: "#D3E8D3"}} onClick={ () => fetchEpisode(info.prev) }>
            Previous
          </button>
        ) : (
          <React.Fragment/>
        )
      }



      {
        info.next ? (
          <button type="button" class="btn btn-outline-success" style={{backgroundColor: "#D3E8D3", marginRight:'30px', marginLeft:'30px'}}  onClick={ () => fetchEpisode(info.next) }>
            Next
          </button>
        ) : (
          <React.Fragment/>
        )
      }
    </div>
  )
};

export default EpisodePagination;