import LoginFormPage from "./components/LoginFormPage";
import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage/>
      </Route>
    </Switch>
  );
}

export default App;
