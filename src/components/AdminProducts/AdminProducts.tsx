import React, { useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";

import { FormModal } from "components/Modal";
import { useAddNewProductMutation, useProductsQuery } from "generated/graphql";

import ProductList from "./ProductList";
import ProductModal, { ProductModalData } from "./ProductModal";

const AdminProducts = () => {
  const [addNewProduct] = useAddNewProductMutation();
  const [editableProductId, setEditableProductId] = useState<
    string | null | undefined
  >(null);

  const { data } = useProductsQuery();

  const onModalSave = (productData: ProductModalData) => {
    console.log(productData);
    const {
      productName,
      productDescription,
      inStock,
      coastPer,
      productPrice,
      categoryId,
    } = productData;
    addNewProduct({
      variables: {
        name: productName,
        description: productDescription,
        stock: inStock,
        categoryId: categoryId,
        costPer: coastPer,
        price: productPrice,
      },
    })
      .then(console.log)
      .catch(console.log);
  };
  return (
    <>
      <Row className="mt-3">
        <Col>
          <Button onClick={() => setEditableProductId(undefined)}>
            Добавить товара
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {data?.listProduct ? (
            <ProductList
              products={data?.listProduct}
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
            const isNewCategory = editableProductId === undefined;
            const title = isNewCategory
              ? "Добавить категорию"
              : "Редактировать категорию";

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
    </>
  );
};

export default AdminProducts;
