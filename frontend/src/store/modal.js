import { useDispatch } from "react-redux"

const ADD_CREDENTIAL_MODAL = 'modal/addCredentialModal'
const REMOVE_CREDENTIAL_MODAL = 'modal/removeCredentialModal'
const ADD_PASSWORD_MODAL = 'modal/addPasswordModal'
const REMOVE_PASSWORD_MODAL = 'modal/removePasswordModal'

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

const initialState = {}

const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CREDENTIAL_MODAL:
            return {...state, credential: true};
        case REMOVE_CREDENTIAL_MODAL: 
            return {...state, credential: false};
        case ADD_PASSWORD_MODAL:
            return {...state, password: true};
        case REMOVE_PASSWORD_MODAL:
            return {...state, password: false}
            default: 
            return state
    }
}

export const removeModals = () => async (dispatch) => {
   return(
    dispatch(removeCredentialModal()),
    dispatch(removePasswordModal()))
}

export default modalReducer