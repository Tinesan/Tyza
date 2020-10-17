import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "providers/AuthProvider";

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
