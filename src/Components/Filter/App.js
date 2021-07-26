import { React, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import {Character_API} from "../../api/api";
import Filter from "./index";
import CharacterDetails from "../../pages/characterDetails";

function CharFilter() {
  const [chars, setChars] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");

  useEffect(() => {
    fetch(Character_API)
    .then((data) => {
      setChars(data);
    });
  }, []);

  chars.sort(function (a, b) {
    const charA = a.name.toUpperCase();
    const charB = b.name.toUpperCase();
    if (charA < charB) {
      return -1;
    }
    if (charA > charB) {
      return 1;
    }
    return 0;
  });

  const handleFilter = (filterData) => {
    if (filterData.key === "searchBox") setNameFilter(filterData.value);
    else if (filterData.key === "status") setStatusFilter(filterData.value);
    else if (filterData.key === "gender") setGenderFilter(filterData.value);
  };

  const renderUnfilteredList = () => {
    setNameFilter("");
    setStatusFilter("all");
    setGenderFilter("all");
  };

  const filteredChars = chars
    .filter((char) => {
      return char.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((char) => {
      if (statusFilter === "all") return char;
      else return char.status === statusFilter;
    })
    .filter((char) => {
      if (genderFilter === "all") return char;
      else return char.gender === genderFilter;
    });

  const renderCharDetail = (props) => {
    const charId = parseInt(props.match.params.id);
    const foundChar = chars.find((char) => {
      return char.id === charId;
    });
    return <CharacterDetails char={foundChar} />;
  };

  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/">
            <Filter handleFilter={handleFilter} />
          </Route>
          <Route exact path="/char/:id" render={renderCharDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default CharFilter;

