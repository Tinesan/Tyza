import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import { useCategoryQuery } from "generated/graphql";

type Props = {
  id?: ID;
  children: (value: {
    form: JSX.Element;
    isSaveButtonDisabled: boolean;
    categoryModalData: CategoryModalData;
  }) => JSX.Element;
};

export type CategoryModalData = {
  id?: ID;
  categoryName: string;
  categoryOrder: string;
};

const CategoryModal = ({ id, children }: Props) => {
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryOrder, setCategoryOrder] = useState<string>("1");
  const { data } = useCategoryQuery({
    skip: !id,
    variables: { id: id as string },
  });

  useEffect(() => {
    if (data?.categoryById) {
      setCategoryName(data.categoryById.name);
      if (data.categoryById.description) {
        const categoryOrder = +data.categoryById.description;
        setCategoryOrder(isNaN(categoryOrder) ? "1" : categoryOrder.toString());
      }
    }
  }, [data]);

  const form = (
    <Row className="justify-content-center">
      <Col>
        <Form.Group>
          <Form.Label>Название категории</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите название категории"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <Form.Label>Числовой порядок отображения категории</Form.Label>
          <Form.Control
            min={1}
            type="number"
            placeholder="Введите числовой порядок отображения категории"
            value={categoryOrder}
            onChange={(e) => setCategoryOrder(e.target.value)}
          />
        </Form.Group>
      </Col>
    </Row>
  );

  return children({
    form,
    categoryModalData: { categoryName, categoryOrder, id },
    isSaveButtonDisabled: !categoryName.trim(),
  });
};

export default CategoryModal;
