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

const AdminPage = () => {
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
                  <Card.Title>Продукты</Card.Title>
                  <Card.Text>Продукты</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => history.push("/products")}
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
  );
};

export default AdminPage;
