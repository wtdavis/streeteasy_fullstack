import csrfFetch from "./csrf";




const ADD_FAVORITE = "favorites/addFavorite"
const ADD_FAVORITES = "favorites/addFavorites"
const DELETE_FAVORITE = "favorites/deleteFavorite"

export const addFavorite = (favorite) => {
    debugger
    return ({
        type: ADD_FAVORITE,
        payload: favorite
        }
    )
}

export const addFavorites = function (favorites) {
    return ({
        type: ADD_FAVORITES,
        payload: favorites
    })
}

export const deleteFavorite = (favorite) => {
    return ({
        type: DELETE_FAVORITE,
        payload: favorite
    })
}


export const fetchFavorites = (user) => async (dispatch) => {
    debugger
    let res = csrfFetch(`/api/favorites/${user.id}`)
    let data = await res
    debugger
    if (data.ok) {
        dispatch(addFavorites(data))
        return data
    }
    return data
}

export const addFavoriteThunk = (favorite) => async (dispatch) => {
    let res = csrfFetch('/api/favorites', {
        method: 'POST',
        body: JSON.stringify({
            listingId: favorite.id
        })
    })
    
    if (res.errors) { 
        // add favorites error handling!
    } else {
        let data = (await res).json()
        dispatch(addFavorite(data.favorite))
        return data
    }
}

const favoritesReducer = (initialState = {}, action) => {
    let newState = {...initialState};
    let payload = action.payload;
    switch(action.type) {
        case ADD_FAVORITE:
            return {...newState, ...payload}
        case ADD_FAVORITES: 
            return {...newState, ...payload}
        case DELETE_FAVORITE:
            delete newState.payload
            // does this work? test
            return {...newState}
        default:
            return {...initialState}

    }

}

export default favoritesReducer