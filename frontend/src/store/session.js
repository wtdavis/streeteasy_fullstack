import csrfFetch, { storeCSRFToken } from "./csrf"

export const SET_CURRENT_USER = 'session/setCurrentUser'
export const REMOVE_CURRENT_USER = 'session/removeCurrentUser'


export const login = ({credential, password}) => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            credential: credential,
            password: password
        })
    } )
    const data = await res.json()
    // console.log(data)c
    // if (res.ok){
    storeCurrentUser(data.user)
    dispatch(setCurrentUser(data.user))
    // }
    return res
}

export const logout = () => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
    storeCurrentUser(null)
    dispatch(removeCurrentUser())
}

export const signup = ({credential, password}) => async (dispatch) => {
    const res = await csrfFetch('/api/users', {
        method: 'POST',
         body: JSON.stringify({
             password: password,
             email: credential
            })
    })
    const data = await res.json()

    if (res.ok) {
        storeCurrentUser(data.user)
        dispatch(setCurrentUser(data.user))
    }
    return res
}

const setCurrentUser = (user) => {
    return {
    type: SET_CURRENT_USER,
    payload: user}
}

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    }
}

const initialState = {user: JSON.parse(sessionStorage.getItem("currentUser"))}

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

export const restoreSession = () => async (dispatch) => {
   const res = await csrfFetch('/api/session')
   const data = await res.json()
//    const token = storeCSRFToken(res)
//    console.log(token)
   storeCurrentUser(data.user)
   dispatch(setCurrentUser(data.user))
    return res
}

export default sessionReducer