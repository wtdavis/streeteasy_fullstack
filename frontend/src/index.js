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
import {Wrapper} from "@googlemaps/react-wrapper"

const store = configureStore()

if (process.env.NODE_ENV !== 'production') {
  debugger
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.modalActions = modalActions
}
debugger
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
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
    <Root />
        </Wrapper>
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
    // console.log(res)
  })
} else {
  renderApp()
  // console.log("rendering")
}

// while (sessionStorage.getItem('X-CSRF-Token') === null) {
//   sessionActions.restoreSession()
// }