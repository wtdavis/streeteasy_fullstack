import csrfFetch from "./csrf"
import snakify from "./snakify"

const ADD_LISTING = "listings/addListing"
const REMOVE_LISTING = "listings/removeListing"
const SET_LISTINGS = "listings/addListings"
const CLEAR_LISTINGS = "listings/clearListings"

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

export const fetchListings = () => async (dispatch) => {
    // debugger
    let res = await csrfFetch('api/listings')
    let data = await res.json()
    await dispatch(setListings(data.listings))
    return data.listings
}

export const fetchListing = (listingId) => async (dispatch) => {
    // debugger
    let res = await csrfFetch(`api/listings/${listingId}`)
    let data = await res.json()
    // await dispatch(setListings(data.listings))
    return data.listing
}

export const updateListing = (listingId, listingData) => async (dispatch) => {
    let snakeData = JSON.stringify(listingData)
    snakeData = snakify(snakeData)
    let res = await csrfFetch(`/api/listings/${listingId}`, {
        method: 'PATCH',
        body: snakeData
    })
    let data = await res.json()
    //  dispatch(removeListing(listingId))
    // console.log(data)
    // debugger
     dispatch(addListing(data.listing))
}

export const createListing = (listingData) => async (dispatch) => {
// debugger
    let snakeData = JSON.stringify(listingData)
    snakeData =  snakify(snakeData)
    let res = await csrfFetch('api/listings', {
        method: 'POST',
        body: snakeData
    })
     let data = await res.json()
    
        // debugger
        dispatch(addListing(data)) 
}



const initialState = {}
const listingsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_LISTING:
            // debugger
            const listing = action.payload
            return {...state, [listing.id]: listing};
        case SET_LISTINGS:
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