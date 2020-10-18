import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "providers/AuthProvider";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route component={HomePage} path="/" exact></Route>
        <Route path="/login" exact component={LoginPage}></Route>
        <PrivateRoute path="/" isAuth={isAuth} />
      </Switch>
    </Router>
  );
};

export default AllRoutes;
