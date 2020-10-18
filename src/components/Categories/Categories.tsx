import React, { useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";

import Modal from "components/Modal";

import CategoryModal, { CategoryModalData } from "./CategoryModal";
import {
  useCategoriesQuery,
  useAddNewCategoryMutation,
  useUpdateCategoryMutation,
} from "generated/graphql";
import CategoriesList from "./CategoriesList";

type Props = {};

type EditableCategotyId = string | null | undefined;

const Categories = () => {
  const { data, refetch } = useCategoriesQuery();
  const [addNewCategory] = useAddNewCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [editableCategotyId, setEditableCategotyId] = useState<
    EditableCategotyId
  >(null);

  const onModalSave = async (data: CategoryModalData) => {
    const { id, categoryName: name } = data;
    if (id) {
      await updateCategory({ variables: { id, name } });
    } else {
      await addNewCategory({
        variables: { name },
      });
    }
    await refetch();
    setEditableCategotyId(null);
  };

  const onCategoryEditButtonClick = (id: ID) => {
    setEditableCategotyId(id);
  };

  return (
    <>
      <Row className="mt-3">
        <Col>
          <Button onClick={() => setEditableCategotyId(undefined)}>
            Добавить категорию
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {data?.listCategory ? (
            <CategoriesList
              categories={data?.listCategory}
              onEdit={onCategoryEditButtonClick}
            />
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </Col>
      </Row>
      {editableCategotyId !== null && (
        <CategoryModal id={editableCategotyId}>
          {({ form, isSaveButtonDisabled, categoryModalData }) => {
            const isNewCategory = editableCategotyId === undefined;
            const title = isNewCategory
              ? "Добавить категорию"
              : "Редактировать категорию";
            return (
              <Modal
                body={form}
                title={title}
                onSave={() => onModalSave(categoryModalData)}
                onCancel={() => setEditableCategotyId(null)}
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
