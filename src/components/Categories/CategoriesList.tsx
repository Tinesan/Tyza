import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";

type Props = {
  categories: {
    id: ID;
    name: string;
  }[];
  onEdit: (id: ID) => void;
  onDelete: (id: ID) => void;
};

const CategoriesList = ({ categories, onEdit, onDelete }: Props) => {
  return (
    <ListGroup>
      {categories.map(({ id, name }) => {
        return (
          <ListGroup.Item action key={id}>
            <Row className="align-items-center">
              <Col md={8}>{name}</Col>
              <Col className="justify-content-end d-flex">
                <div className="mr-3">
                  <Button variant="primary" onClick={() => onEdit(id)}>
                    Редактировать
                  </Button>
                </div>
                <div>
                  <Button variant="danger" onClick={() => onDelete(id)}>
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

export default CategoriesList;
