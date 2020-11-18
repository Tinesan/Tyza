import React, { useContext, useMemo, useState } from "react";
import { Button, Col, ListGroup, Row, Spinner } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";

import { ConfirmModal, FormModal } from "components/Modal";
import { useAddNewImagesMutation, useAddNewProductMutation, useDeleteProductMutation, useUpdateProductMutation } from "generated/graphql";
import { AuthContext } from "providers/AuthProvider";
import { DataContext } from "providers/DataProvider";

import ProductItem from "./ProductItem";
import ProductModal, { ProductModalData } from "./ProductModal";

const Products = () => {
  const { addToast } = useToasts();
  const {
    products,
    dataProviderLoading,
    refetchCategoriesAndProducts,
  } = useContext(DataContext);
  const { isAdmin } = useContext(AuthContext);
  const [addNewImage] = useAddNewImagesMutation();
  const [addNewProduct] = useAddNewProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [editableProductId, setEditableProductId] = useState<
    string | null | undefined
  >(null);
  const [deletedProductId, setDeletedProductId] = useState<ID | undefined>(
    undefined
  );

  const deletedProductName: string = useMemo(() => {
    if (deletedProductId) {
      const deletedProduct = products.find(
        (item) => item.id === deletedProductId
      );
      if (deletedProduct) {
        return deletedProduct.name;
      }
    }
    return "";
  }, [products, deletedProductId]);

  const onModalSave = async (productData: ProductModalData) => {
    const { id, ...newProductData } = productData;
    try {
      if (id) {
        await updateProduct({ variables: { ...productData, id } });
      } else {
        await addNewProduct({
          variables: newProductData,
        });
      }
      await refetchCategoriesAndProducts();
    } catch (error) {
      addToast("Извините, произошла ошибка", { appearance: "error" });
    }
    setEditableProductId(null);
  };

  const prepareProductForDelete = (id: ID) => {
    setDeletedProductId(id);
  };

  const onDeleteProduct = async () => {
    try {
      if (deletedProductId) {
        await deleteProduct({ variables: { id: deletedProductId } });
        await refetchCategoriesAndProducts();
      }
    } catch (error) {
      addToast("Извините, произошла ошибка", { appearance: "error" });
    }
    setDeletedProductId(undefined);
  };

  const handleChangeIcon = (id: ID) => async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      try {
        await addNewImage({
          variables: {
            productId: id,
            images: [e.target.files[0]],
          },
        });
        await refetchCategoriesAndProducts();
      } catch (error) {
        addToast("Извините, произошла ошибка", { appearance: "error" });
      }
    }
  };

  return (
    <>
      <Row className="mt-3">
        <Col>
          <Button
            disabled={!isAdmin}
            onClick={() => setEditableProductId(undefined)}
          >
            Добавить товар
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {!dataProviderLoading ? (
            <ListGroup>
              {products.map((product) => {
                const { id } = product;
                return (
                  <ProductItem
                    key={id}
                    product={product}
                    onChangeIcon={handleChangeIcon(id)}
                    onEditButtonClick={() => setEditableProductId(id)}
                    onDeleteButtonClick={() => prepareProductForDelete(id)}
                  />
                );
              })}
            </ListGroup>
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
        </Col>
      </Row>
      {editableProductId !== null && (
        <ProductModal id={editableProductId}>
          {({ form, isSaveButtonDisabled, productModalData }) => {
            const isNewProduct = editableProductId === undefined;
            const title = isNewProduct
              ? "Добавить товар"
              : "Редактировать товар";

            const saveButtonDisabled = isSaveButtonDisabled;

            return (
              <FormModal
                body={form}
                title={title}
                onSave={() => onModalSave(productModalData)}
                onCancel={() => setEditableProductId(null)}
                saveButtonDisabled={saveButtonDisabled}
              />
            );
          }}
        </ProductModal>
      )}
      {deletedProductId && (
        <ConfirmModal
          title={`Вы точно хотите удалить категорию ${deletedProductName}`}
          onConfirm={onDeleteProduct}
          onCancel={() => setDeletedProductId(undefined)}
          confirmButtonDisabled={dataProviderLoading}
        />
      )}
    </>
  );
};

export default Products;
