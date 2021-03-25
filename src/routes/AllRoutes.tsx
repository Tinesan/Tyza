import React, { useContext } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import { AuthContext } from "providers/AuthProvider";

import PrivateRoute from "./PrivateRoute";

const HomePageLazy = React.lazy(() => import("../pages/HomePage"));
const LoginPageLazy = React.lazy(() => import("../pages/LoginPage"));
const AdminPageLazy = React.lazy(() => import("../pages/AdminPage"));
const ModalRouterLazy = React.lazy(() => import("../modals/ModalRouter"));

const AllRoutes = () => {
  const { authData } = useContext(AuthContext);
  const location = useLocation<{ modal?: boolean }>();
  const isModal = location.state?.modal;
  const isAuth = !!authData;
  return (
    <>
      <Switch>
        <Route component={HomePageLazy} exact path="/" />
        <Route path="/login" exact component={LoginPageLazy} />
        <PrivateRoute path="/admin" isAuth={isAuth}>
          <AdminPageLazy />
        </PrivateRoute>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      {isModal ? <Route path="/" component={ModalRouterLazy} /> : null}
    </>
  );
};

export default AllRoutes;
