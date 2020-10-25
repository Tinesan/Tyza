import React from "react";
import { Col, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import styled from "styled-components";

import { ProductItemFragment } from "generated/graphql";

type Props = {
  product: ProductItemFragment;
  onChangeIcon: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEditButtonClick: () => void;
  onDeleteButtonClick: () => void;
};

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ProductItem = ({
  product,
  onChangeIcon,
  onEditButtonClick,
  onDeleteButtonClick,
}: Props) => {
  const { name, images } = product;
  const productImage = images[0]?.uri;
  return (
    <ListGroup.Item action>
      <Row className="align-items-center">
        <Col md={5}>{name}</Col>
        <Col className="justify-content-end d-flex">
          <ProductImage className="mr-3">
            {productImage && (
              <img src={`http://${productImage}`} alt="productImage" />
            )}
          </ProductImage>
          <Form.File
            custom
            className="mr-3"
            label={productImage ? "Изменить картинку" : "Загрузить картинку"}
            onChange={onChangeIcon}
          />
          <div className="mr-3">
            <Button variant="primary" onClick={onEditButtonClick}>
              Редактировать
            </Button>
          </div>
          <div>
            <Button variant="danger" onClick={onDeleteButtonClick}>
              Удалить
            </Button>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ProductItem;
