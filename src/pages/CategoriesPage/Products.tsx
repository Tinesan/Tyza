import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import Categories from "modules/Admin/Categories";

const ProductsPageWrapper = styled.section``;

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
