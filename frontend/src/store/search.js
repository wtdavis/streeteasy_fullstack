export const GET_SEARCH_RESULTS = 'search/searchResults'

export const receiveSearchResults = (searchResults) => ({
    type: GET_SEARCH_RESULTS,
    payload: searchResults
})

export const fetchSearchResults = (query) => async (dispatch) => {
const res = await fetch(`/api/listings/search?q=${query}` );
const searchResults = await res.json()
dispatch(receiveSearchResults(searchResults))
}

const initialState = {}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULTS:
            return action.payload.search
        default: 
        return {...state}
    }
}

export default searchReducer