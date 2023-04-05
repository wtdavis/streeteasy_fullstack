import LoginFormPage from "./components/LoginFormPage";
import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupFormPage from './components/SignupFormPage'
import Navigation from "./components/Navigation";
import LoginSignupPage from "./components/LoginSignupPage";
function App() {
  return (
    <>
    <Navigation/>  
   
    If you have to ask, you can't afford it :)
    <Switch>
      <Route path="/login">
        <LoginFormPage/>
      </Route>
      <Route path="/signup">
        <SignupFormPage/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
