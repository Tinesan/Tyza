import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";

import CategoriesPage from "pages/CategoriesPage";
import ProductsPage from "pages/ProductsPage";

import Categories from "../../images/categories.png";

const AdminPageWrapper = styled.section`
  padding-top: 40px;
`;

const CardWrapper = styled.div`
  max-width: 300px;
  text-align: center;
`;

const AdminPage = () => {
  const history = useHistory();
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={"/admin"}>
        <AdminPageWrapper>
          <Container>
            <Row>
              <Col>
                <CardWrapper>
                  <Card>
                    <Card.Img variant="top" src={Categories} />
                    <Card.Body>
                      <Card.Title>Категории</Card.Title>
                      <Card.Text>Категории</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => history.push(`/admin/categories`)}
                      >
                        Перейти к категориям
                      </Button>
                    </Card.Body>
                  </Card>
                </CardWrapper>
              </Col>
              <Col>
                <CardWrapper>
                  <Card>
                    <Card.Img variant="top" src={Categories} />
                    <Card.Body>
                      <Card.Title>Товары</Card.Title>
                      <Card.Text>Товары</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => history.push(`/admin/products`)}
                      >
                        Перейти к товарам
                      </Button>
                    </Card.Body>
                  </Card>
                </CardWrapper>
              </Col>
            </Row>
          </Container>
        </AdminPageWrapper>
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
