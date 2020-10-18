import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "ui/colors";
import CooperationIcon from "images/icons/cooperation.svg";

const CooperationWrapper = styled.section`
  background-color: ${colors.silk};
  padding: 40px 0;
  font-size: 24px;
  color: ${colors.white};
`;

const CooperationBg = styled.div`
  height: 200px;
  background: url(${CooperationIcon}) no-repeat;
  background-position: center center;
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
