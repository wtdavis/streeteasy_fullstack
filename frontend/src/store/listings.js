import csrfFetch from "./csrf"
import snakify from "./snakify"

const ADD_LISTING = "listings/addListing"
const REMOVE_LISTING = "listings/removeListing"
const SET_LISTINGS = "listings/setListings"
const CLEAR_LISTINGS = "listings/clearListings"

const ADD_LISTINGS_ERRORS = "listings/addListingsErrors"
const CLEAR_LISTINGS_ERRORS = "listings/clearListingsErrors"
const CLEAR_LISTINGS_ERROR = "listings/clearListingsError"

const ADD_CURRENT_LISTING = "listings/addCurrentListing"
const CLEAR_CURRENT_LISTING = "listings/clearCurrentListing"

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

export const clearListingsError = (error) => {
    return {
        type: CLEAR_LISTINGS_ERROR,
        payload: error
    }
    
}

export const addCurrentListing = (listing) => {
    return {
        type: ADD_CURRENT_LISTING,
        payload: listing
    }
}
export const clearCurrentListing = () => {
    return {
        type: CLEAR_CURRENT_LISTING
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

    if (!data.errors){
        dispatch(addListing(data))
        return data
    } else {
        dispatch(addListingsErrors(data.errors))
        return data
    } 
}

export const createListing = (formData) => async (dispatch) => {
    let res = await csrfFetch('/api/listings', {
        method: 'POST',
        body: formData
        // headers: {"Content-Type" : "multipart/form-data"}
    })
    let data = await res.json()
    
    if (!data.errors){
        dispatch(addListing(data))
        return data
    } else {
        dispatch(addListingsErrors(data.errors))
        return data
    } 
    
}

export const deleteListing = (listingId) => async (dispatch) => {
    let res = await csrfFetch(`/api/listings/${listingId}`, {
        method: 'DELETE'
    })
    if (res.ok){
    dispatch(removeListing(listingId))
    }
}

export const listingsErrorsReducer = (initialState = {} , action) => {
    switch (action.type) {
        case ADD_LISTINGS_ERRORS:
            return {...initialState, ...action.payload };
        case CLEAR_LISTINGS_ERRORS:
            return {};
        case CLEAR_LISTINGS_ERROR:
            let tmp = {...initialState}
            delete tmp[action.payload]
            return {...tmp}
        default:
            return initialState
    }
}


const initialState = {}

const listingsReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case ADD_LISTING:
            const listing = action.payload.listing
            return {...newState, [listing.id]: listing, current: listing};
        case SET_LISTINGS:
            const listings = {}
            let values = Object.values(action.payload)
            for (let i=0; i<values.length;i++) {
                let listing = values[i]
                let locationArr = listing.location.split(",")
                let locationObj = {}
                locationObj["lat"] = Number(locationArr[0])
                locationObj["lng"] = Number(locationArr[1])
                listing.location = locationObj
                listings[values[i].id] = listing
            }
            return {...listings}
        case REMOVE_LISTING:
            delete newState[action.payload]
            return newState;
        case CLEAR_LISTINGS:
            return {};
        case ADD_CURRENT_LISTING:
            let temp = {...newState, current: {...action.payload}}
            return {...temp}
        case CLEAR_CURRENT_LISTING:
            delete newState.current
            return {...newState};
        default:
            return newState
    }
}

export default listingsReducer