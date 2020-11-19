import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";

import { CategoryItemFragment, ProductItemFragment } from "generated/graphql";
import { DataContext } from "providers/DataProvider";
import { H2 } from "ui/Title";

import Product from "./Product";

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
                    <H2 className="amatic coffee-color text-center">
                      {categoryName}
                    </H2>
                  </Col>
                </Row>
                <Row style={{ marginTop: "-23px" }}>
                  {products.map((product: ProductItemFragment, inx) => {
                    return (
                      <Col
                        xs={6}
                        sm={4}
                        md={3}
                        className="mt-5"
                        key={product.id}
                      >
                        <Product product={product} />
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          );
        })}
      </Container>
    </Element>
  );
};

export default Products;
