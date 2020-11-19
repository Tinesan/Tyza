import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import { useProductQuery } from "generated/graphql";
import { AuthContext } from "providers/AuthProvider";
import { DataContext } from "providers/DataProvider";

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
  name: string;
  costPer: string;
  stock: boolean;
  categoryId: string;
  price: string;
  description: string;
};

const ProductModal = ({ id, children }: Props) => {
  const { isAdmin } = useContext(AuthContext);
  const { data } = useProductQuery({ variables: { id: id! }, skip: !id });
  const { categories } = useContext(DataContext);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [stock, setStock] = useState<boolean>(true);
  const [costPer, setCoastPer] = useState<string>("1кг");
  const [categoryId, setCategoryId] = useState<string>("");
  const [description, setDescription] = useState<string>("Состав:");

  useEffect(() => {
    if (data?.productById) {
      const {
        name,
        price,
        stock,
        costPer,
        categoryId,
        description,
      } = data.productById;
      setName(name);
      setPrice(price);
      setStock(stock);
      setCoastPer(costPer);
      setCategoryId(categoryId);
      setDescription(description || "");
    }
  }, [data]);

  const isSaveButtonDisabled = [name, price, costPer, categoryId].some(
    (field) => {
      return !field.toString().trim();
    }
  );

  const form = (
    <>
      <Row className="justify-content-center">
        <Col>
          <Form.Group>
            <Form.Label>Название товара</Form.Label>
            <Form.Control
              type="text"
              value={name}
              disabled={!isAdmin}
              placeholder="Введите название товара"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Категория товара</Form.Label>
            <Form.Control
              as="select"
              custom
              disabled={!isAdmin}
              defaultValue={""}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option disabled value="">
                Выберите категорию
              </option>
              {categories.map(({ id, name }) => {
                return (
                  <option key={id} value={id} selected={id === categoryId}>
                    {name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Цена товара, рублей</Form.Label>
            <Form.Control
              min="0"
              value={price}
              type="number"
              disabled={!isAdmin}
              placeholder="Введите цену товара"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Cтоимость за</Form.Label>
            <Form.Control
              type="text"
              value={costPer}
              disabled={!isAdmin}
              placeholder="Введите название стоимость за ( 1кг, 1 упаковку, пару, метр)"
              onChange={(e) => setCoastPer(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Описание товара</Form.Label>
            <Form.Control
              rows={3}
              type="text"
              as="textarea"
              disabled={!isAdmin}
              value={description}
              placeholder="Введите описание товара"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              checked={stock}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStock(e.target.checked)
              }
              label="Товар в наличии"
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );

  return children({
    form,
    productModalData: {
      id,
      name,
      price,
      stock,
      costPer,
      categoryId,
      description,
    },
    isSaveButtonDisabled,
  });
};

export default ProductModal;
