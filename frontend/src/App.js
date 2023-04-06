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

function App() {
  return (
    <div id="main">
      <Navigation/>  
      <Switch>
        <Route path="/">
          <SplashPage/>
        </Route>
        <Route path="/rent">
          {/* <RentShow/> */}
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