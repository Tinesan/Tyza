import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import CategoriesPage from "pages/CategoriesPage";
import ProductsPage from "pages/ProductsPage";
import AdminPageContent from "./AdminPageContent";

const AdminPage = () => {
  return (
    <Switch>
      <Route exact path={"/admin"}>
        <AdminPageContent />
      </Route>
      <Route path={`/admin/categories`}>
        <CategoriesPage />
      </Route>
      <Route path={`/admin/products`}>
        <ProductsPage />
      </Route>
      <Route render={() => <Redirect to="/" />}></Route>
    </Switch>
  );
};

export default AdminPage;
