import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { H2 } from "ui/Title";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <H2 className="amatic coffee-color text-center mb-4">
              Готовые корма
            </H2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
          <Col>
            <Product />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
