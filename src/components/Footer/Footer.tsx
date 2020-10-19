import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import Button, { BasketIcon, ButtonColor, ButtonSize } from "components/Button";
import Social from "components/Social";
import Logo from "images/icons/logo.svg";
import { colors } from "ui/colors";
import { H3 } from "ui/Title";

const FooterWrapper = styled.section``;

const FooterText = styled.p`
  margin: 0;
  color: ${colors.gray};
  font-size: 16px;
`;

const OrderCallWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row className="coffee-color ">
          <Col className="align-self-center">
            <img src={Logo} alt="Logo" />
          </Col>
          <Col>
            <H3 className="amatic mb-4">Контакты</H3>
            <div className="mb-2">
              <FooterText>Для приемов заказа</FooterText>
              <FooterText>+375(44) 794-86-56</FooterText>
            </div>
            <div>
              <FooterText>Для сотрудичества</FooterText>
              <FooterText>+375(29) 387-64-93</FooterText>
            </div>
          </Col>
          <Col>
            <H3 className="amatic  mb-4">Время работы</H3>
            <div>
              <FooterText>Пн-Сб: 10.00–20.00</FooterText>
              <FooterText>Вс: выходной</FooterText>
            </div>
          </Col>
          <Col>
            <H3 className="amatic  mb-4">Наши соцсети</H3>
            <div>
              <Social className="pt-1" />
            </div>
          </Col>
          <Col>
            <OrderCallWrapper>
              <BasketIcon className="mr-5" />
              <Button
                text="ЗАКАЗАТЬ ЗВОНОК"
                size={ButtonSize.LARGE}
                color={ButtonColor.WHITE_WITH_BORDER}
                onClick={console.log}
              />
            </OrderCallWrapper>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
