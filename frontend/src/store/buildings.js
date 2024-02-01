import csrfFetch from "./csrf"

const ADD_BUILDINGS = 'buildings/addBuildings'
const ADD_BUILDING = 'buildings/addBuilding'
const REMOVE_BUILDING = 'buildings/removeBuilding'

export const addBuildings = (buildings) => {
    return {
        type: ADD_BUILDINGS,
        payload: buildings
    }
}

export const addBuilding= (building) => {
    return {
        type: ADD_BUILDING,
        payload: building
    }
}

export const removeBuilding = (buildingId) => {
    return {
        type: REMOVE_BUILDING,
        payload: buildingId
    }
}

export const fetchBuildings = async (dispatch) => {
    let res = csrfFetch('/api/buildings')
    let data = await res


}

const initialState = {}
const buildingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUILDINGS:
            return action.payload;
        case ADD_BUILDING:
            const building = action.payload.building
            return {...state, [building.id]: building};
        case REMOVE_BUILDING:
            const newState = {...state}
            delete newState[action.payload]
            return newState;
        default: 
        return state
    }
}

export default buildingsReducer