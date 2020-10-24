import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";

import { ProductItemFragment } from "generated/graphql";
import { DataContext } from "providers/DataProvider";
import { H2 } from "ui/Title";

import Product from "./Product";

const Products = () => {
  const { products } = useContext(DataContext);
  return (
    <Element name="products">
      <Container>
        <Row>
          <Col>
            <H2 className="amatic coffee-color text-center mb-4">
              Готовые корма
            </H2>
          </Col>
        </Row>
        <Row>
          {products.map((product: ProductItemFragment, inx) => {
            return (
              <Col
                md="3"
                className={inx > 3 ? "mt-4" : undefined}
                key={product.id}
              >
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Element>
  );
};

export default Products;
