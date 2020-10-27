import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import Products from "modules/Admin/Products";

const ProductsPageWrapper = styled.section``;

const ProductsPage = () => {
  return (
    <ProductsPageWrapper>
      <Container>
        <Products />
      </Container>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
