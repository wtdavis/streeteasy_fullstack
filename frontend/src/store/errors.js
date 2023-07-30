import { combineReducers } from "redux";
import { listingsErrorsReducer } from "./listings";

const errorsReducer = combineReducers({
    listings: listingsErrorsReducer
})

export default errorsReducer