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
};

const CategoryModal = ({ id, children }: Props) => {
  const [categoryName, setCategoryName] = useState<string>("");
  const { data } = useCategoryQuery({
    skip: !id,
    variables: { id: id as string },
  });

  useEffect(() => {
    if (data?.categoryById.name) {
      setCategoryName(data.categoryById.name);
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
        </Form.Group>
      </Col>
    </Row>
  );

  return children({
    form,
    categoryModalData: { categoryName, id },
    isSaveButtonDisabled: !categoryName.trim(),
  });
};

export default CategoryModal;
