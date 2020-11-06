import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Element, Link } from "react-scroll";

import Logo from "images/icons/logo.svg";
import useModal from "modals/hooks";

import Button, { BasketIcon, ButtonColor, ButtonSize } from "../Button";
import * as Styled from "./Header.styled";

const scrollDefaultProps = {
  spy: true,
  smooth: true,
  duration: 1000,
  offset: -20,
};

const Header = () => {
  const { openModal } = useModal();
  return (
    <Element name="header">
      <Styled.HeaderWrapper>
        <Container>
          <Row className="align-items-center">
            <Col xs={6} md={2}>
              <img src={Logo} alt="Logo" />
            </Col>
            <Col className="d-none d-md-block" xs={0} md={6}>
              <ListGroup horizontal className="justify-content-around">
                <Styled.ListGroupItem>
                  <Link to="products" {...scrollDefaultProps}>
                    Каталог
                  </Link>
                </Styled.ListGroupItem>
                <Styled.ListGroupItem>
                  <Link to="info" {...scrollDefaultProps}>
                    Информация
                  </Link>
                </Styled.ListGroupItem>
                <Styled.ListGroupItem>
                  <Link to="contacts" {...scrollDefaultProps}>
                    Контакты
                  </Link>
                </Styled.ListGroupItem>
              </ListGroup>
            </Col>
            <Col
              xs={6}
              md={4}
              className="d-flex align-items-center justify-content-end"
            >
              <BasketIcon whiteIndicator className="mr-4" />
              <Button
                className="montserrat d-none d-md-block"
                text="Заказать звонок"
                onClick={() =>
                  openModal("callModal", { dialogClassName: "call-modal" })
                }
                size={ButtonSize.LARGE}
                color={ButtonColor.TRANSPARENT}
              />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <Styled.TitleWrapper>
                <Styled.Title className="amatic mt-4">
                  Натуральный замороженный мясной корм{" "}
                  <br className="d-none d-lg-block" />
                  для собак и кошек
                </Styled.Title>
              </Styled.TitleWrapper>
              <Styled.SubtitleWrapper className="mt-4">
                <Styled.Subtitle>
                  Cбалансированное питание для вашего питомца от производителя с
                  доставкой
                </Styled.Subtitle>
              </Styled.SubtitleWrapper>
              <Styled.ButtonWrapper className="mt-4">
                <Link to="products" {...scrollDefaultProps}>
                  <Button
                    className="montserrat header-button "
                    text="Купить"
                    size={ButtonSize.LARGE}
                    color={ButtonColor.WHITE}
                  />
                </Link>
                <Button
                  className="montserrat d-block d-md-none mt-3 header-button"
                  text="Заказать звонок"
                  onClick={() =>
                    openModal("callModal", { dialogClassName: "call-modal" })
                  }
                  size={ButtonSize.LARGE}
                  color={ButtonColor.TRANSPARENT}
                />
              </Styled.ButtonWrapper>
            </Col>
          </Row>
        </Container>
      </Styled.HeaderWrapper>
    </Element>
  );
};

export default Header;
