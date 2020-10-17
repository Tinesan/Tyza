import { H2 } from "components/Advantages/Advantages";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ColdProd from "images/coldProd.png";
import CurveLine from "images/icons/curveLine.svg";

const ColdProductionWrapper = styled.section`
  margin-top: 100px;
`;

const ColdProductionBg = styled.div`
  height: 220px;
  background: url(${ColdProd}) no-repeat;
`;

const CurveLineBg = styled.div`
  height: 120px;
  background: url(${CurveLine}) no-repeat;
  background-size: contain;
`;

const CurveLineBgWrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 100px;
`;

const ColdProduction = () => {
  return (
    <ColdProductionWrapper>
      <Container>
        <Row className="align-items-center">
          <Col>
            <ColdProductionBg />
          </Col>
          <Col>
            <H2 className="amatic coffee-color">
              Наши корма можно давать сразу после разморозки
            </H2>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <CurveLineBgWrapper>
              <CurveLineBg />
            </CurveLineBgWrapper>
          </Col>
        </Row>
      </Container>
    </ColdProductionWrapper>
  );
};

export default ColdProduction;
