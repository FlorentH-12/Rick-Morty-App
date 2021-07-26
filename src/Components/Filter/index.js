import React, { useState, useEffect } from "react";
import {Character_API} from '../../api/api'
import CharacterDetails from '../../pages/characterDetails'

function Filter() {

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
        if (filterData.key === "status") setStatusFilter(filterData.value);
        else if (filterData.key === "gender") setGenderFilter(filterData.value);
        };

        const renderUnfilteredList = () => {
        setStatusFilter("all");
        setGenderFilter("all");
        };

        const filteredChars = chars

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

        const Filter = (props) => {
        const handleInputChange = (event) => {
            props.handleFilter({
            value: event.target.value,
            key: event.target.id,
            });
        };

       

        return (

            <div className="selectWrapper">
                <label className="label" htmlFor="status">
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
                <label className="label" htmlFor="gender">
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
}


export default Filter;