import React from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import styled from "styled-components";

import { OrderContentItemFragment, useFindAllOrdersQuery } from "generated/graphql";

import OrderItem from "./OrderItem";

const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 50px;
`;

const OrderPage = () => {
  const { data } = useFindAllOrdersQuery();
  if (!data?.findAllOrders.content) {
    return (
      <SpinnerWrapper>
        <Spinner animation="border" variant="primary" />;
      </SpinnerWrapper>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Заказчик</th>
                <th>Адрес / время доставки </th>
                <th>Товары</th>
                <th>Цена </th>
              </tr>
            </thead>
            <tbody>
              {data.findAllOrders.content.map(
                (order: OrderContentItemFragment) => {
                  return <OrderItem key={order.id} data={order} />;
                }
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;
