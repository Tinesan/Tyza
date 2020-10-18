import Logo from "images/icons/logo.svg";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

type Props = {};

const FooterWrapper = styled.section``;

const Footer = ({}: Props) => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <img src={Logo} alt="Logo" />
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
