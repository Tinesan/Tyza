import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import AdminProducts from "components/AdminProducts";

const ProductsPageWrapper = styled.section`
  padding-top: 40px;
`;

const ProductsPage = () => {
  return (
    <ProductsPageWrapper>
      <Container>
        <AdminProducts />
      </Container>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
