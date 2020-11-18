import React, { useContext, useMemo, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";

import { ConfirmModal, FormModal } from "components/Modal";
import {
  useAddNewCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "generated/graphql";
import { AuthContext } from "providers/AuthProvider";
import { DataContext } from "providers/DataProvider";

import CategoriesList from "./CategoriesList";
import CategoryModal, { CategoryModalData } from "./CategoryModal";

type EditableCategotyId = string | null | undefined;

const Categories = () => {
  const { addToast } = useToasts();
  const {
    categories,
    dataProviderLoading,
    refetchCategoriesAndProducts,
  } = useContext(DataContext);
  const { isAdmin } = useContext(AuthContext);
  const [editableCategotyId, setEditableCategotyId] = useState<
    EditableCategotyId
  >(null);
  const [deletedСategoryId, setDeletedСategoryId] = useState<ID | undefined>(
    undefined
  );

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
    const { id, categoryName: name, categoryOrder: description } = data;
    try {
      if (id) {
        await updateCategory({ variables: { id, name, description } });
      } else {
        await addNewCategory({
          variables: { name, description },
        });
      }
      await refetchCategoriesAndProducts();
    } catch (error) {
      addToast("Извините, произошла ошибка", { appearance: "error" });
    }
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
        await refetchCategoriesAndProducts();
      } catch (error) {
        addToast("Извините, произошла ошибка", { appearance: "error" });
      }
      setDeletedСategoryId(undefined);
    }
  };

  const deletedCategoryName: string = useMemo(() => {
    if (deletedСategoryId) {
      const deletedCategory = categories.find(
        (item) => item.id === deletedСategoryId
      );
      if (deletedCategory) {
        return deletedCategory.name;
      }
    }
    return "";
  }, [categories, deletedСategoryId]);

  const isLoading =
    addNewCategoryLoading || updateCategoryLoading || dataProviderLoading;

  return (
    <>
      <Row className="mt-3">
        <Col>
          <Button
            disabled={!isAdmin}
            onClick={() => setEditableCategotyId(undefined)}
          >
            Добавить категорию
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {!dataProviderLoading ? (
            <CategoriesList
              categories={categories}
              onEditButtonClick={onCategoryEditButtonClick}
              onDeleteButtonClick={onCategoryDeleteButtonClick}
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
