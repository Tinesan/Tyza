import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import CategoriesPage from "pages/CategoriesPage";
import OrderPage from "pages/OrderPage";
import ProductsPage from "pages/ProductsPage";

import AdminPageContent from "./AdminPageContent";

const AdminPage = () => {
  const history = useHistory();

  return (
    <>
      <Navbar className="mb-5 " bg="primary" variant="dark">
        <Navbar.Brand onClick={() => history.push(`/admin`)}>
          TyZa - Admin panel
        </Navbar.Brand>
        <Nav className="w-100">
          <Nav.Link onClick={() => history.push(`/admin/categories`)}>
            Категории
          </Nav.Link>
          <Nav.Link onClick={() => history.push(`/admin/products`)}>
            Товары
          </Nav.Link>
          <Nav.Link onClick={() => history.push(`/admin/orders`)}>
            Заказы
          </Nav.Link>
          <Nav.Link
            className="font-weight-bold text-white ml-auto"
            onClick={() => history.push(`/`)}
          >
            Вернуться на сайт
          </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/admin">
          <AdminPageContent />
        </Route>
        <Route path={`/admin/categories`}>
          <CategoriesPage />
        </Route>
        <Route path={`/admin/products`}>
          <ProductsPage />
        </Route>
        <Route path={`/admin/orders`}>
          <OrderPage />
        </Route>
        <Route render={() => <Redirect to="/" />}></Route>
      </Switch>
    </>
  );
};

export default AdminPage;
