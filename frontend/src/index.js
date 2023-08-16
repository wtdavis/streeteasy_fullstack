import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import configureStore from './store';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session'
import * as modalActions from './store/modal'
import * as listingsActions from './store/listings'
import './index.css'
// import {Wrapper} from "@googlemaps/react-wrapper"

const store = configureStore()

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.modalActions = modalActions
}
function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const renderApp = () => {
  return(
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'))
);
}
store.dispatch(modalActions.removeCredentialModal());
store.dispatch(modalActions.removePasswordModal())
// store.dispatch(listingsActions.fetchListings())
if (  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem('X-CSRF-Token') === null ) 
{
  store.dispatch(sessionActions.restoreSession()).then(res => {
    renderApp()
  })
} else {
  renderApp()
}
