import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";

import Categories from "components/Categories";

const ProductsPageWrapper = styled.section`
  padding-top: 40px;
`;

const ProductsPage = () => {
  const [key, setKey] = useState<string>("categories");
  const onTabsSelect = (key: string | null) => {
    if (key) {
      setKey(key);
    }
  };
  return (
    <ProductsPageWrapper>
      <Container>
        <Row>
          <Col>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={onTabsSelect}
            >
              <Tab eventKey="categories" title="Категории">
                <Categories />
              </Tab>
              <Tab eventKey="products" title="Товары">
                Товары
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
