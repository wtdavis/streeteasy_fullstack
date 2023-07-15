import { combineReducers } from "redux";
import { listingserrorsreducer } from "./listings";

const errorsReducer = combineReducers({
    listings: listingserrorsreducer
})

export default errorsReducer