import React from './node_modules/react';
import classes from './SearchBar.module.css'

let serverName = 'eun1';
let summonerName = '';

const SearchBar = (props) => {

    const summonerNameChangeHandler = (event) => {
        summonerName = event.target.value;
    }

    const serverNameChangeHandler = (event) => {
        serverName = event.target.value;
    }

    return (
        <div className={classes.SearchBar}>
            <select onChange={serverNameChangeHandler}>
                <option value="eun1">EUNE</option>
                <option value="euw1">EUW</option> 
                <option value="na1">NA</option> 
            </select>
            <input type="text" name="summonerName" onChange={summonerNameChangeHandler} />
            <button onClick={() => props.searchBarClick(serverName, summonerName)}>Get Summoner</button>
        </div>
    );
}

export default SearchBar;