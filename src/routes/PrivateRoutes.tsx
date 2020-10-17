import AdminPage from "pages/AdminPage";
import ProductsPage from "pages/Products";
import React from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";

const PrivateRoutes = (props: RouteComponentProps<any>) => {
  console.log("props", props);
  return (
    <Switch {...props}>
      <Route component={AdminPage} exact path="/admin"></Route>
      <Route path="/products" exact component={ProductsPage}></Route>
      <Route path="/products" exact component={ProductsPage}></Route>
    </Switch>
  );
};

export default PrivateRoutes;
