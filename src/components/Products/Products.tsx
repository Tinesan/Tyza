import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      <Container>
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
