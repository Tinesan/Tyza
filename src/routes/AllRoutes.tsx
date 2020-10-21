import React, { useContext } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { AuthContext } from "providers/AuthProvider";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "pages/AdminPage";

const AllRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route component={HomePage} path="/" exact></Route>
        <Route path="/login" exact component={LoginPage}></Route>
        <PrivateRoute path="/admin" isAuth={isAuth}>
          <AdminPage />
        </PrivateRoute>
        <Route render={() => <Redirect to="/" />}></Route>
      </Switch>
    </Router>
  );
};

export default AllRoutes;
