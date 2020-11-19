import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import DeliveryIcon from "images/icons/delivery-icon.svg";
import { colors } from "ui/colors";
import { device } from "ui/media";

const DeliveryWrapper = styled.section`
  background-color: ${colors.silk};
  padding: 40px 0;
  font-size: 24px;
  color: ${colors.white};

  @media ${device.tablet} {
    padding: 25px 0;
    font-size: 18px;
  }

  @media ${device.mobile} {
    padding: 25px 0;
  }
`;

const DeliveryBg = styled.div`
  height: 120px;
  background: url(${DeliveryIcon}) no-repeat;
  background-size: contain;
  background-position: center center;

  @media ${device.tablet} {
    height: 80px;
  }
`;

const Delivery = () => {
  return (
    <DeliveryWrapper>
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <div className="mb-3">
              <p className="mb-2 font-weight-bold">Доставка по городу Минск:</p>
              <p className="mb-2">
                При заказе от 40 руб. доставка осуществляется бесплатно.
              </p>
              <p className="mb-0">
                При заказе от 25 руб. стоимость доставки составляет 4 руб.{" "}
              </p>
            </div>
            <p className="mb-0 font-weight-bold">
              Доставка за пределы города оговаривается с менеджером
            </p>
          </Col>
          <Col className="d-none d-md-block" md={4}>
            <DeliveryBg />
          </Col>
        </Row>
      </Container>
    </DeliveryWrapper>
  );
};

export default Delivery;
