import React from "react";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

import { ProductDto } from "generated/graphql";

type Props = {
  onEditButtonClick: (id: string) => void;
  products: Pick<
    ProductDto,
    "id" | "name" | "price" | "description" | "stock" | "categoryId" | "costPer"
  >[];
};

const ProductList = ({ products, onEditButtonClick }: Props) => {
  return (
    <ListGroup>
      {products.map(({ id, name }) => {
        return (
          <ListGroup.Item action key={id}>
            <Row className="align-items-center">
              <Col md={8}>{name}</Col>
              <Col className="justify-content-end d-flex">
                <div className="mr-3">
                  <Button
                    variant="primary"
                    onClick={() => onEditButtonClick(id)}
                  >
                    Редактировать
                  </Button>
                </div>
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default ProductList;
