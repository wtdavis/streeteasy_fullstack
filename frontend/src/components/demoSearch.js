import {  useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as searchActions from "../store/search";

const SearchBar = () => {
    const [searchText, setSearchText] = useState("")
    const history = useHistory()    
    const dispatch = useDispatch()

    async function handleSearch(e) {
        e.preventDefault()
        const query = e.target.value;
        await setSearchText(query);
        // debugger
        dispatch(searchActions.fetchSearchResults(query))

    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        if (searchText.length > 0) {
            history.push(`api/listings/search?listings=${searchText}`)
        }

    }

    return (
        <>
        <input onChange={(e) => {handleSearch(e)}} type="text" placeholder="search"></input>
        <input type="submit" onClick={handleSearchSubmit}/>
        </>
    )
}

export default SearchBar