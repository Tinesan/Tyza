import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import DeliveryIcon from "images/icons/delivery-icon.svg";
import { colors } from "ui/colors";
import { device } from "ui/media";
import {
  DELIVERY_PRICE,
  MIN_PRICE_FOR_ORDER,
  PRICE_FOR_FREE_DELIVERY,
} from "modals/BasketModal";

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
        <Row className="align-items-center mb-4 pb-2">
          <Col md={9}>
            <div className="mb-3">
              <p className="mb-2 font-weight-bold">Доставка по городу Минск:</p>
              <p className="mb-2">
                При заказе от {PRICE_FOR_FREE_DELIVERY} руб. доставка
                осуществляется бесплатно.
              </p>
              <p className="mb-0">
                При заказе от {MIN_PRICE_FOR_ORDER} руб. стоимость доставки
                составляет {DELIVERY_PRICE} руб.
              </p>
            </div>
            <p className="mb-0 font-weight-bold">
              Доставка за пределы города оговаривается с менеджером
            </p>
          </Col>
          <Col className="d-none d-md-block" md={3}>
            <DeliveryBg />
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <div>
              <p className="mb-2 font-weight-bold">
                Доставка по городам Барановичи, Белыничи, Березино, Бобруйск,
                Дзержинск, Клецк, Кличев, Копыль, Ляховичи, Марьина горка,
                Могилёв, Несвиж, Осиповичи, Слуцк, Старые дороги, Столбцы,
                Фаниполь, Червень и населенным пунктам расположенным рядом:
              </p>
              <p className="mb-2">Миминальная сумма заказа 85 руб.</p>
              <p className="mb-4 pb-2 font-weight-bold">
                Дата и время доставки оговаривается с менеджером.
              </p>
              <p className="mb-0 font-weight-bold">
                Доставка по всей РБ оговаривается с менеджером.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </DeliveryWrapper>
  );
};

export default Delivery;
