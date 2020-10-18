import React, { useMemo, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";

import { ConfirmModal, FormModal } from "components/Modal";

import CategoryModal, { CategoryModalData } from "./CategoryModal";
import {
  useCategoriesQuery,
  useAddNewCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from "generated/graphql";
import CategoriesList from "./CategoriesList";

type Props = {};

type EditableCategotyId = string | null | undefined;

const Categories = () => {
  const [editableCategotyId, setEditableCategotyId] = useState<
    EditableCategotyId
  >(null);
  const [deletedСategoryId, setDeletedСategoryId] = useState<ID | undefined>(
    undefined
  );

  const {
    data,
    refetch: refetchCategories,
    loading: categoriesLoading,
  } = useCategoriesQuery();
  const [
    addNewCategory,
    { loading: addNewCategoryLoading },
  ] = useAddNewCategoryMutation();
  const [
    updateCategory,
    { loading: updateCategoryLoading },
  ] = useUpdateCategoryMutation();
  const [
    deleteCategory,
    { loading: deleteCategoryLoading },
  ] = useDeleteCategoryMutation();

  const onModalSave = async (data: CategoryModalData) => {
    const { id, categoryName: name } = data;
    if (id) {
      await updateCategory({ variables: { id, name } });
    } else {
      await addNewCategory({
        variables: { name },
      });
    }
    await refetchCategories();
    setEditableCategotyId(null);
  };

  const onCategoryEditButtonClick = (id: ID) => {
    setEditableCategotyId(id);
  };

  const onCategoryDeleteButtonClick = (id: ID) => {
    setDeletedСategoryId(id);
  };

  const onDeleteCategory = async () => {
    if (deletedСategoryId) {
      try {
        await deleteCategory({ variables: { id: deletedСategoryId } });
        await refetchCategories();
        setEditableCategotyId(undefined);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deletedCategoryName: string = useMemo(() => {
    if (deletedСategoryId && data?.listCategory) {
      const deletedCategory = data.listCategory.find(
        (item) => item.id === deletedСategoryId
      );
      if (deletedCategory) {
        return deletedCategory.name;
      }
    }
    return "";
  }, [data, deletedСategoryId]);

  const isLoading =
    addNewCategoryLoading || updateCategoryLoading || categoriesLoading;

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
          {data?.listCategory && !categoriesLoading ? (
            <CategoriesList
              categories={data?.listCategory}
              onEdit={onCategoryEditButtonClick}
              onDelete={onCategoryDeleteButtonClick}
            />
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
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

            const saveButtonDisabled = isSaveButtonDisabled || isLoading;

            return (
              <FormModal
                body={form}
                title={title}
                onSave={() => onModalSave(categoryModalData)}
                onCancel={() => setEditableCategotyId(null)}
                saveButtonDisabled={saveButtonDisabled}
              />
            );
          }}
        </CategoryModal>
      )}
      {deletedСategoryId && (
        <ConfirmModal
          title={`Вы точно хотите удалить категорию ${deletedCategoryName}`}
          onConfirm={onDeleteCategory}
          onCancel={() => setDeletedСategoryId(undefined)}
          confirmButtonDisabled={deleteCategoryLoading || isLoading}
        />
      )}
    </>
  );
};

export default Categories;
