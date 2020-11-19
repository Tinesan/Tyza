import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import CooperationIcon from "images/icons/cooperation.svg";
import { colors } from "ui/colors";
import { device } from "ui/media";

const CooperationWrapper = styled.section`
  background-color: ${colors.silk};
  padding: 40px 0;
  font-size: 24px;
  color: ${colors.white};

  @media ${device.tablet} {
    padding: 25px 0;
    font-size: 18px;
  }

  @media ${device.mobile} {
    padding: 35px 0;
  }
`;

const CooperationBg = styled.div`
  height: 200px;
  background: url(${CooperationIcon}) no-repeat;
  background-size: contain;
  background-position: center center;

  @media ${device.tablet} {
    height: 135px;
  }

  @media ${device.mobile} {
    height: 100px;
    margin-bottom: 20px;
  }
`;

const Cooperation = () => {
  return (
    <CooperationWrapper>
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <CooperationBg />
          </Col>
          <Col md={8}>
            Приглашаем к сотрудничеству по сбыту нашей продукции индивидуальных
            предпринимателей, физических и юридических лиц на взаимовыгодной
            основе.
          </Col>
        </Row>
      </Container>
    </CooperationWrapper>
  );
};

export default Cooperation;
