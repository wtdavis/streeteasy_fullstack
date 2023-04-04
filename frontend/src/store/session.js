import csrfFetch from "./csrf"

const SET_CURRENT_USER = 'session/setCurrentUser'
const REMOVE_CURRENT_USER = 'session/removeCurrentUser'


export const login = (user) => async (dispatch) => {
    const {credential, password} = user;
    const res = await csrfFetch('api/session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            credential: credential,
            password: password
        })
    } )
    const data = await res.json()
    dispatch(setCurrentUser(data.user))
}

export const logout = () => async (dispatch) => {
    const res = await csrfFetch('api/session', {
        method: 'DELETE'
    })
    if (res.ok){
    dispatch(removeCurrentUser())}
}

const setCurrentUser = (user) => {
    return {
    type: SET_CURRENT_USER,
    payload: user}
}

const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    }
}

const initialState = {user: null}

const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {...state, user: action.payload};
        case REMOVE_CURRENT_USER:
            return {...state, user: null};
        default:
            return state
    }
}

const storeCurrentUser = (user) => {
    if (user) {
        sessionStorage.setItem("currentUser", JSON.stringify(user))
    } else {
        sessionStorage.removeItem("currentUser")
    }
}

const restoreSession = () => async (dispatch) => {
   
}
export default sessionReducer