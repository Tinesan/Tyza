import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";

import { CategoryItemFragment, ProductItemFragment } from "generated/graphql";
import { DataContext } from "providers/DataProvider";
import { H2 } from "ui/Title";

import Product from "./Product";
import styled from "styled-components";
import { device } from "ui/media";

type PoductsAndACategories = {
  categories: CategoryItemFragment[];
  products: ProductItemFragment[];
};

type ProductsForClientPage = {
  categoryName: string;
  order: string;
  products: ProductItemFragment[];
};

const transformProductsForClient = ({
  categories,
  products,
}: PoductsAndACategories): ProductsForClientPage[] => {
  const productsWithCategoryName: ProductsForClientPage[] = [];
  for (const product of products) {
    const { categoryId } = product;
    const categoryByProudctId = categories.find(
      (category) => category.id === categoryId
    );
    if (categoryByProudctId) {
      const { name: categoryName, description: order } = categoryByProudctId;
      const productCategory = productsWithCategoryName.find(
        (item) => item.categoryName === categoryName
      );
      if (productCategory) {
        productCategory.products.push(product);
      } else {
        const newProductsForClientPage: ProductsForClientPage = {
          order: order ?? "",
          categoryName,
          products: [product],
        };
        productsWithCategoryName.push(newProductsForClientPage);
      }
    }
  }

  productsWithCategoryName.sort((a, b) => {
    return +a.order - +b.order;
  });

  return productsWithCategoryName;
};

const StyledRow = styled(Row)`
  margin-top: -23px;

  @media ${device.mobile} {
    margin-top: 0;
  }
`;

const StyledCol = styled(Col)`
  padding: 0 6px;

  @media ${device.mobile} {
    padding: 0;
  }
`;

const Products = () => {
  const { products, categories } = useContext(DataContext);
  const productsWithCategoryName = transformProductsForClient({
    categories,
    products,
  });

  return (
    <Element name="products">
      <Container>
        {productsWithCategoryName.map(({ categoryName, products }, inx) => {
          return (
            <Row key={categoryName + inx} className={inx ? "mt-5" : ""}>
              <Col>
                <Row>
                  <Col>
                    <H2 className="amatic coffee-color text-center mb-4 mb-xl-0">
                      {categoryName}
                    </H2>
                  </Col>
                </Row>
                <StyledRow>
                  {products.map((product: ProductItemFragment, inx) => {
                    return (
                      <StyledCol
                        xs={6}
                        sm={4}
                        md={3}
                        className="mt-0 mt-xl-5"
                        key={product.id}
                      >
                        <Product product={product} />
                      </StyledCol>
                    );
                  })}
                </StyledRow>
              </Col>
            </Row>
          );
        })}
      </Container>
    </Element>
  );
};

export default Products;
