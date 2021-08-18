import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import ColdProd from "images/coldProd.png";
import CurveLine from "images/icons/curveLine.svg";
import { device } from "ui/media";
import { H2 } from "ui/Title";

const ColdProductionWrapper = styled.section``;

const ColdProductionBg = styled.div`
  height: 320px;
  background: url(${ColdProd}) no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    height: 120px;
    background-position: center center;
    margin-bottom: 20px;
  }
`;

const CurveLineBg = styled.div`
  height: 120px;
  background: url(${CurveLine}) no-repeat;
  background-size: contain;
  @media ${device.tablet} {
    height: 80px;
  }
  @media ${device.mobile} {
    height: 50px;
  }
`;

const CurveLineBgWrapper = styled.div`
  margin-top: 70px;

  @media ${device.tablet} {
    margin-top: 30px;
  }

  @media ${device.mobile} {
    margin-top: 15px;
  }
`;

const ColdProduction = () => {
  return (
    <ColdProductionWrapper>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={6}>
            <ColdProductionBg />
          </Col>
          <Col xs={12} lg={6}>
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
