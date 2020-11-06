import React, { useCallback } from "react";
import { Col, Container, Pagination, Row, Spinner, Table } from "react-bootstrap";
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
  const { data, refetch: refetchOrders } = useFindAllOrdersQuery({
    variables: { page: "0", size: "10", sort: "createdDate,DESC" },
  });

  const getNextPage = useCallback(() => {
    const currentPage = data?.findAllOrders.number;
    if (typeof currentPage === "number") {
      refetchOrders({ page: (currentPage + 1).toString() });
    }
  }, [refetchOrders, data]);

  const getPreviousPage = useCallback(() => {
    const currentPage = data?.findAllOrders.number;
    if (typeof currentPage === "number") {
      refetchOrders({ page: (currentPage - 1).toString() });
    }
  }, [refetchOrders, data]);

  if (!data?.findAllOrders.content) {
    return (
      <SpinnerWrapper>
        <Spinner animation="border" variant="primary" />;
      </SpinnerWrapper>
    );
  }
  const { first, totalPages, last, number } = data.findAllOrders;

  return (
    <Container>
      <Row>
        <Col>
          <Pagination>
            <Pagination.First
              disabled={first}
              onClick={() => refetchOrders({ page: "0" })}
            />

            <Pagination.Prev disabled={first} onClick={getPreviousPage} />
            {!first && (
              <Pagination.Item onClick={getPreviousPage}>
                {number}
              </Pagination.Item>
            )}
            <Pagination.Item active>{number + 1}</Pagination.Item>
            {!last && (
              <Pagination.Item onClick={getNextPage}>
                {number + 2}
              </Pagination.Item>
            )}
            <Pagination.Next disabled={last} onClick={getNextPage} />
            <Pagination.Last
              disabled={last}
              onClick={() =>
                refetchOrders({ page: (totalPages - 1).toString() })
              }
            />
          </Pagination>
        </Col>
      </Row>
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
