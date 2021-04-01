import React, { Suspense, useContext } from "react";

import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import ModalPage from "../modals/ModalRouter";
import Logo from "images/icons/logo.svg";

import { AuthContext } from "providers/AuthProvider";

import PrivateRoute from "./PrivateRoute";

const HomePageLazy = React.lazy(() => import("../pages/HomePage"));
const LoginPageLazy = React.lazy(() => import("../pages/LoginPage"));
const AdminPageLazy = React.lazy(() => import("../pages/AdminPage"));

const fallback = (
  <div id="float">
    <img alt="logo" src={Logo} />
  </div>
);

const AllRoutes = () => {
  const { authData } = useContext(AuthContext);
  const location = useLocation<{ modal?: boolean }>();
  const isModal = location.state?.modal;
  const isAuth = !!authData;
  return (
    <Suspense fallback={fallback}>
      <Switch>
        <Route component={HomePageLazy} exact path="/" />
        <Route path="/login" exact component={LoginPageLazy} />
        <PrivateRoute path="/admin" isAuth={isAuth}>
          <AdminPageLazy />
        </PrivateRoute>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      {isModal ? <Route path="/" component={ModalPage} /> : null}
    </Suspense>
  );
};

export default AllRoutes;
