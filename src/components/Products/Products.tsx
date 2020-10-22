import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { ProductItemFragment } from "generated/graphql";
import { H2 } from "ui/Title";

import Product from "./Product";
import { DataContext } from "providers/DataProvider";

const Products = () => {
  const { products } = useContext(DataContext);
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
          {products.map((product: ProductItemFragment) => {
            return (
              <Col md="3" key={product.id}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
