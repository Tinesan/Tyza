import React, { useContext } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import ModalRouter from "modals/ModalRouter";
import AdminPage from "pages/AdminPage";
import { AuthContext } from "providers/AuthProvider";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  const { authData } = useContext(AuthContext);
  const location = useLocation<{ modal?: boolean }>();
  const isModal = location.state?.modal;
  const isAuth = !!authData;
  return (
    <>
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route path="/login" exact component={LoginPage} />
        <PrivateRoute path="/admin" isAuth={isAuth}>
          <AdminPage />
        </PrivateRoute>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      {isModal ? <Route path="/" component={ModalRouter} /> : null}
    </>
  );
};

export default AllRoutes;
