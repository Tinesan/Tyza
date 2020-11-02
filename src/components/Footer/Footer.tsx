import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import Button, { BasketIcon, ButtonColor, ButtonSize } from "components/Button";
import Social from "components/Social";
import Logo from "images/icons/logo.svg";
import useModal from "modals/hooks";
import { colors } from "ui/colors";
import { device } from "ui/media";
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

  @media ${device.tablet} {
    margin-top: 24px;
    flex-direction: column;

    .button-footer {
      width: 100%;
      margin-top: 10px;
    }
  }
  @media ${device.mobile} {
    margin-top: 5px;
  }
`;

const Footer = () => {
  const { openModal } = useModal();
  return (
    <FooterWrapper>
      <Container>
        <Row className="coffee-color ">
          <Col className="d-none d-xl-block align-self-center">
            <img src={Logo} alt="Logo" />
          </Col>
          <Col xs={12} className="mb-3 mb-lg-0" lg={4} xl="auto">
            <H3 className="amatic  mb-2 mb-lg-4">Контакты</H3>
            <div className="mb-2">
              <FooterText>Для приемов заказа</FooterText>
              <FooterText>+375(44) 794-86-56</FooterText>
            </div>
            <div>
              <FooterText>Для сотрудичества</FooterText>
              <FooterText>+375(29) 387-64-93</FooterText>
            </div>
          </Col>
          <Col xs={12} className="mb-3 mb-lg-0" lg={4} xl="auto">
            <H3 className="amatic  mb-2 mb-lg-4">Время работы</H3>
            <div>
              <FooterText>Пн-Сб: 10.00–20.00</FooterText>
              <FooterText>Вс: выходной</FooterText>
            </div>
          </Col>
          <Col xs={12} className="mb-3 mb-lg-0" lg={4} xl="auto">
            <H3 className="amatic mb-2 mb-lg-4">Наши соцсети</H3>
            <div>
              <Social className="pt-1" />
            </div>
          </Col>
          <Col xs={12} lg={12} xl="auto">
            <OrderCallWrapper className="d-lg-flex justify-content-lg-center">
              <BasketIcon className="d-none d-xl-block mr-5" />
              <Button
                className="button-footer d-block d-xl-none mr-0 mr-lg-3"
                text="Оформить заказ"
                size={ButtonSize.LARGE}
                color={ButtonColor.WHITE_WITH_BORDER}
                onClick={() => openModal("orderModal")}
              />
              <Button
                className="button-footer"
                text="ЗАКАЗАТЬ ЗВОНОК"
                size={ButtonSize.LARGE}
                color={ButtonColor.WHITE_WITH_BORDER}
                onClick={() =>
                  openModal("callModal", { dialogClassName: "call-modal" })
                }
              />
            </OrderCallWrapper>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
