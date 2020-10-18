import React, { useState } from "react";
import { Button, Col, ListGroup, Row, Spinner } from "react-bootstrap";

import Modal from "components/Modal";

import CategoryModal, { CategoryModalData } from "./CategoryModal";
import {
  useAddNewCategoryMutation,
  useCategoriesQuery,
} from "generated/graphql";
import CategoriesList from "./CategoriesList";

type Props = {};

const Categories = () => {
  const { data, refetch } = useCategoriesQuery();
  const [addNewCategoryMutation] = useAddNewCategoryMutation();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onModalSave = async (data: CategoryModalData) => {
    await addNewCategoryMutation({
      variables: { name: data.categoryName },
    });
    await refetch();
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
      <Row className="mt-3">
        <Col>
          {data?.listCategory ? (
            <CategoriesList categories={data?.listCategory} />
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </Col>
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
