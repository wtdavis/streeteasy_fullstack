import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { fetchSearchResults } from "../../store/search"
import { useEffect } from "react"

const Search = () => {
    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(()=>{
        const query = history.location.search.split("=")[1];
        dispatch(fetchSearchResults(query))
    }, [dispatch])

    const searchResults = useSelector((state) => state.searchResults)

    return (
        <>
        {Object.values(searchResults).map((ele) => {
            return(
            <li>{ele}</li>)
        })
    }
        
        </>
    )
}

export default Search
