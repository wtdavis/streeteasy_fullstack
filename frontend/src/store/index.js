import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import sessionReducer from './session';
import modalReducer from './modal';
import listingsReducer from './listings';
import buildingsReducer from './buildings';
import searchReducer from './search';
import errorsReducer from './errors';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
session: sessionReducer,
// user: userReducer,
modal: modalReducer,
listings: listingsReducer,
favorites: favoritesReducer,
search: searchReducer,
errors: errorsReducer,
buildings: buildingsReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger))
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore