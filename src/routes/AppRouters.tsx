import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainContainer from "../pages/main/MainContainer";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
