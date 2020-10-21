import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import AdminPage from "pages/AdminPage";

const PrivateRoutes = (props: RouteComponentProps<any>) => {
  return <Route component={AdminPage} exact path="/admin" {...props}></Route>;
};

export default PrivateRoutes;
