import LoginFormPage from "./components/LoginFormPage";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignupFormPage from './components/SignupFormPage'
import Navigation from "./components/Navigation";
import LoginSignupPage from "./components/LoginSignupPage";
import './index.css'
import LoginSignupModal from "./components/LoginSignupPage/LoginSignupModal";
import SplashSectionMain from "./components/SplashSectionMain";
import SplashSubSections from "./components/SplashSubSections";
import SplashPage from "./components/SplashSectionMain";
import ListingsIndex from "./components/Listings";
import UserShow from "./components/Users";
import * as listingActions from "./store/listings"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListingShow from "./components/Listings/ListingShow";
import Search from "./components/SearchShowPage/SearchShowPage";
import Places from "./components/Maps/Places";
import * as modalActions from "./store/modal"
import Developer from "./components/Developer/developer";
function App() {
  const dispatch = useDispatch()
  const modal = useSelector(state => state.modal)
  const [navId, setNavId] = useState("navcenter")
  // const 
  return (
    <div id="main">

        <Navigation navId={navId}/>  
        <Switch>
          <Route exact path="/"  >
            <SplashPage/>
          </Route>
          <Route path="/profile">
            <UserShow/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route exact path="/listings">
            <ListingsIndex setNavId={setNavId}/>
          </Route>
          <Route path="/listings/:listingId">
            <ListingShow />
          </Route>
          <Route path="/places">
            <Places/>
          </Route>
          <Route>
            <Developer/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;

      // <Switch>
      //   <Route path="/login">
      //     <LoginFormPage/>
      //   </Route>
      //   <Route path="/signup">
      //     <SignupFormPage/>
      //   </Route>
      // </Switch>