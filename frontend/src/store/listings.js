import csrfFetch from "./csrf"
import snakify from "./snakify"

const ADD_LISTING = "listings/addListing"
const REMOVE_LISTING = "listings/removeListing"
const SET_LISTINGS = "listings/setListings"
const CLEAR_LISTINGS = "listings/clearListings"

const ADD_LISTINGS_ERRORS = "listings/addListingsErrors"
const CLEAR_LISTINGS_ERRORS = "listings/clearListingsErrors"
const CLEAR_LISTINGS_ERROR = "listings/clearListingsError"

export const addListing = (listing) => {
    return {
        type: ADD_LISTING,
        payload: listing
    }
}
export const removeListing = (listingId) => {
    return {
        type: REMOVE_LISTING,
        payload: listingId
    }
}

export const setListings = (listings) => {
    return {
        type: SET_LISTINGS,
        payload: listings
    }
}

export const clearListings = () => {
    return {
        type: CLEAR_LISTINGS,
    }
}

export const addListingsErrors = (errors) => {
    return {
        type: ADD_LISTINGS_ERRORS,
        payload: errors
    }
}

export const clearListingsErrors = () => {
    return {
        type: CLEAR_LISTINGS_ERRORS
    }
}

export const fetchListings = () => async (dispatch) => {
    let res = await csrfFetch('/api/listings')
    let data = await res.json()
     dispatch(setListings(data.listings))
    // return data.listings
}



export const updateListing = (listingId, formData) => async (dispatch) => {
    // let snakeData = JSON.stringify(formData)
    // snakeData = snakify(snakeData)
    let res = await csrfFetch(`/api/listings/${listingId}`, {
        method: 'PATCH',
        body: formData  
    })
    let data = await res.json()
     dispatch(addListing(data.listing))
}

export const createListing = (formData) => async (dispatch) => {
    // let snakeData = JSON.stringify(formData)
    // snakeData =  snakify(snakeData)
    // debugger
    let res = await csrfFetch('/api/listings', {
        method: 'POST',
        body: formData
    })
     let data = await res.json()
        if (!data.errors){
            dispatch(addListing(data))
            return data
        } else {
            dispatch(addListingsErrors(data))
            return data
        } 
    
        // debugger
}

export const deleteListing = (listingId) => async (dispatch) => {
    let res = await csrfFetch(`/api/listings/${listingId}`, {
        method: 'DELETE'
    })
    
    dispatch(removeListing(listingId))
    
}

export const listingserrorsreducer = (initialState = {} , action) => {
    switch (action.type) {
        case ADD_LISTINGS_ERRORS:
            return {...initialState, errors: {...action.payload} };
        case CLEAR_LISTINGS_ERRORS:
            return {...initialState, errors: {}};
        case CLEAR_LISTINGS_ERROR:
            let idx = initialState.errors.listings.indexOf(action.payload)
            return {...initialState, errors: initialState.errors.listings.splice(action.payload, 1)}
        default:
            return initialState
    }
}


const initialState = {}
const listingsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_LISTING:
            const listing = action.payload
            return {...state, [listing.id]: listing};
            case SET_LISTINGS:
            // debugger
            return action.payload;
        case REMOVE_LISTING:
            let newState = {...state}
            delete newState[action.payload]
            return newState;
        case CLEAR_LISTINGS:
            return {}
        default:
            return state
    }
}

export default listingsReducer