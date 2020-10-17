import Modal from "components/Modal";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import CategoryModal, { CategoryModalData } from "./CategoryModal";

type Props = {};

const Categories = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onModalSave = (data: CategoryModalData) => {
    console.log(data);
    setIsModalVisible(false);
  };

  return (
    <>
      <Row className="mt-3">
        <Col>
          <Button onClick={() => setIsModalVisible(true)}>
            Добавить категорию
          </Button>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col>Список категорий</Col>
      </Row>
      {isModalVisible && (
        <CategoryModal id="11">
          {({ form, isSaveButtonDisabled, categoryModalData }) => {
            return (
              <Modal
                body={form}
                title="Добавить категорию"
                onSave={() => onModalSave(categoryModalData)}
                onCancel={() => setIsModalVisible(false)}
                saveButtonDisabled={isSaveButtonDisabled}
              />
            );
          }}
        </CategoryModal>
      )}
    </>
  );
};

export default Categories;
