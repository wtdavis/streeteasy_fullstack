const ADD_MODAL = 'modal/addModal'
const REMOVE_MODAL = 'modal/removeModal'

export const addModal = (modal) => {
    return {
        type: ADD_MODAL,
        payload: modal
    }
}

export const removeModal = () => {
    return {
        type: REMOVE_MODAL
    }
}

const initialState = {}

const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MODAL:
            return {...state, modal: action.payload};
        case REMOVE_MODAL: 
            return {...state, modal: null};
            default: 
            return state
    }
}

export default modalReducer