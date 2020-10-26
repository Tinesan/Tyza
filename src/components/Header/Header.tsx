import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-scroll";

import Logo from "images/icons/logo.svg";

import Button, { BasketIcon, ButtonColor, ButtonSize } from "../Button";
import * as Styled from "./Header.styled";

const scrollDefaultProps = {
  spy: true,
  smooth: true,
  duration: 1000,
  offset: -20,
};

const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Container>
        <Row className="align-items-center">
          <Col xs={2}>
            <img src={Logo} alt="Logo" />
          </Col>
          <Col xs={6}>
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
          <Col xs={4} className="d-flex align-items-center justify-content-end">
            <BasketIcon whiteIndicator className="mr-4" />
            <Button
              className="montserrat"
              text="Заказать звонок"
              onClick={console.log}
              size={ButtonSize.LARGE}
              color={ButtonColor.TRANSPARENT}
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <Styled.TitleWrapper>
              <Styled.Title className="amatic mt-4">
                Натуральный замороженный мясной корм <br />
                для собак и кошек
              </Styled.Title>
            </Styled.TitleWrapper>
            <Styled.SubtitleWrapper className="mt-4">
              <Styled.Subtitle>
                Cбалансированное питание для вашего питомца от производителя с
                доставкой
              </Styled.Subtitle>
            </Styled.SubtitleWrapper>
            <div className="mt-4">
              <Button
                className="montserrat"
                text="Купить"
                onClick={console.log}
                size={ButtonSize.LARGE}
                color={ButtonColor.WHITE}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Styled.HeaderWrapper>
  );
};

export default Header;
