import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Categories from "../../images/categories.png";

const AdminPageWrapper = styled.section`
  padding-top: 40px;
`;

const CardWrapper = styled.div`
  max-width: 300px;
  text-align: center;
`;

const AdminPageContent = () => {
  const history = useHistory();

  return (
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
          <Col>
            <CardWrapper>
              <Card>
                <Card.Img variant="top" src={Categories} />
                <Card.Body>
                  <Card.Title>Заказы</Card.Title>
                  <Card.Text>Заказы</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => history.push(`/admin/orders`)}
                  >
                    Перейти к заказам
                  </Button>
                </Card.Body>
              </Card>
            </CardWrapper>
          </Col>
        </Row>
      </Container>
    </AdminPageWrapper>
  );
};

export default AdminPageContent;
