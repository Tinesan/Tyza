import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import * as Styled from "./Header.styled";
import Logo from "images/icons/logo.svg";
import Button, { ButtonSize, ButtonColor } from "../Button";

const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={Logo} alt="Logo" />
          </Col>
          <Col xs={6}>
            <ListGroup horizontal className="justify-content-between">
              <Styled.ListGroupItem>Каталог</Styled.ListGroupItem>
              <Styled.ListGroupItem>Информация</Styled.ListGroupItem>
              <Styled.ListGroupItem>Контакты</Styled.ListGroupItem>
            </ListGroup>
          </Col>
          <Col>
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
