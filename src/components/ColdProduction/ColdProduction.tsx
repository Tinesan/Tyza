import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import ColdProd from "images/coldProd.png";
import { device } from "ui/media";
import { H2 } from "ui/Title";
import { colors } from "ui/colors";

const ColdProductionWrapper = styled.section`
  background: ${colors.dawnPink};
  padding-top: 40px;
  padding-bottom: 40px;
  @media ${device.mobile} {
    background: ${colors.white};
  }
`;

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

const ColdProduction = () => {
  return (
    <ColdProductionWrapper>
      <Container>
        <Row className="al align-items-center">
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
    </ColdProductionWrapper>
  );
};

export default ColdProduction;
