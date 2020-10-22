import { ProductItemFragment } from "generated/graphql";
import React from "react";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

type Props = {
  products: ProductItemFragment[];
  onDeleteButtonClick: (id: string) => void;
  onEditButtonClick: (id: string) => void;
};

const ProductList = ({
  products,
  onDeleteButtonClick,
  onEditButtonClick,
}: Props) => {
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
                <div>
                  <Button
                    variant="danger"
                    onClick={() => onDeleteButtonClick(id)}
                  >
                    Удалить
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
