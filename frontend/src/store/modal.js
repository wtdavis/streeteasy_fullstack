import { useDispatch } from "react-redux"

const ADD_CREDENTIAL_MODAL = 'modal/addCredentialModal'
const REMOVE_CREDENTIAL_MODAL = 'modal/removeCredentialModal'
const ADD_PASSWORD_MODAL = 'modal/addPasswordModal'
const REMOVE_PASSWORD_MODAL = 'modal/removePasswordModal'
const ADD_SIGNUP_MODAL = 'modal/addSignupModal'
const REMOVE_SIGNUP_MODAL = 'modal/removeSignupModal'
const ADD_LISTING_MODAL = 'modal/addListingModal'
const REMOVE_LISTING_MODAL = 'modal/removeListingModal'
const CHANGE_HOVER_VALUE = 'modal/changeHoverValue'
const CHANGE_LEFT_MARGIN = 'modal/changeLeftMargin'

export const addCredentialModal = () => {
    return {
        type: ADD_CREDENTIAL_MODAL,
        payload: 'credential'
    }
}

export const removeCredentialModal = () => {
    return {
        type: REMOVE_CREDENTIAL_MODAL
    }
}

export const addPasswordModal = () => {
    return {
        type: ADD_PASSWORD_MODAL,
        payload: 'password'
    }
}

export const removePasswordModal = () => {
    return {
        type: REMOVE_PASSWORD_MODAL
    }
}
export const addSignupModal = () => {
    return {
        type: ADD_SIGNUP_MODAL,
        payload: 'signup'
    }
}

export const removeSignupModal = () => {
    return {
        type: REMOVE_SIGNUP_MODAL
    }
}

export const addListingModal = () => {
    return {
        type: ADD_LISTING_MODAL
    }
}

export const removeListingModal = () => {
    return {
        type: REMOVE_LISTING_MODAL
    }
}

export const changeHoverValue = (value) => {
    return {
        type: CHANGE_HOVER_VALUE,
        payload: value
    }
}

export const changeLeftMargin = (value) => {
    return {
        type: CHANGE_LEFT_MARGIN,
        payload: value
    }
}

const initialState = {hover: "rent", leftMargin: 0}

const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CREDENTIAL_MODAL:
            return {...state, credential: true};
        case REMOVE_CREDENTIAL_MODAL: 
            return {...state, credential: false};
        case ADD_PASSWORD_MODAL:
            return {...state, password: true};
        case REMOVE_PASSWORD_MODAL:
            return {...state, password: false};
        case ADD_SIGNUP_MODAL:
            return {...state, signup: true};
        case REMOVE_SIGNUP_MODAL:
            return {...state, signup: false}
        case ADD_LISTING_MODAL:
            return {...state, listing: true}
        case REMOVE_LISTING_MODAL:
            return {...state, listing: false}
        case CHANGE_HOVER_VALUE: 
            return {...state, hover: action.payload}
        case CHANGE_LEFT_MARGIN: 
            return {...state, leftMargin: action.payload}
            default: 
            return state
    }
}

export const removeModals = () => async (dispatch) => {
   return(
    dispatch(removeCredentialModal()),
    dispatch(removePasswordModal()),
    dispatch(removeSignupModal())
   )
}

export default modalReducer