import React, { useContext, useState, useMemo } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";

import { ConfirmModal, FormModal } from "components/Modal";
import {
  useAddNewProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "generated/graphql";

import ProductList from "./ProductList";
import ProductModal, { ProductModalData } from "./ProductModal";
import { DataContext } from "providers/DataProvider";

const Products = () => {
  const {
    products,
    dataProviderLoading,
    refetchCategoriesAndProducts,
  } = useContext(DataContext);
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
      setEditableProductId(null);
    } catch (error) {
      console.log(error);
    }
  };

  const prepareProductForDelete = (id: ID) => {
    setDeletedProductId(id);
  };

  const onDeleteProduct = async () => {
    try {
      if (deletedProductId) {
        await deleteProduct({ variables: { id: deletedProductId } });
        await refetchCategoriesAndProducts();
        setDeletedProductId(undefined);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row className="mt-3">
        <Col>
          <Button onClick={() => setEditableProductId(undefined)}>
            Добавить товар
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {!dataProviderLoading ? (
            <ProductList
              products={products}
              onDeleteButtonClick={prepareProductForDelete}
              onEditButtonClick={setEditableProductId}
            />
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
