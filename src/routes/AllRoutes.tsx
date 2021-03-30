import React, { Suspense, useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "providers/AuthProvider";

import PrivateRoute from "./PrivateRoute";

const HomePageLazy = React.lazy(() => import("../pages/HomePage"));
const LoginPageLazy = React.lazy(() => import("../pages/LoginPage"));
const AdminPageLazy = React.lazy(() => import("../pages/AdminPage"));
const ModalRouterLazy = React.lazy(() => import("../modals/ModalRouter"));

const FallbackWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const fallback = (
  <FallbackWrapper>
    <Spinner animation="grow" variant="primary" />
  </FallbackWrapper>
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
      {isModal ? <Route path="/" component={ModalRouterLazy} /> : null}
    </Suspense>
  );
};

export default AllRoutes;
