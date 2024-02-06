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
    let queryObj = {...query};
    debugger
    queryObj.minPrice ||= 0;
    queryObj.maxPrice ||= 100000000000;
    
    let jsonQuery = JSON.stringify(query)
    let encodedQuery = encodeURIComponent(jsonQuery)
    const res = await fetch(`/api/listings/search?q=${encodedQuery}` );

    const searchResults = await res.json()
    dispatch(receiveSearchResults(searchResults.listings))
    return searchResults
}

export const fetchBuildingSearchResults = (query) => async (dispatch) => {
    dispatch(clearSearchResults());
    let jsonQuery = JSON.stringify(query)
    let encodedQuery = encodeURIComponent(jsonQuery)
    const res = await fetch(`/api/listings/building_search?q=${encodedQuery}`)
    const searchResults = await res.json()
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