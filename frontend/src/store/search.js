export const GET_SEARCH_RESULTS = 'search/receiveSearchResults'
export const CLEAR_SEARCH_RESULTS = 'search/clearSearchResults'

export const receiveSearchResults = (searchResults) => ({
    type: GET_SEARCH_RESULTS,
    payload: searchResults
})

export const clearSearchResults = () => {
    return(
    {type: CLEAR_SEARCH_RESULTS})

}

export const fetchSearchResults = (query) => async (dispatch) => {
    dispatch(clearSearchResults())
    const res = await fetch(`/api/listings/search?q=${query}` );

    const searchResults = await res.json()
debugger
    dispatch(receiveSearchResults(searchResults.listings))
    return searchResults
}

const initialState = {}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULTS:
            return {...state, ...action.payload}
        case CLEAR_SEARCH_RESULTS: 
        return {}
        default: 
        return {...state}
    }
}

export default searchReducer