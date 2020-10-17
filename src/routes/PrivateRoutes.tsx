import AdminPage from "pages/AdminPage";
import React from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";

const PrivateRoutes = (props: RouteComponentProps<any>) => {
  console.log("props", props);
  return (
    <Switch {...props}>
      <Route component={AdminPage} exact path="/admin"></Route>
      <Route
        path="/products"
        exact
        component={() => <div>Продукты</div>}
      ></Route>
    </Switch>
  );
};

export default PrivateRoutes;
