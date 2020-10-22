import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import { DataContext } from "providers/DataProvider";
import { useProductQuery } from "generated/graphql";

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

  const isSaveButtonDisabled = [
    name,
    price,
    costPer,
    categoryId,
    description,
  ].some((field) => {
    return !field.toString().trim();
  });

  const form = (
    <Row className="justify-content-center">
      <Col>
        <Form.Group>
          <Form.Label>Название товара</Form.Label>
          <Form.Control
            type="text"
            value={name}
            placeholder="Введите название товара"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Цена товара, рублей</Form.Label>
          <Form.Control
            min="0"
            value={price}
            type="number"
            placeholder="Введите цену товара"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Категория товара</Form.Label>
          <Form.Control
            as="select"
            custom
            defaultValue={""}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option disabled value="">
              Выберите категорию
            </option>
            {categories.map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Описание товара</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите описание товара"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Cтоимость за</Form.Label>
          <Form.Control
            type="text"
            value={costPer}
            placeholder="Введите название стоимость за ( 1кг, 1 упаковку, пару, метр)"
            onChange={(e) => setCoastPer(e.target.value)}
          />
        </Form.Group>
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
