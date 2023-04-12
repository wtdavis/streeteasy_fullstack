import LoginFormPage from "./components/LoginFormPage";
import React from "react";
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
function App() {
  
  // const 
  return (
    <div id="main">
      <Navigation navClass={"mainpage"}/>  
      <Switch>
        <Route exact path="/"  >
          <SplashPage/>
        </Route>
        <Route path="/profile">
          <UserShow/>
        </Route>
        
        <Route exact path="/listings">
          <ListingsIndex/>
        </Route>
        <Route path="/listings/:listingId">
          <ListingShow />
        </Route>
      </Switch>
    {/* <LoginSignupPage/> */}
    {/* <SplashSectionMain/>
    <SplashSubSections/> */}
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