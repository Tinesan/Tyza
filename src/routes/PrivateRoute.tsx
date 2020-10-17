import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

type Props = {
  isAuth: boolean;
  path: string;
};

const PrivateRoute = ({ isAuth }: Props) => {
  return (
    <Route
      render={(props) =>
        isAuth ? <PrivateRoutes {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default PrivateRoute;
