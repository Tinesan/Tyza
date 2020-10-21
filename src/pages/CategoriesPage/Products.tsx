import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import AdminProducts from "components/AdminProducts";
import Categories from "components/Categories";

const ProductsPageWrapper = styled.section`
  padding-top: 40px;
`;

const CategoriesPage = () => {
  return (
    <ProductsPageWrapper>
      <Container>
        <Categories />
      </Container>
    </ProductsPageWrapper>
  );
};

export default CategoriesPage;
