import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "ui/colors";
import DogOnFoot from "images/dogOnFoot.png";
import { H2 } from "ui/Title";

const PortionWrapper = styled.section`
  position: relative;
  padding: 90px 0;
  color: ${colors.white};

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(${DogOnFoot}) no-repeat;
    background-position: 50% bottom;
    background-size: contain;
  }
`;

const PortionContent = styled.div`
  padding: 70px 0;
  background-color: ${colors.silk};
`;

const PortionMainDescription = styled.p`
  font-size: 24px;
`;

const PortionSecondaryDescription = styled.p`
  font-size: 18px;
`;

const Portion = () => {
  return (
    <PortionWrapper>
      <PortionContent>
        <Container>
          <Row>
            <Col md={6}>
              <H2 className="amatic  mb-5">Порция взрослой собаки</H2>
              <PortionMainDescription>
                Вес взрослой собаки * на <b>0,035</b>
              </PortionMainDescription>
              <PortionSecondaryDescription>
                Пример: собака 10 кг * 0,035 = 350 гр.)
              </PortionSecondaryDescription>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <H2 className="amatic white-color mb-5">Порция щенка</H2>
              <PortionMainDescription>
                Вес щенка * на <b>0,065</b>
              </PortionMainDescription>
              <PortionSecondaryDescription>
                Пример: щенок 5 кг * 0,065 = 325 гр.)
              </PortionSecondaryDescription>
            </Col>
          </Row>
        </Container>
      </PortionContent>
    </PortionWrapper>
  );
};

export default Portion;
