import React from "react";
import { Redirect, Route } from "react-router-dom";

type Props = {
  isAuth: boolean;
  path: string;
};

const AdminPageLazy = React.lazy(() => import("../pages/AdminPage"));

const PrivateRoute = ({ isAuth, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={() => (!isAuth ? <AdminPageLazy /> : <Redirect to="/" />)}
    />
  );
};
export default PrivateRoute;
