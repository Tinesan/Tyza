import React, { useState } from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";

import { useAddNewImagesMutation } from "generated/graphql";

type Props = {
  id?: ID;
  children: (value: {
    form: JSX.Element;
    isSaveButtonDisabled: boolean;
    productModalData: ProductModalData;
  }) => JSX.Element;
};

export type ProductModalData = {
  id?: ID;
  productName: string;
  productPrice: string;
  productDescription: string;
  inStock: boolean;
  categoryId: string;
  coastPer: string;
};

const ProductModal = ({ id, children }: Props) => {
  const [addNewImages] = useAddNewImagesMutation();
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [inStock, setInStock] = useState<boolean>(true);
  const [categoryId, setCategoryId] = useState<string>(
    "74a3940e-6e36-4e25-acb9-6c18d7e9d06f"
  );
  const [coastPer, setCoastPer] = useState<string>("1кг");

  const onFileChange = (e: React.ChangeEvent<any>) => {
    addNewImages({
      variables: {
        images: e.target.files,
        productId: id!,
      },
    })
      .then(console.log)
      .catch(console.log);
  };

  const form = (
    <Row className="justify-content-center">
      <Col>
        <Form.Group>
          <Form.Label>Название товара</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите название товара"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Цена товара</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите название товара"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Описание товара</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите название товара"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </Form.Group>
        <div>
          <input
            type="checkbox"
            id="scales"
            name="scales"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />
          В наличии
        </div>
        {id && (
          <Form.Group>
            <Form.Label>Цена товара</Form.Label>
            <Form.Control
              type="file"
              placeholder="Введите название товара"
              onChange={onFileChange}
            />
          </Form.Group>
        )}
      </Col>
    </Row>
  );

  return children({
    form,
    productModalData: {
      productName,
      productPrice,
      productDescription,
      inStock,
      coastPer,
      categoryId,
      id,
    },
    isSaveButtonDisabled: !productName.trim(),
  });
};

export default ProductModal;
