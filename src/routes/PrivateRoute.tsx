import React from "react";
import { Redirect, Route } from "react-router-dom";

type Props = {
  isAuth: boolean;
  path: string;
  children: JSX.Element;
};

const PrivateRoute = ({ isAuth, children, ...rest }: Props) => {
  return (
    <Route {...rest} render={() => (isAuth ? children : <Redirect to="/" />)} />
  );
};
export default PrivateRoute;
